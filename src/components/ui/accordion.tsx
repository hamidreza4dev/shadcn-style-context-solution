"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { tv } from "tailwind-variants";

import { createStyleContext } from "./utils/create-style-context";

const accordion = tv({
  slots: {
    root: "",
    item: "border-b last:border-b-0",
    trigger: [
      "focus-visible:border-ring focus-visible:ring-ring/50",
      "flex flex-1 items-start justify-between gap-4 rounded-md py-4",
      "text-left text-sm font-medium transition-all outline-none",
      "hover:underline focus-visible:ring-[3px]",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&[data-state=open]>svg]:rotate-180",
    ],
    header: "flex",
    content:
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
    contentInner: "pt-0 pb-4",
    icon: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
  },
  variants: {
    variant: {
      default: {
        content: "bg-red-500",
      },
      secondary: {
        content: "bg-blue-500",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const { withContext, withProvider } = createStyleContext(accordion);

const Accordion = withProvider<
  React.ComponentProps<typeof AccordionPrimitive.Root> & {
    className?: string;
  }
>(function Accordion({ className, styleContext, ...props }) {
  const { root } = accordion(styleContext);
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={root({ className })}
      {...props}
    />
  );
});

const AccordionItem = withContext<
  React.ComponentProps<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, styleContext, ...props }) {
  const { item } = accordion(styleContext);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={item({ className })}
      {...props}
    />
  );
});

const AccordionTrigger = withContext<
  React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, children, styleContext, ...props }) {
  const { header, trigger, icon } = accordion(styleContext);
  return (
    <AccordionPrimitive.Header className={header()}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={trigger({ className })}
        {...props}
      >
        {children}
        <ChevronDownIcon className={icon()} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

const AccordionContent = withContext<
  React.ComponentProps<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, children, styleContext, ...props }) {
  const { content, contentInner } = accordion(styleContext);
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={content()}
      {...props}
    >
      <div className={contentInner({ className })}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
