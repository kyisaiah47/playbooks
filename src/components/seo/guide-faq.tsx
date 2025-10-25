import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const weddingFAQs = [
  {
    question: "What's actually in this thing? 🤔",
    answer: "Everything we wish we'd had for our own weddings! You get budget tracking (so you don't accidentally spend your honeymoon fund on centerpieces), vendor management (no more lost contracts!), guest list organization, task management, 12 step-by-step guides for everything from writing vows to emergency kits, plus budget guides and checklists. It's like having a wedding planner friend who's really, really organized."
  },
  {
    question: "How much does the Wedding Planning Template cost?",
    answer: "You can start using the template completely free! Create your wedding planning workspace, use all the guided sections, and organize your planning process at no cost. Premium features and advanced customization options are available for couples who want additional functionality."
  },
  {
    question: "Can I customize the template for my specific wedding style?",
    answer: "Absolutely! The template is 100% customizable. You can modify all sections, add your own notes, customize budget categories, adjust guest list fields, and tailor every aspect to match your unique wedding vision and requirements."
  },
  {
    question: "Do I need any special software to use this template?",
    answer: "No special software required! The wedding planning template works directly in your web browser. It's accessible from any device - desktop, tablet, or mobile - so you can plan your wedding from anywhere."
  },
  {
    question: "How do the guided planning sections work?",
    answer: "Each of the 12 guided sections includes specific questions, examples, and expert tips to walk you through different aspects of wedding planning. From timeline creation to vendor questions, vows writing to emergency planning - each section provides structure while allowing complete customization."
  },
  {
    question: "Can my partner and wedding party access the template too?",
    answer: "Yes! You can share your wedding planning template with your partner, wedding party members, or family to collaborate on planning. Everyone can contribute to different sections while maintaining organization and avoiding duplicate work."
  },
  {
    question: "What if I'm planning a destination wedding or non-traditional ceremony?",
    answer: "The template is flexible enough to accommodate any wedding style - destination weddings, elopements, backyard ceremonies, cultural traditions, or modern celebrations. All sections can be customized to match your specific planning needs and wedding format."
  },
  {
    question: "How does the budget tracking feature work?",
    answer: "The budget tracker helps you allocate funds across different categories (venue, catering, photography, etc.), track actual expenses, monitor payments to vendors, and stay on top of your overall wedding budget. It includes built-in percentage guidelines and alerts to keep spending on track."
  },
  {
    question: "Is my wedding planning data secure and private?",
    answer: "Yes, your wedding planning information is completely private and secure. Only you and people you explicitly share access with can view your wedding plans. We use industry-standard security measures to protect your personal information and planning details."
  },
  {
    question: "What if I need help using the template or have planning questions?",
    answer: "The template includes built-in tips and guidance for each section. Additionally, our support team is available to help with technical questions, and each guided section provides expert wedding planning advice to help you make informed decisions."
  }
]

interface GuideFAQProps {
  templateType: 'wedding' | 'baby' | 'home-buying'
}

export function TemplateFAQ({ templateType }: TemplateFAQProps) {
  if (templateType !== 'wedding') {
    return <div>FAQ for {templateType} coming soon...</div>
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {weddingFAQs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}