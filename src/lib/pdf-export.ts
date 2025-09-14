"use client"

// PDF Export functionality for templates with professional branding
// This creates premium, shareable dossiers that showcase Templata's value

export interface PDFExportConfig {
  templateId: string
  templateName: string
  category: string
  sections: PDFSection[]
  userNotes?: string[]
  brandConfig?: BrandConfig
}

export interface PDFSection {
  id: string
  title: string
  content: string[]
  type: "checklist" | "guide" | "timeline" | "resources"
  completed?: boolean[]
}

export interface BrandConfig {
  primaryColor: string
  logo?: string
  website: string
  tagline: string
}

const DEFAULT_BRAND: BrandConfig = {
  primaryColor: "#2563eb", // Default primary color
  website: "templata.com",
  tagline: "Life doesn't have to start with a blank page"
}

export class PDFExporter {
  private config: PDFExportConfig
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(config: PDFExportConfig) {
    this.config = {
      ...config,
      brandConfig: { ...DEFAULT_BRAND, ...config.brandConfig }
    }

    // Create canvas for PDF generation
    this.canvas = document.createElement('canvas')
    this.canvas.width = 595 // A4 width in points
    this.canvas.height = 842 // A4 height in points
    this.ctx = this.canvas.getContext('2d')!
  }

  async generatePDF(): Promise<Blob> {
    try {
      // For now, let's use a simpler approach with canvas and convert to PDF
      const { jsPDF } = await import('jspdf')
      const pdf = new jsPDF('p', 'pt', 'a4')

      // Set up the PDF with branding
      await this.renderCoverPage(pdf)
      await this.renderContent(pdf)
      await this.renderFooter(pdf)

      return new Blob([pdf.output('blob')], { type: 'application/pdf' })
    } catch (error) {
      console.error('PDF generation failed:', error)
      throw new Error('Failed to generate PDF export')
    }
  }

  private async renderCoverPage(pdf: any) {
    const { templateName, category, brandConfig } = this.config
    const primaryColor = brandConfig!.primaryColor

    // Cover page background gradient
    pdf.setFillColor(255, 255, 255)
    pdf.rect(0, 0, 595, 842, 'F')

    // Header with Templata branding
    pdf.setFillColor(37, 99, 235) // Primary blue
    pdf.rect(0, 0, 595, 100, 'F')

    // Templata logo/title
    pdf.setTextColor(255, 255, 255)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(24)
    pdf.text('TEMPLATA', 50, 55)

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(12)
    pdf.text(brandConfig!.tagline, 50, 75)

    // Template title
    pdf.setTextColor(51, 51, 51)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(32)
    const titleY = 200
    pdf.text(templateName, 50, titleY, { maxWidth: 495 })

    // Category badge
    pdf.setFillColor(243, 244, 246)
    pdf.roundedRect(50, titleY + 30, 120, 30, 15, 15, 'F')
    pdf.setTextColor(75, 85, 99)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(12)
    pdf.text(category, 60, titleY + 50)

    // Decorative elements
    pdf.setFillColor(37, 99, 235, 0.1)
    pdf.circle(450, 300, 100, 'F')
    pdf.circle(500, 400, 60, 'F')

    // Export date
    pdf.setTextColor(107, 114, 128)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(10)
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    pdf.text(`Generated on ${date}`, 50, 780)
  }

  private async renderContent(pdf: any) {
    let yPosition = 120
    const pageHeight = 842
    const margin = 50
    const contentWidth = 495

    pdf.addPage()

    // Table of contents
    pdf.setTextColor(51, 51, 51)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(20)
    pdf.text('Contents', margin, yPosition)
    yPosition += 40

    // Render each section
    for (let i = 0; i < this.config.sections.length; i++) {
      const section = this.config.sections[i]

      // Check if we need a new page
      if (yPosition > pageHeight - 150) {
        pdf.addPage()
        yPosition = 80
      }

      // Section title
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(16)
      pdf.setTextColor(37, 99, 235)
      pdf.text(`${i + 1}. ${section.title}`, margin, yPosition)
      yPosition += 30

      // Section content
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(11)
      pdf.setTextColor(75, 85, 99)

      for (let j = 0; j < section.content.length; j++) {
        const item = section.content[j]

        // Check for page break
        if (yPosition > pageHeight - 100) {
          pdf.addPage()
          yPosition = 80
        }

        if (section.type === 'checklist') {
          // Render checkbox
          const isCompleted = section.completed?.[j] || false
          if (isCompleted) {
            pdf.setFillColor(34, 197, 94) // Green
          } else {
            pdf.setFillColor(243, 244, 246) // Light gray
          }
          pdf.roundedRect(margin, yPosition - 10, 12, 12, 2, 2, 'F')

          if (isCompleted) {
            pdf.setTextColor(255, 255, 255)
            pdf.setFont('helvetica', 'bold')
            pdf.setFontSize(8)
            pdf.text('✓', margin + 3, yPosition - 2)
          }

          pdf.setTextColor(75, 85, 99)
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(11)
          pdf.text(item, margin + 20, yPosition, { maxWidth: contentWidth - 20 })
        } else {
          // Regular bullet point
          pdf.text(`• ${item}`, margin, yPosition, { maxWidth: contentWidth })
        }

        yPosition += 20
      }

      yPosition += 20 // Extra space between sections
    }

    // User notes section
    if (this.config.userNotes && this.config.userNotes.length > 0) {
      if (yPosition > pageHeight - 150) {
        pdf.addPage()
        yPosition = 80
      }

      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(16)
      pdf.setTextColor(37, 99, 235)
      pdf.text('Your Notes', margin, yPosition)
      yPosition += 30

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(11)
      pdf.setTextColor(75, 85, 99)

      for (const note of this.config.userNotes) {
        if (yPosition > pageHeight - 100) {
          pdf.addPage()
          yPosition = 80
        }
        pdf.text(`• ${note}`, margin, yPosition, { maxWidth: contentWidth })
        yPosition += 20
      }
    }
  }

  private async renderFooter(pdf: any) {
    const pageCount = pdf.getNumberOfPages()

    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i)

      // Footer background
      pdf.setFillColor(248, 250, 252)
      pdf.rect(0, 790, 595, 52, 'F')

      // "Made with Templata" branding
      pdf.setTextColor(107, 114, 128)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(10)
      pdf.text('Made with ❤️ by Templata', 50, 815)

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9)
      pdf.text(`${this.config.brandConfig!.website} • ${this.config.brandConfig!.tagline}`, 50, 830)

      // Page number
      pdf.text(`Page ${i} of ${pageCount}`, 545, 815, { align: 'right' })

      // Subtle branding line
      pdf.setDrawColor(37, 99, 235)
      pdf.setLineWidth(2)
      pdf.line(50, 805, 545, 805)
    }
  }

  // Helper method to save the PDF
  async savePDF(filename?: string) {
    const blob = await this.generatePDF()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename || `${this.config.templateName.replace(/\s+/g, '-').toLowerCase()}-templata-export.pdf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Helper method to share the PDF
  async sharePDF(): Promise<File> {
    const blob = await this.generatePDF()
    return new File([blob], `${this.config.templateName}-templata-export.pdf`, {
      type: 'application/pdf'
    })
  }
}

// Utility function to export template as PDF
export async function exportTemplateToPDF(config: PDFExportConfig): Promise<void> {
  const exporter = new PDFExporter(config)
  await exporter.savePDF()
}

// Utility function to get shareable PDF
export async function getShareablePDF(config: PDFExportConfig): Promise<File> {
  const exporter = new PDFExporter(config)
  return await exporter.sharePDF()
}