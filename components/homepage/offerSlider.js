import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";

// Sample data for testing
const sampleData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "GUYER CHAIR",
    price: 45.0,
    originalPrice: 500.0,
    rating: 4,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Another Product",
    price: 60.0,
    originalPrice: 75.0,
    rating: 5,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "GUYER CHAIR",
    price: 45.0,
    originalPrice: 500.0,
    rating: 4,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Another Product",
    price: 60.0,
    originalPrice: 75.0,
    rating: 5,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "GUYER CHAIR",
    price: 45.0,
    originalPrice: 500.0,
    rating: 4,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Another Product",
    price: 60.0,
    originalPrice: 75.0,
    rating: 5,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "GUYER CHAIR",
    price: 45.0,
    originalPrice: 500.0,
    rating: 4,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U09GQXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Another Product",
    price: 60.0,
    originalPrice: 75.0,
    rating: 5,
  },
  // Add more sample data here
];

const OffersSlider = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto  max-w-[1200px] px-5 py-2">
      <div className="flex flex-row w-full justify-center align-middle">
        <h2 className="text-2xl font-semibold text-gray-800">
          Responsive Slider
        </h2>
      </div>
      <Slider {...settings}>
        {sampleData.map((item) => (
          <div key={item.id} className="p-2 ">
            <img src={item.image} alt={item.title} className="w-full rounded" />
            <p className="mt-2 text-xl font-semibold">{item.title}</p>
            <div className="text-violet-900 flex flex-row gap-2">
              <CurrencyFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"KES "}
                suffix={""}
                decimalScale={2}
                fixedDecimalScale={true}
                renderText={(value) => (
                  <div>
                    <strong>{value}</strong>
                  </div>
                )}
              />
             
              <span className="text-sm text-gray-500 line-through my-auto">
                <CurrencyFormat
                  value={item.originalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"KES "}
                  suffix={""}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  renderText={(value) => <div >{value}</div>}
                />
              </span>
            </div>
            <div className="flex items-center">
              {Array.from({ length: item.rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
              <p className="text-sm text-gray-400 ml-2">({item.rating})</p>
            </div>
            <div className="flex flex-row w-full justify-center align-middle">
              <button className="w-full mt-5 px-4 py-2 bg-indigo-700 text-white rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersSlider;
