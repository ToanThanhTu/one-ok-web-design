import type { Feature } from "../types";
import FeatureCardIcon from "./FeatureCardIcon";

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div>
      <FeatureCardIcon featureId={feature.id} />
      <h2>{feature.header}</h2>
      <p>{feature.description}</p>
      <a href={feature.url}>
        {feature.id === "4" ? "More About Us" : "Get Started"}
      </a>
    </div>
  );
}

export default FeatureCard;
