import { Terminal } from "lucide-react";

export function StructuredGuide() {
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
      {/* Terminal Header */}
      <div className="h-8 bg-zinc-800 border-b border-white/10 flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex items-center gap-2 ml-2">
          <Terminal className="h-3 w-3 text-zinc-400" />
          <span className="text-[11px] text-zinc-400 font-mono">templata-builder</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="bg-black p-6 font-mono text-[13px] leading-relaxed">
        <div className="space-y-1">
          <div className="text-zinc-500">$ templata generate career-transition</div>
          <div className="text-zinc-500 mt-3">Initializing guide builder...</div>
          <div className="text-zinc-500">Loading expert frameworks...</div>
          <div className="mt-3"></div>

          <div className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <div className="flex-1">
              <div className="text-green-500">Context analysis complete</div>
              <div className="text-zinc-600 text-[11px] ml-0">  → Analyzed 247 career transition cases</div>
              <div className="text-zinc-600 text-[11px] ml-0">  → Identified 8 key decision factors</div>
            </div>
          </div>

          <div className="mt-2"></div>

          <div className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <div className="flex-1">
              <div className="text-green-500">Question generation complete</div>
              <div className="text-zinc-600 text-[11px] ml-0">  → Generated 12 core questions</div>
              <div className="text-zinc-600 text-[11px] ml-0">  → Mapped to decision framework</div>
            </div>
          </div>

          <div className="mt-2"></div>

          <div className="flex items-start gap-2">
            <span className="text-blue-400 animate-pulse">▸</span>
            <div className="flex-1">
              <div className="text-blue-400">Curating resources...</div>
              <div className="text-zinc-500 text-[11px] ml-0 mt-1">  + The Dip: When to Quit (and When to Stick)</div>
              <div className="text-zinc-500 text-[11px] ml-0">  + Career Capital Theory - Cal Newport</div>
              <div className="text-zinc-500 text-[11px] ml-0">  + Switching Costs in Career Changes</div>
              <div className="text-zinc-600 text-[11px] ml-0 mt-1">  [████████░░] 80% • 3 of 6 readings</div>
            </div>
          </div>

          <div className="mt-2"></div>

          <div className="flex items-start gap-2">
            <span className="text-zinc-700">○</span>
            <div className="flex-1">
              <div className="text-zinc-700">Structure optimization</div>
              <div className="text-zinc-800 text-[11px] ml-0">  → Pending</div>
            </div>
          </div>

          <div className="mt-4"></div>

          <div className="border-l-2 border-blue-500/30 pl-3 py-2 bg-blue-500/5">
            <div className="text-blue-400 text-[11px]">ℹ Expert-curated, AI-enhanced</div>
            <div className="text-zinc-500 text-[11px] mt-1">Every guide starts with expert frameworks and is enhanced</div>
            <div className="text-zinc-500 text-[11px]">with AI to find the most relevant resources.</div>
          </div>

          <div className="mt-3"></div>

          <div className="text-zinc-500 flex items-center">
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </div>
  );
}
