import type { FAQ } from "../types";

function FAQCard({ faq }: { faq: FAQ}) {
  return (
    <div>
      <h2>{faq.question}</h2>
      <p>{faq.answer}</p>
    </div>
  );
}

export default FAQCard;