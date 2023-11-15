import { Outlet } from "react-router-dom";


const MainLeout = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">MY WEBSITE LEOUTS</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLeout;