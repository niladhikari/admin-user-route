import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import User from "../Pages/User/User";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <User></User>,
        }
      ]
    },
  ]);

export default router;