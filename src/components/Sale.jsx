import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Sale = () => {
  const { products } = useContext(StoreContext);
  const [onSale, setOnSale] = useState([]);

  useEffect(() => {
    setOnSale(products.products);
  }, [products.products]);

  return (
    <div className="pt-8 px-6">
      <div className="flex gap-8 items-center">
        <div className="bg-[--Lime] w-[40px] h-[80px] rounded-md"></div>
        <p className="text-[--Lime] text-2xl font-bold">Today's</p>
      </div>
      <p className="font-bold text-4xl">Flash Sales</p>

      {/* -------------------- POPULATE ITEMS ---------------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 pt-8">
        {
        onSale
          ? onSale
              .filter((item) => item.id % 8 === 0)
              .slice(1, 6)
              .map((item, index) => (
                <Link
                  key={index}
                  className="text-gray-700 cursor-pointer"
                  to={`/product/${item.id}`}
                >
                  <div className="relative">
                    <div className="overflow-hidden border bg-[--Main]">
                      <img
                        className="hover:scale-110 transition ease-in-out"
                        src={item.images[0]}
                        alt="head"
                      />
                    </div>
                    <p className="pt-3 pb-1 text-sm font-bold">{item.title}</p>
                    <div className="flex gap-5">
                    <p className="text-sm font-medium text-[--Lime]">
                      $ {item.price}
                    </p>
                    <p className="text-sm font-medium text-gray-400">
                    <span className="hidden">old price:</span> <s> $ {((100+item.discountPercentage)/100 * item.price).toFixed(2)}</s>
                    </p>
                    </div>
                    <div className="absolute top-3 left-3 bg-[--Lime] w-fit p-1 text-[--Main] font-medium rounded-lg">
                      -{Math.round(item.discountPercentage)}%
                    </div>
                  </div>
                </Link>
              ))
          : null}
      </div>
      <div className="flex justify-center pt-8">
        <button className="relative bg-[--Lime] font-medium text-[--Main] p-3 ">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Sale;
