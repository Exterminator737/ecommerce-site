import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import assets from "./assets/assets";
import { useState } from "react";
import WishList from "./pages/WishList";
import Categories from "./pages/Categories";

const App = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      {hidden ? (
        <div className="bg-gray-900 p-1 text-slate-200 w-screen flex items-center h-10">
          <p className="ml-auto">
            Sign up and get 20% off your first order
            <span className="underline ml-3">Sign Up Now</span>
          </p>
          <img
            onClick={() => setHidden(false)}
            className="ml-auto cursor-pointer bg-slate-100 rounded-full h-full"
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
      ) : null}
      {/* for div below px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] */}
      <div className=" px-4 sm:px-[2vw] md:px-[4vw] lg:px-[4vw]">
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/categories/:name" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
