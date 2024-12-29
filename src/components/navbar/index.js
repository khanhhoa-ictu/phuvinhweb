import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <div>
      <NavbarMobile />
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
    </div>
  );
}

export default Navbar;
