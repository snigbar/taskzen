import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import MyTask from "../Pages/MyTaks/MyTask";
import AllTasks from "../Pages/ALLTasks/AllTasks";

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
            element:<AddTask></AddTask>
        },
        {
            path:'/mytask',
            element:<MyTask></MyTask>
        },
        {
            path:'/allTask',
            element:<AllTasks></AllTasks>
        },
      ]
    },
  ]);

  export default router;