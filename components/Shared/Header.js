import LeaderBoard from "../ads/LeaderBoard";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full h-60 bg-gray-600 pt-6 md:pt-2 shadow-md flex flex-col justify-start items-center ">
      <div className="w-full flex justify-between items-start border-b border-gray-500 ">
        <Logo />
        <NavBar />
      </div>
      <div className="md:flex justify-center items-center w-full hidden"></div>
    </header>
  );
};

export default Header;
