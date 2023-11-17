import Rating from "react-rating";
import { Link } from "react-router-dom";


const PhoneCart = ({ phone }) => {

    const { brand_name, id, image, phone_name
        , price, rating } = phone



    return (
        <div className="mt-4">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className="object-cover w-full h-full" />
                </div>

                <div className="p-6">
                    <p className="block bg-green-500 font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {brand_name}</p>
                    <div className="flex items-center justify-between mb-2">

                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {phone_name}</p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {price}</p>
                    </div>
                </div>
           

                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                   
                    <div className="p-6 pt-0">
                        <Link to={`/phonesess/${id}`}>
                            <button className="block w-full select-none rounded-lg bg-zinc-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">SEE DETAILES</button>
                        </Link>
                    </div>
                </div>
            </div>
            );
};

            export default PhoneCart;