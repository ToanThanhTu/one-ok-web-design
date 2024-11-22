import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Logo() {
  return (
    <div className="flex items-center">
      <ThumbUpIcon />
      <div className="bg-black w-1 h-10 mx-2"></div>
      <div className="text-sm">
        <p>One OK</p>
        <p>Web Design</p>
      </div>
    </div>
  );
}

export default Logo;
