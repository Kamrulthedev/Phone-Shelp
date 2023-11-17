import { useEffect, useState } from "react";

import FavoriteCert from "./FavoriteCert";


const Favorite = () => {

    const [favorited, setFavorited] = useState([])

    const [Nofound, setNodFound] = useState(false)

    useEffect(() => {

        const FevoriteItem = JSON.parse(localStorage.getItem('Favorite'))

        if (FevoriteItem) {
            setFavorited(FevoriteItem)
        }
        else (
          
            setNodFound("No Data Found")

        )
    }, [])

    console.log(favorited)


    return( 
        <div>
              {
                Nofound ?<p className="h-[80vh] flex ">{Nofound}</p>: <div>
            {
                favorited.length > 0 && <button className="btn items-center justify-center">DELETED ALL</button>
            }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            favorited.map(phone => <FavoriteCert key={phone.id} phone={phone}></FavoriteCert> )
                        }
                    </div>
                </div>
              }
        </div>
    )
};

export default Favorite;