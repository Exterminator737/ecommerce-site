import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { useParams } from "react-router-dom";
import assets from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { onSale, products, addToCart } = useContext(StoreContext);
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://dummyjson.com/products/${productId}`;

      const response = await fetch(url);
      const data = await response.json();
      setProductData(data);
      setImage(data.images[0]);
    };
    fetchProduct();
  }, [productId]);

  const getTotalRating = async () => {
    let totalRating = 0;
    productData.reviews?.map((item) => (totalRating += item.rating));
    let num = productData.reviews?.length;
    setTotal(totalRating / num);
  };

  useEffect(() => {
    getTotalRating();
  }, [productData]);
  console.log(size);
  
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData?.images?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="item"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="main snapshot" />
          </div>
        </div>

        {/* Product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 ">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star rating" className="w-3.5" />
            <img src={assets.star_icon} alt="star rating" className="w-3.5" />
            <img src={assets.star_icon} alt="star rating" className="w-3.5" />
            <img src={assets.star_icon} alt="star rating" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star rating"
              className="w-3.5"
            />
            <p className="pl-2">({productData?.reviews?.length})</p>
          </div>
          <p className="mt-5 text-3xl font-medium">$ {productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <p className="mt-5 font-bold text-[--Lime] text-xl">{productData.availabilityStatus}</p>
          {productData.category === "mens-shirts" ||
          productData.category === "womens-dresses" ? (
            <div className="flex flex-col gap-4 my-8 ">
              <p>Select Size</p>
              <div className="flex gap-2">
                <button onClick={()=> setSize('XS')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  XS
                </button>
                <button onClick={()=> setSize('S')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  S
                </button>
                <button onClick={()=> setSize('M')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  M
                </button>
                <button onClick={()=> setSize('L')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  L
                </button>
                <button onClick={()=> setSize('XL')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  XL
                </button>
                <button onClick={()=> setSize('2XL')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  2XL
                </button>
              </div>
            </div>
          ) : productData.category?.includes("shoes") ? (
            <div className="flex flex-col gap-4 my-8 ">
              <p>Select Size (UK)</p>
              <div className="flex gap-2">
                <button onClick={()=> setSize('3')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  3
                </button>
                <button onClick={()=> setSize('4')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  4
                </button>
                <button onClick={()=> setSize('5')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  5
                </button>
                <button onClick={()=> setSize('6')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  6
                </button>
                <button onClick={()=> setSize('7')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  7
                </button>
                <button onClick={()=> setSize('8')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  8
                </button>
                <button onClick={()=> setSize('9')}
                  className={`focus:bg-black border py-2 px-4 bg-[--Lime] text-[--Main]`}
                >
                  9
                </button>
              </div>
            </div>
          ) : (
            <div className="h-40"></div>
          )}

          {productData.availabilityStatus === 'Out of Stock' ? null : <button onClick={() => addToCart(productData.category,productData.id, size)}  className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>}
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* -----------DESCRIPTION AND REVIEW SECTION --------------- */}
      <div className="mt-20">
        <p className="py-3 text-2xl font-bold">Description</p>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-900">
          <p className="font-bold  text-xl">{productData?.title}</p>
          <p>{productData?.description}</p>
          <p>
            <span className="font-bold text-[--Lime]">Brand:</span>{" "}
            {productData.brand}
          </p>
          <p>
            <span className="font-bold text-[--Lime]">Weight:</span>{" "}
            {productData.weight} kg
          </p>
          <p>
            <span className="font-bold text-[--Lime]">Dimensions:</span>
          </p>
          <p>
            <span className="ml-8 font-bold text-[--Lime]">* width:</span>{" "}
            {productData.dimensions?.width} cm
          </p>
          <p>
            <span className="ml-8 font-bold text-[--Lime]">* height:</span>{" "}
            {productData.dimensions?.height} cm
          </p>
          <p>
            <span className="ml-8 font-bold text-[--Lime]">* depth:</span>{" "}
            {productData.dimensions?.depth} cm
          </p>
          <p>
            <span className="font-bold text-[--Lime]">Warranty:</span>{" "}
            {productData.warrantyInformation}{" "}
          </p>
          <p>
            <span className="font-bold text-[--Lime]">Return Policy:</span>{" "}
            {productData.returnPolicy}{" "}
          </p>
        </div>
        <p className=" py-3 text-2xl font-bold">
          Reviews{" "}
          <span className="text-[--Lime]">
            {" "}
            ({productData.reviews?.length})
          </span>
        </p>
        <div className="grid lg:grid-cols-2 justify-center gap-4 border px-6 py-6 text-sm text-gray-900">
          <div className="text-center border rounded-lg w-full lg:w-[200px] p-5 bg-gray-900 text-slate-50">
            <p className="text-5xl font-extrabold">{total.toFixed(1)}/5</p>
          </div>
          <div className="grid gap-2">
            {productData.reviews?.map((item, index) => (
              <div
                className="border p-4 rounded-lg bg-[--Main] flex flex-col gap-1"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg"> {item.reviewerName}</p>
                  <p>
                    <span className="font-bold text-[--Lime]">Rating:</span>{" "}
                    {item.rating}
                  </p>
                </div>
                <p className="text-gray-400 hover:underline cursor-pointer hover:text-[--Lime]">
                  {item.reviewerEmail}
                </p>
                <p className="text-gray-500 tracking-wider font-medium pt-3">
                  {" "}
                  "{item.comment}"{" "}
                </p>
                <p className="pt-6 text-gray-400 text-end">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-20 mt-10">
      <RelatedProducts category={productData?.category} />
      </div>
    </div>
  ) : null;
};

export default Product;
