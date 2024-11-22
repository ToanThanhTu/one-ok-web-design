import type { ProcessStep } from "../types";

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div>
      <h3>Step {step.id}</h3>
      <h2>{step.header}</h2>
      <p>{step.description}</p>
    </div>
  );
}

export default ProcessStepCard;
