# Resource Viewer Styling Documentation

## Overview
The ResourceViewer component provides a premium reading experience with sophisticated visual design, interactive features, and rich content rendering.

## Layout Architecture

### Core Structure
- **Full-height flex column**: Header → Scrollable Content → Footer
- **Three-panel layout**: Fixed header, flexible content area, fixed footer
- **Responsive design**: Adapts to different screen sizes

### Visual Layers
- **Reading progress bar**: Top gradient overlay (blue→purple→pink)
- **Header gradient**: Subtle primary color fade from top
- **Glassmorphic effects**: Backdrop blur with semi-transparent backgrounds

## Header Styling

### Container
```css
- backdrop-blur-md + bg-background/80 (glassmorphic effect)
- Border bottom separator
- Flex layout with space-between alignment
```

### Resource Metadata
- **Type badge**: Outlined badge with background blur
- **Difficulty badge**: Color-coded system:
  - `beginner`: Green (bg-green-100/text-green-800)
  - `intermediate`: Yellow (bg-yellow-100/text-yellow-800)
  - `expert`: Red (bg-red-100/text-red-800)
- **Read time**: Muted badge with clock icon

### Title Treatment
- **Gradient text**: `bg-gradient-to-r from-foreground to-foreground/70`
- **Font**: Bold, large (text-xl)
- **Line clamping**: Prevents overflow with ellipsis

### Excerpt Styling
- **Bold text highlighting**: Primary background with rounded corners
- **Muted foreground**: Subtle contrast
- **Line height**: Relaxed for readability

## Content Area Styling

### Scrollable Container
- **Gradient background**: Subtle fade from background colors
- **Custom scrollbars**: Theme-aware styling
- **Reading progress tracking**: Scroll position percentage

### Typography System
- **Dynamic font sizing**: 12px-20px range with slider control
- **CSS custom properties**:
  ```css
  --font-size: ${fontSize}px
  --line-height: adaptive (1.5 for small, 1.6 for large)
  --spacing: proportional to font size
  ```

### Content Rendering

#### Headers (##)
- **Gradient dividers**: Horizontal lines with primary color fade
- **Bold typography**: text-2xl with gradient text treatment
- **Centered layout**: Dividers on both sides

#### Subheaders (**)
- **Emoji icons**: Context-aware (🎉 venue, 🍽 catering, 📸 photo, etc.)
- **Card styling**: Muted background with left border accent
- **Typography**: Bold text-lg with foreground/90 opacity

#### Lists
- **Numbered lists**: Circular bullet points with primary fill
- **Bullet points**: CheckCircle icons with primary color
- **Indentation**: Consistent 6-unit left margin
- **Markdown rendering**: Bold text with background highlights

#### Special Elements
- **Percentages**: Green/purple badges based on range vs single value
- **Dollar amounts**: Emerald-colored badge styling
- **Pro tips**: Callout boxes with warning (amber) or tip (blue) colors
- **Paragraph text**: Muted foreground with relaxed line height

## Interactive Features

### Text Selection & Dragging
- **Selection highlighting**: Blue background with white text when drag-ready
- **Custom drag preview**: Styled tooltip with text truncation
- **Drag indicator**: Floating notification for user guidance
- **State management**: Visual feedback for drag readiness

### Reading Progress
- **Progress bar**: Top gradient indicator
- **Percentage display**: Footer completion status
- **Scroll tracking**: Real-time position calculation

### Font Size Control
- **Range slider**: 12px-20px with custom thumb styling
- **Visual indicators**: Small/large 'A' icons on sides
- **Responsive adjustment**: Content reflows dynamically

## Footer Styling

### Container
- **Glassmorphic treatment**: backdrop-blur-md + bg-background/80
- **Border separator**: Top border for visual separation
- **Flex layout**: Space-between alignment

### Status Elements
- **Progress dot**: Gradient circular indicator
- **Completion percentage**: Primary background badge
- **Resource metadata**: Type and read time display

### Controls
- **Font slider**: Muted background with primary thumb
- **External link button**: Conditional rendering based on blog post availability
- **Button styling**: Outline variant with backdrop blur

## Color System

### Gradients
- **Progress bar**: `from-blue-500 via-purple-500 to-pink-500`
- **Text treatments**: `from-foreground to-foreground/70`
- **Headers**: `from-foreground via-primary to-foreground`

### Badge Colors
- **Difficulty levels**: Semantic color coding
- **Content highlights**: Primary color with opacity variations
- **Status indicators**: Green for completion, blue for tips, amber for warnings

### Transparency & Blur
- **Glassmorphic effects**: 80% background opacity with backdrop blur
- **Overlay gradients**: Primary color with 5%/2% opacity fade
- **Border treatments**: Primary color with 20% opacity

## Animation & Transitions

### Entrance Effects
- **Drag indicator**: `animate-in slide-in-from-right-5`
- **Content transitions**: 300ms duration for smooth changes

### Hover States
- **Interactive elements**: Color and background transitions
- **Button interactions**: Primary color highlights on hover

## Responsive Behavior

### Content Adaptation
- **Font scaling**: Maintains readability across sizes
- **Spacing adjustments**: Proportional to font size
- **Layout flexibility**: Content reflows based on available space

### Mobile Considerations
- **Touch interactions**: Drag functionality adapted for touch
- **Font controls**: Easy-to-use slider interface
- **Reading experience**: Optimized line lengths and spacing

## Technical Implementation

### CSS Custom Properties
Dynamic styling through CSS variables for font sizes, spacing, and responsive adjustments.

### React State Management
- **fontSize**: Controlled slider input
- **scrollProgress**: Real-time scroll tracking
- **selectedText**: Drag-and-drop functionality
- **isDragReady**: Visual state indication

### Performance Optimizations
- **Callback optimization**: useCallback for event handlers
- **Efficient rendering**: Conditional content generation
- **Memory management**: Cleanup for drag elements and event listeners