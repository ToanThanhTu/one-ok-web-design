import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const onOpen = () => {
    setShowMenu(true);
  };

  const onClose = () => {
    setShowMenu(false);
  };

  const menuItems = () => (
    <>
      <a href="/" onClick={onClose}>Home</a>
      <a href="/about" onClick={onClose}>About</a>
      <a href="/services" onClick={onClose}>Services</a>
      <a href="/pricing" onClick={onClose}>Pricing</a>
      <a href="/faq" onClick={onClose}>FAQ</a>
      <a href="/contact" onClick={onClose}>Contact</a>
    </>
  );

  return (
    <div>
      <div className="lg:flex hidden">{menuItems()}</div>

      <div className="lg:hidden flex">
        {!showMenu && (
          <div>
            <button onClick={onOpen}>
              <MenuIcon fontSize="large" />
            </button>
          </div>
        )}

        {showMenu && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-gray-900 z-98">
            <div className="z-99 absolute right-0 p-3">
              <button onClick={onClose}>
                <CloseIcon fontSize="large" sx={{ color: "white" }} />
              </button>
            </div>

            <div className="text-white flex flex-col w-screen h-screen items-center justify-center text-2xl gap-4">
              {menuItems()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
