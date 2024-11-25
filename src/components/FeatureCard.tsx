import type { DevelopmentFeature } from "../types";
import FeatureCardIcon from "./FeatureCardIcon";
import { Button } from "@material-tailwind/react";

function FeatureCard({ feature }: { feature: DevelopmentFeature }) {
  return (
    <div className="px-4 my-16 bg-gray-100 rounded-xl relative pt-12 z-0">
      <div className="p-6 rounded-xl bg-gray-700 w-min text-white absolute -top-10 left-8">
        <FeatureCardIcon featureId={feature.id} />
      </div>

      <h2 className="uppercase text-xl mt-6 font-semibold">{feature.header}</h2>
      <p className="my-2">{feature.description}</p>
      <Button as="a" href={feature.url} className="my-4">
        {feature.id === "4" ? "More About Us" : "Get Started"}
      </Button>
    </div>
  );
}

export default FeatureCard;
