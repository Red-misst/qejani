import { FaStar } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";
const Products = ({products}) => {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4 mt-4">
    {products?.map((product, i) => (
      <div key={i} className="flex flex-col">
        <div className="relative flex">
          <img className="" src={product.imageSrc} alt={product.name} />
          <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
            <a href="product-overview.html">
              <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
                <FaStar className="text-white" />
              </span>
            </a>
            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
              <FaStar className="text-white" />
            </span>
          </div>

          <div className="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
            <p className="px-2 py-2 text-sm">&minus; 25 &percnt; OFF</p>
          </div>
        </div>

        <div>
          <p className="mt-2">{product.name}</p>
          <div className="text-violet-900 flex flex-row gap-2">
              <CurrencyFormat
                value={product.price}
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
                  value={product.originalPrice}
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
              {Array.from({ length: product.rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
              <p className="text-sm text-gray-400 ml-2">({product.rating})</p>
            </div>

          <div>
            <button className="my-5 h-10 w-full bg-violet-900 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </section>
  );
};

export default Products;
