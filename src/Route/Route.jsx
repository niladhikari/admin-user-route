import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import User from "../Pages/User/User";
import Admin from "../Layout/Admin";
import CreateUser from "../Pages/AdminDeshborde/CreateUser";
import AllUser from './../Pages/AdminDeshborde/AllUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <User></User>,
      },
    ],
  },
  {
    path: "admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "createUser",
        element: <CreateUser></CreateUser>,
      },
      {
        path: "allUser",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);

export default router;
