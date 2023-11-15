import PhoneCart from "../Phone/PhoneCart";


const Phone = ({phones}) => {
  console.log(phones)
    return (
        <div>
            <h1 className="text-2xl text-center font-bold py-6">OUR PHONES COLLECTIONS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                 
                 phones?.map(phone => <PhoneCart key={phone.id}></PhoneCart>)

                }
            </div>

        </div>
    );
};

export default Phone;