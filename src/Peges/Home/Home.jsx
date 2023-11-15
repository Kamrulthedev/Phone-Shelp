import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Phone from "../Phones/Phone";


const Home = () => {


    const phones = useLoaderData()
   





    return (
        <div>
          <Banner></Banner>
          <Phone phones={phones}></Phone>
        </div>
    );
};

export default Home;