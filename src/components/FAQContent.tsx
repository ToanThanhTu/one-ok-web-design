import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FAQCategory } from "../types";
import { pricingFaq, plansFaq, websitesFaq } from "../data/faq";
import FAQCard from "./FAQcard";

function FAQContent() {
  const [category, setCategory] = useState<FAQCategory>(FAQCategory.PRICING);

  return (
    <div>
      <div>
        <Button
          variant={category === FAQCategory.PRICING ? "solid" : "outline"}
          value={FAQCategory.PRICING}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setCategory(e.currentTarget.value as FAQCategory)
          }
        >
          Pricing & Payments
        </Button>

        <Button
          variant={category === FAQCategory.PLANS ? "solid" : "outline"}
          value={FAQCategory.PLANS}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setCategory(e.currentTarget.value as FAQCategory)
          }
        >
          Plans
        </Button>

        <Button
          variant={category === FAQCategory.WEBSITES ? "solid" : "outline"}
          value={FAQCategory.WEBSITES}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setCategory(e.currentTarget.value as FAQCategory)
          }
        >
          Websites
        </Button>
      </div>

      <div>
        {category === FAQCategory.PRICING &&
          pricingFaq.map((faq, index) => <FAQCard key={index} faq={faq} />)}

        {category === FAQCategory.PLANS &&
          plansFaq.map((faq, index) => <FAQCard key={index} faq={faq} />)}

        {category === FAQCategory.WEBSITES &&
          websitesFaq.map((faq, index) => <FAQCard key={index} faq={faq} />)}
      </div>
    </div>
  );
}

export default FAQContent;
