import type { PricingPackage } from "../types";

export const pricingPackage: PricingPackage[] = [
  {
    name: "Lump Sum",
    price: 3800,
    priceDescription: "+$25/mo Hosting",
    features: [
      { name: "Design And Development", included: true },
      { name: "$25/mo Hosting", included: true },
      { name: "$100 fee Per Page after 5", included: true },
      { name: "+$50/mo Unlimited Edits Add-on", included: true },
      { name: "+$250 To Add A Blog", included: true },
      { name: "24/7 Support", included: false },
      { name: "Lifetime Updates", included: false },
    ],
  },
  {
    name: "Monthly",
    price: 175,
    priceDescription: "Per Month",
    features: [
      { name: "Design And Development", included: true },
      { name: "Includes Hosting", included: true },
      { name: "$100 fee Per Page after 5", included: true },
      { name: "+$250 To Add A Blog", included: true },
      { name: "Unlimited Edits", included: true },
      { name: "24/7 Support", included: false },
      { name: "Lifetime Updates", included: false },
    ],
  },
];
