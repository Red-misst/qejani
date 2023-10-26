

const OfferBaner = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-6">
    <section className="mt-10 flex max-w-[1200px] justify-between bg-indigo-800 px-5">
      <div className="py-8 px-3 lg:px-16">
        <p className="text-white">ONLINE EXCLUSIVE</p>
        <h2 className="pt-6 text-5xl font-bold text-teal-400">15% OFF</h2>
        <p className="pt-4 text-white mb-10">
          ACCENT CHAIRS, <br />
          TABLES & OTTOMANS
        </p>
        <a href="#" className="mt-6 bg-teal-400 px-4 py-2 duration-100 hover:bg-teal-300">
          Shop now
        </a>
      </div>

      <img
        className="-mr-5 hidden w-[550px] object-cover md:block"
        src= "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Rainbow credit card with macbook on a background"
      />
    </section>
  </div>
  )
}

export default OfferBaner