
import React from "react";

const QuoteSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-adaptive-secondary px-4 md:px-0">
      <div className="rfp-container text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-adaptive-primary mb-3 md:mb-4">
          "The best way to predict the future is to invent it."
        </h2>
        <p className="text-lg md:text-xl font-medium text-adaptive-primary">- Alan Kay</p>
      </div>
    </section>
  );
};

export default QuoteSection;
