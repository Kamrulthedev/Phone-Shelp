import { createBrowserRouter } from "react-router-dom";
import MainLeout from "./Leouts/MainLeout";
import Home from "../Peges/Home/Home";
import Favorite from "../Peges/Favorite/Favorite";
import Login from "../Peges/Login/Login";
import ErrorEliment from "../Peges/ErrorElement/ErrorEliment";


const MyReactReouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLeout></MainLeout>,
        errorElement:<ErrorEliment></ErrorEliment>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("Phone-shop.json")
            },
            {
                path:'/Favorite',
                element:<Favorite></Favorite>
            },
            {
                path:'/Login',
                element: <Login></Login>
            },
            {
                path: '/phones:id',
                element: 
            }
        ]
    }
])
 

export default MyReactReouter;