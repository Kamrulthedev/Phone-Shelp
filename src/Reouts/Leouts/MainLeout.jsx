import { Outlet } from "react-router-dom";
import Navber from "../../Compunents/Header/Navber";


const MainLeout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
           <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLeout;