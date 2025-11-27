import { assets } from "../assets/assets/assets_frontend/assets"


const About = () => {
  return (
    <div>
       <div className="text-center text-2xl text-gray-500 pt-10 ">
         <p >About <span className="text-gray-700 font-medium">Us</span></p>
       </div>
       <div className="my-10 flex flex-col md:flex-row gap-12 ">
         <img className="w-full max-w-[360px]" src={assets.about_image} alt=""/>
           <div className="flex flex-col justify-center gap-6 md:w-2/4  text-gray-600 ">
              <p>Our mission is to make healthcare simple, accessible, and reliable for everyone. With MediConnect, you can easily search for experienced doctors, check their availability, and book appointments online — all in just a few clicks.</p>
              <p>We believe in connecting patients with the right medical professionals through a seamless and transparent process. Every doctor listed on our platform is verified, ensuring that you receive trusted and quality care.</p>
              <p>At MediConnect, our vision is to revolutionize the way people access healthcare by blending technology with compassion. Whether you’re booking a consultation, checking health tips, or following up with your doctor — we’re here to make your experience effortless.</p>
                <b className="text-gray-800">Your health, our priority. Book your appointment today and experience care redefined.</b>
           </div>
       </div>
       {/* choose us  */}
       <div className="text-xl my-4 ">
         <p >WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
       </div>
       <div className="flex flex-col md:flex-row mb-20 ">
         <div className="border px-10 flex flex-col md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary
              hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Efficiency:</b>
             <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
         </div>
         <div className="border px-10 flex flex-col md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary
              hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
         </div>
         <div className="border px-10 flex flex-col md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary
              hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Personalization</b>
           <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
         </div>
       </div>
    </div>
  )
}

export default About
