import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import MyTask from "../Pages/MyTaks/MyTask";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addtask',
            element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
        },
        {
            path:'/mytask',
            element:<PrivateRoute><MyTask></MyTask></PrivateRoute>
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/api/update/${params.id}`)
        }
      ]
    },
  ]);

  export default router;