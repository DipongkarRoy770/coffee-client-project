import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('http://localhost:5000/coffee')
        },
        {
            path:'/addCoffee',
            element:<AddCoffee></AddCoffee>
        },
        {
          path:'/updateCoffee/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

        }
      ]
    },
    
  ]);