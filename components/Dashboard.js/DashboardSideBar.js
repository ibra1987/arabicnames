import DashboardNavBar from "./DashboardNavBar";
const SideBar = () => {
  return (
    <aside className="w-1/5 mr-2 h-screen shadow-md border-r border-r-gray-300  flex flex-col justify-start items-center">
      <div className="w-full py-4 mb-10 border-b  flex flex-col justify-start items-center">
        administrator
      </div>
      <div className="w-full">
        <DashboardNavBar />
      </div>
    </aside>
  );
};

export default SideBar;
