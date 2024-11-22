import type { PricingPackage } from "../types";
import CheckIcon from "@mui/icons-material/Check";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import GetStartedButton from "./GetStartedButton";

function PricingCard({ pricingPackage }: { pricingPackage: PricingPackage }) {
  return (
    <div>
      <h1>{pricingPackage.name}</h1>

      <ul>
        {pricingPackage.features.map((f) => (
          <li>
            <div>
              <p>{f.name}</p>
              {f.included ? <CheckIcon /> : <DoNotDisturbIcon />}
            </div>
          </li>
        ))}
      </ul>

      <p><span>{pricingPackage.price}</span> {pricingPackage.priceDescription}</p>

      <GetStartedButton />
    </div>
  );
}

export default PricingCard;
