import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import AddCoffee from "../components/AddCoffee";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addCoffee',
            element:<AddCoffee></AddCoffee>
        }
      ]
    },
    
  ]);