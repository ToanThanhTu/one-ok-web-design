import DarkModeSwitch from "../components/DarkModeSwitch";
import Menu from "../components/Menu";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("nav");
      const header = document.getElementById("header");
      if (nav && header && window.scrollY > 10) {
        nav.classList.add("w-screen");
        nav.classList.remove("w-11/12", "rounded", "top-4");

        header.classList.add("top-0");
        header.classList.remove("top-6");
      } else if (nav && header) {
        nav.classList.add("w-11/12", "top-4", "rounded");
        nav.classList.remove("w-screen");

        header.classList.add("top-6");
        header.classList.remove("top-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="w-screen fixed top-6 transition-all duration-300 ease-linear">
      <nav
        id="nav"
        className="w-11/12 m-auto rounded shadow-lg transition-all duration-300 ease-linear bg-white"
      >
        <div className="lg:flex hidden justify-between items-center max-w-screen-2xl p-6 m-auto">
          <img src="../../favicon.svg" alt="Logo" width={150} />
          <div>
            <Menu />
          </div>
          <div className="flex items-center gap-4">
            <Button as="a" href="/contact" target="_blank">
              Get Started
            </Button>
            <DarkModeSwitch />
          </div>
        </div>

        <div className="lg:hidden flex w-full justify-between items-center p-4 shadow-lg">
          <div className="flex justify-start">
            <img src="../../favicon.svg" alt="Logo" width={100} />
          </div>

          <div className="flex gap-6 items-center">
            <DarkModeSwitch />
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
