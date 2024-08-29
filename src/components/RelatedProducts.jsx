import { useEffect, useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(StoreContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    let copy = products?.products;
    copy = copy?.filter((item) => category === item.category);

    setRelated(copy?.slice(0, 5));
  }, [products.products, category]);

  return (
    <div className="my-18">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related?.map((item, index) => (
          <Link onClick={globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" })} key={index} className='text-gray-700 cursor-pointer' to={`/product/${item.id}`}>
          <div className='overflow-hidden'>
              <img className='hover:scale-110 transition ease-in-out' src={item.thumbnail} alt="head" />
          </div>
          <p className='pt-3 pb-1 text-sm'>{item.title}</p>
          <p className='text-sm font-medium'>$ {item.price}</p>
      </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
