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
            <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {ReouterLink}
      </ul>
    </div>
  
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