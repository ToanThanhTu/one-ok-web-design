import BeenhereIcon from "@mui/icons-material/Beenhere";
import type { BusinessAttribute } from "../types";

function BusinessAttributeCard({
  attribute,
}: {
  attribute: BusinessAttribute;
}) {
  return (
    <div className="my-6">
      <div className="flex gap-2 my-2 items-center">
        <BeenhereIcon fontSize="medium" />
        <h2 className="uppercase font-semibold text-lg">{attribute.header}</h2>
      </div>

      <p>{attribute.description}</p>
    </div>
  );
}

export default BusinessAttributeCard;
