import {  NavLink } from "react-router-dom";




const Navber = () => {

    const ReouterLink = <>


        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""}>Home</NavLink>

        <NavLink
            to="/Favorite"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""}>Favorites</NavLink>

        <NavLink
            to="/Login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""}>Login</NavLink>



    </>
    return (
        <div>
            <div className="navbar bg-base-100 justify-between   shadow-lg rounded-2xl">
                <div className="navbar-start">

                    <a className=" btn-ghost text-2xl font-bold ml-8">PHONE SHOP</a>
                </div>
                <div className=" hidden lg:flex gap-12 text-xl font-bold mr-12">
                    {ReouterLink}
                </div>
            </div>
        </div>
    );
};

export default Navber;