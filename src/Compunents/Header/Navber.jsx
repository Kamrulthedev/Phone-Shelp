import { Link } from "react-router-dom";




const Navber = () => {

    const ReouterLink = <>


        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Favorites</Link>
        <Link to={'/'}>Login</Link>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 justify-between   shadow-lg">
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