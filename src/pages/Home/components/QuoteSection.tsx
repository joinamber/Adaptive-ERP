
import React from "react";

const QuoteSection: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-muted px-4 md:px-0">
      <div className="rfp-container text-center">
        <blockquote className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground mb-6 md:mb-8 leading-tight">
          "The future belongs to organizations that can <em className="text-accent">think</em> 
          {" "}as intelligently as they operate."
        </blockquote>
        <cite className="text-lg md:text-xl text-muted-foreground not-italic">
          — Research Philosophy
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;
