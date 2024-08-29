import { useContext, useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import { StoreContext } from '../context/StoreContext'
import Title from '../components/Title'
import { useLocation } from 'react-router-dom'

const Categories = () => {

  const {products} = useContext(StoreContext)
  const [arrProducts, setArrProducts] = useState([])
  const location = useLocation();
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const path = location.pathname.split('/')[2]
  
  const sortProduct = () => {
    let filterProductsCopy = products.products;

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        setFilterProducts(filterProductsCopy)
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  useEffect(() => {
    
    setArrProducts(products.products)
  }, [products]);
  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
       {/* Right side of the collections */}
       <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={path.toUpperCase()} text2={"COLLECTIONS"} />
          {/* ------------- SORT PRODUCTS -------------- */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        {/*  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
         {filterProducts?.filter((item) => item.category === path).map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              images={item.thumbnail}
              name={item.title}
              price={item.price}
             // rating={item.rating}
            />
          ))}
        </div>
    </div>
    </div>
  )
}

export default Categories