import { createBrowserRouter } from "react-router-dom";
import MainLeout from "./Leouts/MainLeout";
import Home from "../Peges/Home/Home";


const MyReactReouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLeout></MainLeout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
 

export default MyReactReouter;