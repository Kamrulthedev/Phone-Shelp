import React from 'react';

const FavoriteCert = ({phone}) => {
    const { brand_name, id, image, phone_name
        , price, rating } = phone || {}
    return (
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
                 
                            <button 
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-cyan-400	  active:bg-amber-200	 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">SEE DERTAILS
                            
                            </button>
                      
                    </div>
                </div>
            </div>
    );
};

export default FavoriteCert;