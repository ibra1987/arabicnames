import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full p-2 flex justify-between items-center shadow-md border-b ">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
