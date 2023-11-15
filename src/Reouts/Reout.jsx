import { createBrowserRouter } from "react-router-dom";
import MainLeout from "./Leouts/MainLeout";
import Home from "../Peges/Home/Home";
import Favorite from "../Peges/Favorite/Favorite";
import Login from "../Peges/Login/Login";


const MyReactReouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLeout></MainLeout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/Favorite',
                element:<Favorite></Favorite>
            },
            {
                path:'/Login',
                element: <Login></Login>
            }
        ]
    }
])
 

export default MyReactReouter;