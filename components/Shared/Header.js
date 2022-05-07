import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full h-60 bg-gray-600 p-2 flex justify-between items-start shadow-md border-b ">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
