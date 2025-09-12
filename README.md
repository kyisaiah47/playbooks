# Templata

> Skip the blank page. Start with abundant guidance for life's biggest moments.

Templata is a guidance-first platform that provides tons of expert insights, reflection prompts, and resources for life's most important decisions. Rather than gamified task lists, we focus on helping you think through complex decisions with professional guidance and abundant ideas.

## 🌟 Philosophy: The Abundance Mindset

Life's biggest moments deserve more than task lists and empty templates. When planning a wedding, buying a home, or making major decisions, you need **abundant guidance, expert insights, and thoughtful reflection prompts** - not just checkboxes to complete.

Templata provides:
- **Tons of reflection prompts** to guide your thinking
- **Expert insights** from professionals with 15+ years of experience  
- **Comprehensive resources** covering every angle of your decision
- **Guidance over gamification** - we help you think, not just do

## ✨ New Architecture Features

- **Guidance-Focused Templates** - Built around reflection and expert insights, not task completion
- **Email-Style Sidebar Navigation** - Dual sidebar with insertable prompts and resources
- **Abundant Content** - 48+ reflection prompts per template with detailed guidance
- **Expert Resources** - Professional guides, checklists, and insider knowledge
- **Insertable Prompts** - Browse and add relevant prompts to any section
- **Theme-Aware Design** - Beautiful scrollbars and consistent theming across all pages

## 🎯 Live Templates

### ✅ Wedding Planning (Complete)
**48+ Reflection Prompts | 8 Expert Resources | Professional Guidance**

Our flagship template covers every aspect of wedding planning with abundant guidance:

- **Budget & Financial Planning** - 6 prompts covering max budget, family contributions, emergency planning
- **Venue Selection & Logistics** - 6 prompts for venue style, guest count, season flexibility  
- **Guest List & Invitations** - 6 prompts for guest tiers, family politics, plus-one policies
- **Vendor Research & Hiring** - 6 prompts for vendor priorities, contract review, backup planning
- **Ceremony Design & Flow** - 6 prompts for ceremony length, vows, cultural traditions
- **Reception Flow & Entertainment** - 6 prompts for atmosphere, timeline, special moments
- **Styling, Decor & Flowers** - 6 prompts for color palettes, floral priorities, personal touches
- **Attire, Beauty & Getting Ready** - 6 prompts for dress style, beauty prep, weather backup

**Expert Resources Include:**
- Ultimate Wedding Budget Breakdown by Category
- 25 Hidden Wedding Costs That Surprise Every Couple  
- 50 Ways to Cut Wedding Costs Without Sacrificing Style
- Wedding Vendor Contract Review Checklist
- Complete Wedding Day Timeline Template
- Wedding Day Emergency Kit: 40 Must-Have Items
- Wedding Guest Accommodation Guide
- Wedding Photography: What to Expect and How to Prepare

### 🚧 Coming Soon
- **Home Buying Guidance** - Navigate the complex home buying process with expert insights
- **Career Transition Planning** - Professional guidance for career changes
- **Business Launch Strategy** - Comprehensive startup guidance and planning

## 🚀 Getting Started

### Try the Wedding Template
1. **Visit the Template** - Go to `/wedding-planning/app`  
2. **Explore Sections** - Browse 8 comprehensive planning areas
3. **Add Prompts** - Use the sidebar to insert additional prompts 
4. **Write & Reflect** - Use the guidance to work through each decision
5. **Access Resources** - Reference expert guides and professional tips

### For Developers
Run the development server and explore:
- **Main Landing:** `http://localhost:3001` 
- **Wedding Template:** `http://localhost:3001/wedding-planning/app`
- **Marketing Page:** `http://localhost:3001/wedding-planning`

### Development Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: Next.js 15 with TypeScript  
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **UI Components**: Email-style dual sidebar navigation with insertable prompts
- **Icons**: Lucide React
- **Theme System**: CSS custom properties with OKLCH color space + custom scrollbars
- **State Management**: React Context API for template data
- **Content**: Abundant reflection prompts and expert resources

## 🏗 New Guidance-Focused Architecture

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Landing page  
│   ├── wedding-planning/  # Template routes
│   │   ├── page.tsx       # Marketing landing page
│   │   └── app/          # Template application
│   │       └── page.tsx   # Guidance interface
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── prompts/           # NEW: Prompt components
│   │   └── EmbeddedPrompts.tsx # Main prompt interface
│   ├── template/          # NEW: Template system  
│   │   └── TemplateView.tsx    # Email-style layout
│   └── templata-sidebar.tsx    # NEW: Dual sidebar navigation
├── types/                 # NEW: Guidance data models
│   └── template.ts        # GuidanceTemplate, ReflectionPrompt types
├── data/                  # NEW: Template content
│   └── templates.ts       # Wedding template with 48+ prompts
└── contexts/              # Context providers for each template
```

## 🎨 Design System

Templata uses the Vercel theme from [tweakcn.com](https://tweakcn.com) featuring:
- **Colors**: Clean black/white OKLCH color space
- **Typography**: Clean, readable font hierarchy
- **Components**: Exclusively shadcn/ui components
- **Theme**: Programmatic theme switching per template

## 🧩 Key Components

### Email-Style Sidebar Navigation
Dual sidebar system inspired by modern email clients:
- **Left Navigation** - Template sections with visual indicators
- **Right Content Browser** - Insertable prompts and resources with search
- **Collapsible Design** - Clean, space-efficient interface
- **Search Functionality** - Find relevant prompts and resources quickly

### Guidance-Focused Templates  
Built around reflection and expert insights:
- **48+ Reflection Prompts** per template with detailed help text
- **Professional Expert Tips** from 15+ year veterans
- **Comprehensive Resources** covering every angle
- **Insertable Prompt System** - Add relevant prompts to any section
- **No Task Gamification** - Focus on thinking, not checking boxes

### Embedded Prompts Interface
Rich prompt experience with guidance:
- **Category-Based Organization** - consideration, planning, decision, research
- **Helpful Context** - Every prompt includes professional guidance
- **Dynamic Insertion** - Browse and add prompts without losing context
- **Rich Text Areas** - Space for detailed reflection and planning
- **Visual Prompt Categories** - Icons and colors for quick identification

### Custom Scrollbars & Theming
Polished visual experience:
- **Theme-Aware Scrollbars** - Custom styling that adapts to light/dark modes
- **OKLCH Color Space** - Modern color system for better theming
- **Consistent Visual Language** - Unified design across all interfaces

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Template Ideas** - Suggest new templates for life moments we haven't covered
2. **User Experience** - Report bugs or suggest UI/UX improvements
3. **Expert Knowledge** - Share domain expertise for template creation
4. **Code Contributions** - Submit PRs for features or fixes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Inspiration

Templata draws inspiration from:
- **Notion** - For democratizing knowledge organization
- **Canva** - For making design accessible to everyone
- **Linear** - For clean, functional design patterns

We're doing for life organization what these tools did for their respective domains - making the complex simple and the overwhelming manageable.

## 📞 Support

- **FAQ**: [templata.com/faq](https://templata.com/faq)
- **Community**: Join our forum for user discussions
- **Email**: support@templata.com
- **Response Time**: Within 24 hours

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ for people organizing life's biggest moments.