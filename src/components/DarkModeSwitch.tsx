import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useEffect, useState } from "react";
import type { DarkMode } from "../types";

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState<DarkMode>("light");

  useEffect(() => {
    if (typeof localStorage != "undefined" && localStorage.getItem("theme")) {
      setDarkMode((localStorage.getItem("theme") as DarkMode) || "light");
    }
  }, []);

  const switchDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
    localStorage.setItem('theme', darkMode);
  };

  return (
    <div>
      <button onClick={switchDarkMode} className={darkMode === "light" ? "block" : "hidden"}>
        <WbSunnyIcon />
      </button>

      <button onClick={switchDarkMode} className={darkMode === "dark" ? "block" : "hidden"}>
        <BedtimeIcon />
      </button>
    </div>
  );
}

export default DarkModeSwitch;
