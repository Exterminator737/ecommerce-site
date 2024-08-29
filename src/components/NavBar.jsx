import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const { search, setSearch, categories, setShowSearch, getCartCount } = useContext(StoreContext);
  const [catVisible, setCatVisible] = useState(false);

  const catArray = Object.values(categories);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") || location.pathname.includes("categories")) {
      setShow(true);
    } else setShow(false);
  }, [location]);

  return (
    <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-[2vw] md:px-[4vw] md:mx-[-3vw] lg:mx-[-4vw] ">
      <Link className="flex items-center gap-5" to="/">
        <img src={assets.logo} className="w-20" alt="logo" />
        <p className="font-bold text-[--Lime] text-lg">ShopScape</p>
      </Link>

      {/* --------------- CATEGORIES DROPDOWN ---------------- */}
      <div
        onMouseOver={() => setCatVisible(true)}
        onMouseOut={() => setCatVisible(false)}
        className="bg-[--Main] font-bold rounded-3xl  hover:rounded-b-none px-2 relative gap-2 tracking-wider flex justify-center items-center py-1 text-gray-900 hover:text-[--Lime]  cursor-pointer"
      >
        <img className="w-6" src={assets.ham} alt="menu icon" />
        ALL CATEGORIES
        <img
          className="h-8 hover:rotate-180"
          src={assets.down_arrow}
          alt="down_arrow"
        />
        {
          <div
            className={`bg-[--Main] text-gray-900 absolute top-[100%] h-[70vh] left-0 w-full flex flex-col gap-2 py-2 overflow-hidden rounded-b-2xl ${
              catVisible ? "" : "hidden"
            }`}
          >
            {" "}
            <Link to={`/categories/apparel`}>
            <div className="font-normal hover:text-lg text-base hover:bg-[--Main] text-center tracking-wide uppercase hover:font-bold cursor-pointer hover:text-[--Lime]">
              APPAREL
            </div>
            </Link>
            {
              //Filter the categories to remove men and women categories, in order to group them properly
              catArray
                .filter(
                  (item) =>
                    !item.name.toLowerCase().includes("women") &&
                    !item.name.toLowerCase().includes("men") &&
                    !item.name.toLowerCase().includes("tops")
                )
                .map((item, index) => (
                  <Link key={index} to={`/categories/${item.slug}`}>
                    <div
                      key={index}
                      className="font-normal hover:text-lg text-base hover:bg-[--Main] text-center tracking-wide uppercase hover:font-bold cursor-pointer hover:text-[--Lime]"
                    >
                      {" "}
                      {item.name}
                    </div>
                  </Link>
                ))
            }
          </div>
        }
      </div>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:border-x px-1 hover:border-x-[--Lime]"
        >
          <p className="hover:text-[--Lime]">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[--Lime] hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 hover:border-x px-1 hover:border-x-[--Lime]"
        >
          <p className="hover:text-[--Lime]">PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[--Lime]  hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:border-x px-1 hover:border-x-[--Lime]"
        >
          <p className="hover:text-[--Lime]">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[--Lime]  hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:border-x px-1 hover:border-x-[--Lime]"
        >
          <p className="hover:text-[--Lime]">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[--Lime]  hidden" />
        </NavLink>
      </ul>

      <div className={`${show ? '' : 'invisible'} inline-flex items-center justify-center border border-gray-400 pl-3 pr-2 py-1 rounded-full sm:w-1/20 bg-[--Main]`}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search for products..."
        />
        <div className="bg-[--Lime] p-1 rounded-full">
        <img
          className="w-6 h-6"
          src={assets.search_icon}
          alt="search icon"
        />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/wishlist" className="relative">
          <img src={assets.heart} className="w-5 min-w-5" alt="wishlist icon" />
        </Link>

        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="profile_icon"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart icon" />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white
                 aspect-square rounded-full text-[8px]"
          >
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu"
        />
      </div>
      {/* Sidebar menu for smaller screens*/}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer flex items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="dropdown icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-4 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
