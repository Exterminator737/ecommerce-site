import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState({});
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [onSale, setOnSale] = useState([])


  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://dummyjson.com/products?limit=0";

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://dummyjson.com/products/categories";

      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setOnSale(products.products?.filter((item) => item.id % 8 === 0));
  }, [products.products]);


  //ADD ITEMS TO CART
  const addToCart = async (category, itemId, size) => {
    if (!size && (category === 'tops' || category.includes('shoes') || category.includes('dresses') || category.includes('shirts'))) {
      toast.error("Select Product Size");
      return;
    }
    
    if (!size) {
        size = 'None'
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  //get Count number for the cart
  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          throw error(console.error("card count not defined"));
        }
      }
    }
    return totalCount;
  };

  //Update the quantity of the cart according to various sizes
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  //get cart AMOUNT
  const getCartAmount = () => {
    let total = 0;
    for (const items in cartItems) {
      let itemInfo = products?.products?.find((product) => product.id === parseInt(items, 10));
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            total += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          (console.error(error))
        }
      }
    }
    return (total);
  };

 
  const value = {
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getCartCount,
    addToCart,
    cartItems,
    products,
    categories,
    setCategories,
    onSale,
    updateQuantity,
    getCartAmount
  };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
