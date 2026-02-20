"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  onExpand?: (question: string) => void;
}

export function FAQAccordion({ items, onExpand }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(value) => {
        if (value && onExpand) {
          const item = items.find((_, i) => `item-${i}` === value);
          if (item) onExpand(item.question);
        }
      }}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-2 border-dark rounded-lg mb-3 px-4 overflow-hidden"
        >
          <AccordionTrigger className="font-display font-bold text-base text-dark hover:no-underline py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="font-body text-dark/80 pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
