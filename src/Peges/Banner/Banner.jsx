

const Banner = () => {
    return (
        <div className=" h-[70vh]  rounded-lg">
            <div className="hero h-[70vh]  rounded-2xl" style={{backgroundImage:  'url(https://i.ibb.co/ZLFFSJh/Latest-Phones-in-Nigeria.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
  <div className="flex">
    <input className="w-96 p-2 rounded-lg" type="text" placeholder="Search by category"/>
    <button className="btn btn-primary ">Get Started</button>
  </div>
     
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;