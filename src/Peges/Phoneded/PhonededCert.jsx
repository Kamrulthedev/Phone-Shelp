import React from "react";
import swal from "sweetalert";

const PhonededCert = ({ phone }) => {
    const { brand_name, id, image, phone_name
        , price, rating } = phone || {}


        const handlerAddtoFavorite= ()=>{
            const AddFavoriteItem = [];

            const FevoriteItem = JSON.parse(localStorage.getItem('Favorite'))
            if(!FevoriteItem){
                AddFavoriteItem.push(phone)
                localStorage.setItem('Favorite', JSON.stringify(AddFavoriteItem))
                swal("Good job!", "This Item is Favorite", "success");
            }
            else{


                const isExits = FevoriteItem.find(phone => phone.id == id)
                if(!isExits){
                    AddFavoriteItem.push(...FevoriteItem, phone)
                    localStorage.setItem('Favorite', JSON.stringify(AddFavoriteItem))
                    
                    swal("Good job!", "This Item is Favorite", "success");

                }
                else{
                    swal("Error", "Alredy booked Item", "success");
                }






               
            }

           
          


            // localStorage.setItem('text', JSON.stringify([{name: 'Kamrul', class: 'Ilaven'}]))
        }

    return (
        <div>
            <div className="relative flex max-w-[46rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img src={image} alt="" />

                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {brand_name}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {phone_name}
                    </h4>
                    <div className="flex justify-between ">
                        <h2>Price: {price}</h2>
                        <h1 className="ml-24">Rating:{rating}</h1>
                    </div>

                    <div className="mt-24">
                 
                            <button onClick={handlerAddtoFavorite}
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">ADD TO FAVORITE<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="w-4 h-4">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhonededCert;