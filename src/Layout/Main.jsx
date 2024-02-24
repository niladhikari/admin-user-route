import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navber/Navbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-320px)]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
