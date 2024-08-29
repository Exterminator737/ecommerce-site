// import { useContext, useEffect, useState } from "react";
// import Title from "./Title";
// import { StoreContext } from "../context/StoreContext";
// import ProductItem from "./ProductItem";

// const LatestCollection = () => {
//   const { products } = useContext(StoreContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(()=> {
//     setLatestProducts(products.values())
//   },[])
//   console.log(latestProducts);

//   return (
//     <div className=" text-4xl py-8">
//       <div className="flex justify-center">
//         <Title text1={"NEW"} text2={"ARRIVALS"} />
//       </div>
//       <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nesciunt
//         quis non voluptas veritatis sint aperiam ipsam necessitatibus aliquid
//         harum, dolor eveniet optio, molestias exercitationem voluptate eaque
//         consequuntur delectus? Rerum!
//       </p>
//       {/* ------------- RENDERING PRODUCTS ------------ */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts?.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item.id}
//             image={item.images}
//             name={item.title}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;

import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(StoreContext);
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    setLatest(products.products);
  }, [products.products]);
  return (
    <>
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nesciunt
          quis non voluptas veritatis sint aperiam ipsam necessitatibus aliquid
          harum, dolor eveniet optio, molestias exercitationem voluptate eaque
          consequuntur delectus? Rerum!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latest
          ? latest
              .filter((item) => item.id > latest.length - 10)
              .map((item, index) => (
                <ProductItem
              key={index}
              id={item.id}
              images={item.thumbnail}
              name={item.title}
              price={item.price}
              // rating={item.rating}
            />
              ))
          : null}
      </div>
    </>
  );
};

export default LatestCollection;
