import { Outlet } from "react-router-dom";
import Navber from "../../Compunents/Header/Navber";


const MainLeout = () => {
    return (
        <div>
           <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLeout;