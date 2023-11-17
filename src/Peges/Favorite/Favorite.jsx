import { useEffect, useState } from "react";


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
                Nofound ? <p className="h-[80vh] flex ">{Nofound}</p>: <div></div>
              }
        </div>
    )
};

export default Favorite;