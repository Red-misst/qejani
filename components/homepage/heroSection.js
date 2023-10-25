import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative">
      <Image
        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Living room image"
        height={1000}
        width={1280} //
        className="brightness-50 filter lg:h-[500px] w-full"
      />

      <div className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-left capitalise">
          Best Collection for Home Furniture And Decor
        </h1>
        <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
          Discover affordable and stylish furniture solutions. Our handpicked
          selection includes space-saving desks, cozy study chairs, and trendy
          room decor. Create a comfortable and productive space for yourself.
        </p>
        <button className="mx-auto rounded-md mt-5 w-1/2 bg-indigo-700 px-3 py-1 text-white duration-100 hover:bg-indigo-500 lg:mx-0 lg:h-10 lg:w-2/12 lg:px-10">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
