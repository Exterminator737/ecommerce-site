import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsLetter";

const Contact = () => {
  return ( 
  <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>


      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="contact hero" />
        <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="text-gray-500">73450 Parks Avenue <br /> Suite 500, Cape Town, South Africa </p>
            <p className="text-gray-500">Tel: (080) 333-4562 <br /> Email: admin@thrifter.com</p>
            <p className="font-semibold text-xl text-gray-600">Careers at <span className="text-[--Lime]">ShopScape</span></p>
            <p className="text-gray-500">Learn more about our teams and openings!</p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-[--Lime] hover:text-white transition-all duration-500">Explore Jobs</button>
      
       </div> 
      </div>
      <NewsletterBox/>
  </div>
  )
};

export default Contact;
