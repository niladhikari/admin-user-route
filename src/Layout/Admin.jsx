import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="lg:flex bg-[#F6F6F6]">
        <div className="lg:w-64 min-h-screen bg-blue-200 text-black">
          <ul className="menu p-4">
            <li>
              <NavLink to="/admin/createUser">
                <FaHome></FaHome>
                Create User
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/allUser">
                <FaUsers></FaUsers >
                All User
              </NavLink>
            </li>
            <div className="divider font-bold text-black"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin;
