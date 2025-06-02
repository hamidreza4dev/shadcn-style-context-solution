# Shadcn-Style Context Solution

A React TypeScript project demonstrating how to implement **style context** for reusable UI components with variant support, similar to shadcn/ui components but with enhanced styling capabilities.

### Example: Accordion Component
The accordion component demonstrates the style context pattern with multiple variants:
- `default` variant with red background
- `secondary` variant with blue background

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── accordion.tsx           # Example component with variants
│       └── utils/
│           └── create-style-context.tsx  # Core style context utility
├── App.tsx                         # Demo application
└── main.tsx                        # Application entry point
```

## Usage Example

```tsx
// Provider component sets the variant context
<Accordion type="multiple" variant="secondary">
  <AccordionItem value="1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

The `variant="secondary"` prop is automatically propagated to all child components through the style context.