import LeaderBoard from "../ads/LeaderBoard";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full bg-gray-700 border shadow-md  pt-6 md:pt-2 flex flex-col justify-start items-center ">
      <div className="w-full flex justify-between items-start  ">
        <Logo />
        <NavBar />
      </div>
      <div className="md:flex justify-center items-center w-full hidden"></div>
    </header>
  );
};

export default Header;
