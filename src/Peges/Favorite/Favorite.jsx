import { useEffect, useState } from "react";

import FavoriteCert from "./FavoriteCert";


const Favorite = () => {

    const [favorited, setFavorited] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [Nofound, setNodFound] = useState(false)

    useEffect(() => {

        const FevoriteItem = JSON.parse(localStorage.getItem('Favorite'))

        if (FevoriteItem) {
            setFavorited(FevoriteItem)
            const tatal = FevoriteItem.reduce((preValue, currentItem) => preValue + currentItem.price, 0)
            console.log(tatal)
            setTotalPrice(tatal)
        }
        else (

            setNodFound("No Data Found")

        )
    }, [])

    console.log(favorited)

    const handlenRemove = () => {
        localStorage.clear()
        setFavorited([])
        setNodFound("No Data Found")
    }


    return (
        <div>
            {
                Nofound ? <p className="h-[80vh] text-4xl font-bold flex justify-center items-center  ">{Nofound}</p> : <div>
                    <div className="flex justify-between ">

                        <div className=" mb-4 flex	justify-center  items-center ">
                            {
                                favorited.length > 0 && <button onClick={handlenRemove} className="btn bg-amber-400  ">DELETED ALL</button>
                            }

                        </div>

                        <h1 className="flex  justify-end">Total Price: {totalPrice}</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            favorited.map(phone => <FavoriteCert key={phone.id} phone={phone}></FavoriteCert>)
                        }
                    </div>
                </div>
            }
        </div>
    )
};

export default Favorite;