import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetter"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>


      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="about hero" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, harum totam iste maiores dicta ab illum illo aspernatur officiis corrupti, facilis exercitationem natus asperiores quia odio enim in sequi alias?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil sequi exercitationem officia dolore, quaerat minima corrupti voluptatem error asperiores cum, natus.</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laudantium. Sed, sunt aut deleniti porro eum maxime aspernatur culpa voluptatibus quidem, corporis iste distinctio eius eaque doloremque mollitia, itaque repellendus.</p>
        </div> 
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurance:</b>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, totam doloremque</p>
          </div>

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convenience:</b>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, totam doloremque</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, totam doloremque</p>
          </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About