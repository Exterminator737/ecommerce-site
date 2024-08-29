import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" px-16">
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center">
          <img src={assets.service1} alt="service" />
          <h1 className="font-bold text-lg">FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={assets.service2} alt="service" />
          <h1 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={assets.service3} alt="service" />
          <h1 className="font-bold text-lg">MONEY BACK GUARANTEED</h1>
          <p>Returns are processed within 30 days</p>
        </div>
      </div>
      <div className="bg-[--Main]">
        <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-14 mt-20 text-sm">
          <div className="bg-yellow-400">
            <img src={assets.logo} alt="logo" className="mb-5 w-32" />
            <p className="w-full md:w-2/3 text-gray-600">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">HELP</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">FAQs</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>

        <div>
          <hr />
          <div className="flex justify-between">
            <p className="py-5 text-sm text-center">
              Copyright 2024@thrifter.com - All Right Reserved.
            </p>
            <img src={assets.payment} alt="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
