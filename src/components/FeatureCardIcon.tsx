import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import DevicesIcon from "@mui/icons-material/Devices";
import SpeedIcon from "@mui/icons-material/Speed";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

function FeatureCardIcon({ featureId }: { featureId: string }) {
  if (featureId === "1") {
    return <MobileFriendlyIcon fontSize="large" />;
  }

  if (featureId === "2") {
    return <DevicesIcon fontSize="large" />;
  }

  if (featureId === "3") {
    return <SpeedIcon fontSize="large" />;
  }

  if (featureId === "4") {
    return <WhereToVoteIcon fontSize="large" />;
  }

  return <div>Feature not found</div>;
}

export default FeatureCardIcon;
