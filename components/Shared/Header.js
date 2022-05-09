import LeaderBoard from "../ads/LeaderBoard";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full h-60 bg-gray-600 p-2  shadow-md flex flex-col justify-start items-center ">
      <div className="w-full flex justify-between items-start border-b border-gray-500 ">
        <Logo />
        <NavBar />
      </div>
      <LeaderBoard />
    </header>
  );
};

export default Header;
