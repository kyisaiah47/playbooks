# Claude Credit Cycle Automation - Windows PowerShell Version
# Runs every 5 hours to maximize template generation with credit resets
# Usage: .\claude-credit-cycle.ps1 [start|status|stop|cycle|merge|logs]

param(
    [Parameter(Position=0)]
    [string]$Command = "help"
)

# Configuration
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$WorktreeDir = Join-Path (Split-Path -Parent $ScriptDir) "templata-worktrees"
$TemplateListFile = Join-Path $ScriptDir "template-list.txt"
$PidFile = Join-Path $ScriptDir ".claude-cycle.pid"
$LogFile = Join-Path $ScriptDir "claude-cycle.log"
$TemplatesPerCycle = 11
$CycleHours = 5

# Colors for output
$Colors = @{
    Red = "Red"
    Green = "Green"
    Yellow = "Yellow"
    Blue = "Blue"
    Purple = "Magenta"
    Cyan = "Cyan"
}

function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logEntry = "$timestamp - $Message"
    Write-Output $logEntry
    Add-Content -Path $LogFile -Value $logEntry
}

function Write-ColorLog {
    param([string]$Color, [string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logEntry = "$timestamp - $Message"
    Write-Host $logEntry -ForegroundColor $Colors[$Color]
    Add-Content -Path $LogFile -Value $logEntry
}

# Get next batch of templates to process (checks actual repo files)
function Get-NextTemplateBatch {
    $batch = @()
    $count = 0
    
    if (-not (Test-Path $TemplateListFile)) {
        Write-ColorLog "Red" "❌ Template list file not found: $TemplateListFile"
        return @()
    }
    
    # Read template list, skipping comments and empty lines
    Get-Content $TemplateListFile | ForEach-Object {
        $template = $_.Trim()
        
        # Skip comments and empty lines
        if ($template -match '^#.*$' -or [string]::IsNullOrWhiteSpace($template)) {
            return
        }
        
        # Check if template already exists in repo
        $templatePath = Join-Path $ScriptDir "src\app\$template"
        if (Test-Path $templatePath) {
            # Template already completed - skip
            return
        }
        
        # Add to batch if not completed
        $batch += $template
        $count++
        
        # Stop when we have enough for this batch
        if ($count -eq $TemplatesPerCycle) {
            return
        }
    }
    
    return $batch
}

# Get completion stats by checking repo files
function Get-CompletionStats {
    $totalCount = 0
    $completedCount = 0
    
    if (-not (Test-Path $TemplateListFile)) {
        return @{ Completed = 0; Total = 0 }
    }
    
    # Count all templates (non-comment lines)
    Get-Content $TemplateListFile | ForEach-Object {
        $template = $_.Trim()
        if (-not ($template -match '^#.*$') -and -not [string]::IsNullOrWhiteSpace($template)) {
            $totalCount++
            
            # Check if completed (directory exists)
            $templatePath = Join-Path $ScriptDir "src\app\$template"
            if (Test-Path $templatePath) {
                $completedCount++
            }
        }
    }
    
    return @{ Completed = $completedCount; Total = $totalCount }
}

# Create worktrees for template batch
function New-TemplateWorktrees {
    param([string[]]$Templates)
    
    Write-ColorLog "Blue" "🌳 Creating worktrees for $($Templates.Count) templates..."
    
    # Clean existing worktrees
    if (Test-Path $WorktreeDir) {
        Write-ColorLog "Yellow" "🧹 Cleaning existing worktrees..."
        Set-Location $ScriptDir
        
        # Get list of worktrees and remove them
        $worktrees = & git worktree list --porcelain | Where-Object { $_ -match "^worktree " } | ForEach-Object { $_ -replace "^worktree ", "" }
        $worktrees | Where-Object { $_ -like "*templata-worktrees*" -and $_ -ne $ScriptDir } | ForEach-Object {
            try {
                & git worktree remove --force $_
            } catch {
                Write-ColorLog "Yellow" "⚠️ Could not remove worktree: $_"
            }
        }
        
        Remove-Item -Path $WorktreeDir -Recurse -Force -ErrorAction SilentlyContinue
    }
    
    # Create fresh worktrees
    New-Item -ItemType Directory -Path $WorktreeDir -Force | Out-Null
    
    foreach ($template in $Templates) {
        $branchName = "feature/template-$template"
        $worktreePath = Join-Path $WorktreeDir $template
        
        Write-ColorLog "Cyan" "🌿 Creating worktree: $template"
        
        Set-Location $ScriptDir
        
        # Delete branch if exists
        try {
            & git branch -D $branchName 2>$null
        } catch {}
        
        # Create fresh worktree
        & git worktree add $worktreePath -b $branchName
        
        # Set permissions for Claude workflow script
        $workflowScript = Join-Path $worktreePath "claude_workflow.sh"
        if (Test-Path $workflowScript) {
            # On Windows, ensure script is readable
            Set-ItemProperty -Path $workflowScript -Name IsReadOnly -Value $false
        }
    }
    
    Write-ColorLog "Green" "✅ Created $($Templates.Count) worktrees successfully!"
}

# Launch Claude automation for all templates (FULLY AUTOMATED)
function Start-ClaudeAutomation {
    param([string[]]$Templates)
    
    Write-ColorLog "Purple" "🚀 Launching FULLY AUTOMATED Claude workflows for $($Templates.Count) templates..."
    
    # Launch all templates in background processes
    $pids = @()
    $pidFile = Join-Path $ScriptDir ".claude_workflow_pids"
    if (Test-Path $pidFile) { Remove-Item $pidFile }
    
    foreach ($template in $Templates) {
        $worktreePath = Join-Path $WorktreeDir $template
        
        Write-ColorLog "Cyan" "🤖 Auto-launching Claude workflow: $template"
        
        # Launch claude workflow in background using PowerShell job
        $job = Start-Job -ScriptBlock {
            param($WorktreePath, $Template)
            Set-Location $WorktreePath
            
            # Copy and execute the working simplified workflow script
            Copy-Item "$using:ScriptDir\claude_workflow_simple.sh" ".\claude_workflow_simple.sh"
            if (Test-Path ".\claude_workflow_simple.sh") {
                # On Windows, might need to use WSL or Git Bash to run shell script
                if (Get-Command "bash" -ErrorAction SilentlyContinue) {
                    & bash ".\claude_workflow_simple.sh" > "claude_workflow_$Template.log" 2>&1
                } else {
                    Write-Output "Bash not found. Install Git Bash or WSL to run shell scripts."
                }
            }
        } -ArgumentList $worktreePath, $template
        
        $pids += $job.Id
        
        Write-ColorLog "Green" "✅ Started $template (Job ID: $($job.Id))"
        
        # Store PID for monitoring
        Add-Content -Path $pidFile -Value "$($job.Id):$template"
        
        # Small delay to prevent overwhelming system
        Start-Sleep -Seconds 2
    }
    
    Write-ColorLog "Purple" "🚀 All $($Templates.Count) Claude workflows launched automatically!"
    Write-ColorLog "Blue" "📊 Job IDs: $($pids -join ', ')"
    
    # Log batch start
    Write-LogBatchStart $Templates
    
    return $pids
}

# Log template batch start
function Write-LogBatchStart {
    param([string[]]$Templates)
    Write-ColorLog "Blue" "📊 Starting batch with $($Templates.Count) templates..."
    
    $stats = Get-CompletionStats
    Write-ColorLog "Cyan" "📈 Overall progress: $($stats.Completed)/$($stats.Total) templates completed"
    
    foreach ($template in $Templates) {
        Write-ColorLog "Purple" "🎯 Batch includes: $template"
    }
}

# Log completion stats
function Write-LogCompletionStats {
    param([int]$MergedCount)
    Write-ColorLog "Blue" "📊 Merge cycle completed: $MergedCount templates merged"
    
    $stats = Get-CompletionStats
    if ($stats.Total -gt 0) {
        $percentage = [math]::Round(($stats.Completed * 100) / $stats.Total, 1)
        Write-ColorLog "Green" "📈 Updated progress: $($stats.Completed)/$($stats.Total) templates completed ($percentage%)"
    }
}

# Monitor Claude workflows and auto-trigger merge when ready
function Watch-AndAutoMerge {
    param([string[]]$Templates)
    Write-ColorLog "Blue" "🔍 Starting automatic monitoring of $($Templates.Count) workflows..."
    
    $maxWaitMinutes = 270  # 4.5 hours
    $checkInterval = 1     # Check every minute
    $waitedMinutes = 0
    
    while ($waitedMinutes -lt $maxWaitMinutes) {
        $completedCount = 0
        
        # Check completion status of each template
        foreach ($template in $Templates) {
            $worktreePath = Join-Path $WorktreeDir $template
            $templateFile = Join-Path $worktreePath "src\app\templates\$template\page.tsx"
            
            # Check if template files exist (completion indicator)
            if (Test-Path $templateFile) {
                $completedCount++
            }
        }
        
        if ($Templates.Count -gt 0) {
            $completionPercentage = [math]::Round(($completedCount * 100) / $Templates.Count, 1)
            Write-ColorLog "Cyan" "📊 Progress: $completedCount/$($Templates.Count) completed ($completionPercentage%)"
            
            # Auto-merge when 80% complete or all done
            if ($completionPercentage -ge 80 -or $completedCount -eq $Templates.Count) {
                Write-ColorLog "Green" "✅ Sufficient progress ($completionPercentage%) - triggering auto-merge!"
                Merge-CompletedTemplates
                return
            }
        }
        
        # Wait and continue monitoring
        Start-Sleep -Seconds ($checkInterval * 60)
        $waitedMinutes += $checkInterval
        
        Write-ColorLog "Yellow" "⏳ Waited $waitedMinutes minutes, continuing to monitor..."
    }
    
    # Timeout reached - merge whatever is complete
    Write-ColorLog "Yellow" "⏰ 4.5 hour timeout reached - merging available templates"
    Merge-CompletedTemplates
}

# Merge completed templates
function Merge-CompletedTemplates {
    Write-ColorLog "Blue" "🔄 Starting merge cycle..."
    
    Set-Location $ScriptDir
    
    $mergedCount = 0
    if (Test-Path $WorktreeDir) {
        Get-ChildItem $WorktreeDir -Directory | ForEach-Object {
            $templateName = $_.Name
            $branchName = "feature/template-$templateName"
            $worktreePath = $_.FullName
            
            # Check if template appears complete (has template files)
            $templateFile = Join-Path $worktreePath "src\app\templates\$templateName\page.tsx"
            if (Test-Path $templateFile) {
                Write-ColorLog "Green" "✅ Merging completed template: $templateName"
                
                try {
                    # Switch to main and merge
                    & git checkout main
                    & git merge $branchName --no-edit
                    
                    # Clean up branch and worktree
                    & git worktree remove --force $worktreePath
                    & git branch -D $branchName
                    
                    $mergedCount++
                } catch {
                    Write-ColorLog "Red" "❌ Error merging $templateName : $_"
                }
            } else {
                Write-ColorLog "Yellow" "⏳ Template not complete yet: $templateName"
            }
        }
    }
    
    Write-ColorLog "Green" "🎉 Merged $mergedCount templates in this cycle"
    Write-LogCompletionStats $mergedCount
    
    return $mergedCount
}

# Main cycle execution (FULLY AUTOMATED)
function Start-Cycle {
    Write-ColorLog "Green" "🚀 Starting FULLY AUTOMATED Claude Credit Cycle $(Get-Date)"
    
    # Get next batch of templates
    $templates = Get-NextTemplateBatch
    
    if ($templates.Count -eq 0) {
        Write-ColorLog "Yellow" "🎉 All templates completed! No more work to do."
        return
    }
    
    Write-ColorLog "Blue" "📋 Processing $($templates.Count) templates: $($templates -join ', ')"
    
    # Phase 1: Create worktrees and launch automation
    New-TemplateWorktrees $templates
    
    # Clean previous PID file
    $pidFile = Join-Path $ScriptDir ".claude_workflow_pids"
    if (Test-Path $pidFile) { Remove-Item $pidFile }
    
    # Phase 2: Launch all Claude workflows automatically
    $pids = Start-ClaudeAutomation $templates
    Write-ColorLog "Purple" "🤖 All workflows launched! Monitoring for completion..."
    
    # Phase 3: Monitor progress and auto-merge when ready
    Watch-AndAutoMerge $templates
    
    # Cleanup PID tracking
    if (Test-Path $pidFile) { Remove-Item $pidFile }
}

# Run merge cycle only
function Start-Merge {
    Write-ColorLog "Green" "🔄 Starting merge-only cycle $(Get-Date)"
    $merged = Merge-CompletedTemplates
    
    if ($merged -gt 0) {
        Write-ColorLog "Green" "✅ Merge cycle completed. $merged templates merged."
        # After merge, start next cycle
        Write-ColorLog "Blue" "🔄 Starting next template batch..."
        Start-Cycle
    } else {
        Write-ColorLog "Yellow" "⚠️ No templates ready for merge yet."
    }
}

# Wait until next credit reset (3:00 AM)
function Wait-ForCreditReset {
    $now = Get-Date
    $currentHour = $now.Hour
    $currentMinute = $now.Minute
    $targetHour = 3
    $targetMinute = 0
    
    # Calculate minutes until 3:00 AM
    $minutesUntilReset = 0
    
    if ($currentHour -lt $targetHour -or ($currentHour -eq $targetHour -and $currentMinute -lt $targetMinute)) {
        # Same day - calculate minutes until 3:00 AM
        $minutesUntilReset = ($targetHour - $currentHour) * 60 + ($targetMinute - $currentMinute)
    } else {
        # Next day - calculate minutes until tomorrow's 3:00 AM
        $minutesUntilReset = (24 - $currentHour + $targetHour) * 60 + ($targetMinute - $currentMinute)
    }
    
    if ($minutesUntilReset -gt 0) {
        Write-ColorLog "Yellow" "⏰ Waiting $minutesUntilReset minutes until credit reset at 3:00 AM..."
        Write-ColorLog "Blue" "🕐 Current time: $($now.ToString('HH:mm:ss'))"
        Write-ColorLog "Green" "🎯 Start time: 03:00:00"
        
        # Sleep until credit reset
        Start-Sleep -Seconds ($minutesUntilReset * 60)
    }
    
    Write-ColorLog "Green" "🚀 Credits reset! Starting automation at $(Get-Date)"
}

# Continuous execution (FULLY AUTOMATED)
function Start-Continuous {
    Write-ColorLog "Green" "🔄 Starting FULLY AUTOMATED continuous automation"
    
    # Wait for credit reset before starting first cycle
    Wait-ForCreditReset
    
    while ($true) {
        # Check if there are more templates to process
        $templates = Get-NextTemplateBatch
        if ($templates.Count -eq 0) {
            Write-ColorLog "Green" "🎉 All templates completed! Stopping automation."
            break
        }
        
        Write-ColorLog "Blue" "🚀 Starting new cycle with $($templates.Count) templates at $(Get-Date)"
        
        # Run fully automated cycle (includes monitoring and auto-merge)
        Start-Cycle
        
        # Brief pause before starting next cycle
        Write-ColorLog "Blue" "⏳ Brief pause before next cycle..."
        Start-Sleep -Seconds 30
        
        Write-ColorLog "Green" "🔄 Cycle completed. Starting next cycle immediately..."
    }
    
    Write-ColorLog "Green" "🏁 All templates completed! Automation finished!"
}

# Status check
function Show-Status {
    Write-Host "📊 Claude Credit Cycle Status" -ForegroundColor Blue
    Write-Host "================================"
    
    if (Test-Path $PidFile) {
        try {
            $pid = Get-Content $PidFile
            $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
            if ($process) {
                Write-Host "Status: RUNNING (PID: $pid)" -ForegroundColor Green
            } else {
                Write-Host "Status: STOPPED (stale PID file)" -ForegroundColor Yellow
                Remove-Item $PidFile
            }
        } catch {
            Write-Host "Status: STOPPED (invalid PID file)" -ForegroundColor Yellow
            Remove-Item $PidFile -ErrorAction SilentlyContinue
        }
    } else {
        Write-Host "Status: STOPPED" -ForegroundColor Red
    }
    
    if (Test-Path $WorktreeDir) {
        $worktreeCount = (Get-ChildItem $WorktreeDir -Directory).Count
        Write-Host "Active Worktrees: $worktreeCount" -ForegroundColor Blue
    } else {
        Write-Host "Active Worktrees: 0" -ForegroundColor Blue
    }
    
    $templates = Get-NextTemplateBatch
    $stats = Get-CompletionStats
    if ($stats.Total -gt 0) {
        $percentage = [math]::Round(($stats.Completed * 100) / $stats.Total, 1)
        Write-Host "Progress: $($stats.Completed)/$($stats.Total) templates completed ($percentage%)" -ForegroundColor Green
    }
    
    Write-Host "Next Batch Size: $($templates.Count)" -ForegroundColor Purple
    if ($templates.Count -gt 0) {
        $preview = ($templates | Select-Object -First 5) -join ", "
        Write-Host "Next Templates: $preview..." -ForegroundColor Cyan
    } else {
        Write-Host "🎉 All templates completed!" -ForegroundColor Cyan
    }
    
    if (Test-Path $LogFile) {
        Write-Host "`nRecent Log Entries:" -ForegroundColor Yellow
        Get-Content $LogFile | Select-Object -Last 5 | ForEach-Object { Write-Host $_ }
    }
}

# Stop automation
function Stop-Automation {
    if (Test-Path $PidFile) {
        try {
            $pid = Get-Content $PidFile
            $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
            if ($process) {
                Write-ColorLog "Yellow" "🛑 Stopping automation (PID: $pid)"
                Stop-Process -Id $pid -Force
                Remove-Item $PidFile
                Write-ColorLog "Green" "✅ Automation stopped"
            } else {
                Write-ColorLog "Yellow" "⚠️ No running automation found"
                Remove-Item $PidFile
            }
        } catch {
            Write-ColorLog "Yellow" "⚠️ Error stopping automation: $_"
            Remove-Item $PidFile -ErrorAction SilentlyContinue
        }
    } else {
        Write-ColorLog "Yellow" "⚠️ No automation running"
    }
    
    # Also stop any running PowerShell jobs
    Get-Job | Where-Object { $_.Name -like "*claude*" -or $_.State -eq "Running" } | Stop-Job -PassThru | Remove-Job
}

# Main script logic
switch ($Command.ToLower()) {
    "start" {
        if (Test-Path $PidFile) {
            $existingPid = Get-Content $PidFile
            Write-ColorLog "Yellow" "⚠️ Automation already running (PID: $existingPid)"
            exit 1
        }
        
        Write-ColorLog "Green" "🚀 Starting Claude Credit Cycle automation..."
        
        # Start background job for continuous automation
        $job = Start-Job -ScriptBlock {
            param($ScriptPath)
            & powershell -File $ScriptPath "_continuous"
        } -ArgumentList $MyInvocation.MyCommand.Path
        
        $job.Id | Out-File $PidFile
        Write-ColorLog "Green" "✅ Automation started (Job ID: $($job.Id))"
    }
    
    "_continuous" {
        # Internal continuous mode (called by background job)
        Start-Continuous
        if (Test-Path $PidFile) { Remove-Item $PidFile }
    }
    
    "cycle" {
        Start-Cycle
    }
    
    "merge" {
        Start-Merge
    }
    
    "status" {
        Show-Status
    }
    
    "stop" {
        Stop-Automation
    }
    
    "logs" {
        if (Test-Path $LogFile) {
            Get-Content $LogFile -Tail 50 -Wait
        } else {
            Write-Host "No log file found"
        }
    }
    
    default {
        Write-Host "Claude Credit Cycle Automation - Windows PowerShell Version" -ForegroundColor Blue
        Write-Host "============================================================"
        Write-Host ""
        Write-Host "Usage: .\claude-credit-cycle.ps1 [command]"
        Write-Host ""
        Write-Host "Commands:"
        Write-Host "  start      - Start continuous automation" -ForegroundColor Green
        Write-Host "  cycle      - Run single cycle (create worktrees + launch)" -ForegroundColor Blue
        Write-Host "  merge      - Merge completed templates and start next cycle" -ForegroundColor Purple
        Write-Host "  status     - Show automation status" -ForegroundColor Yellow
        Write-Host "  stop       - Stop continuous automation" -ForegroundColor Red
        Write-Host "  logs       - Show live log output" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Workflow (FULLY AUTOMATED):"
        Write-Host "1. Run '.\claude-credit-cycle.ps1 start' to begin automation"
        Write-Host "2. Script runs COMPLETELY HANDS-OFF until all templates done"
        Write-Host "3. Each cycle: Creates worktrees → Launches Claude workflows → Monitors progress → Auto-merges"
        Write-Host "4. Automatically starts next batch when current batch reaches 80% completion"
        Write-Host "5. Runs 24/7 until all templates complete (estimated 48-72 hours total)"
        Write-Host ""
        Write-Host "Requirements:"
        Write-Host "• PowerShell 5.0+ (Windows 10/Server 2016+)"
        Write-Host "• Git for Windows (with bash support)"
        Write-Host "• Claude Code CLI in PATH"
        Write-Host ""
        Write-Host "Features:"
        Write-Host "• ZERO manual steps - completely automated"
        Write-Host "• Automatic Claude workflow execution in background"
        Write-Host "• Smart progress monitoring and auto-merge triggers"
        Write-Host "• Windows-native PowerShell implementation"
        Write-Host "• Fault tolerant - handles failures and continues"
    }
}