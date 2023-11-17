import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import PhonededCert from "./PhonededCert";


const Phoneded = () => {
    const [phone, setPhone] = useState()
    const { id } = useParams();
    const idInt = parseInt(id);
    const phones = useLoaderData()
    useEffect(() => {
        const findphone = phones.find(phone => phone.id == idInt)
        setPhone(findphone)
    }, [idInt, phones])


    

    return (
        <div>
          
         <PhonededCert phone={phone}></PhonededCert>
          
        </div>
    );
};

export default Phoneded;