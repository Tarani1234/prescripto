import groupProfile from "../assets/assets/assets_frontend/group_profiles.png";
import arrow_icon from "../assets/assets/assets_frontend/arrow_icon.svg";
import headerImage from "../assets/assets/assets_frontend/header_img.png";
const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap  bg-primary rounded-lg px-6 md:px-10 lg:px-20"
    >
      {/* -------left side-------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p
          className="text-3xl lg:text-5xl md:text-4xl sm:text-xl text-white 
            font-semibold leading-tight md:leading-tight lg:leading-tight "
        >
          BOOK APPOITMENT <br /> WITH TRUSTED DOCTORS
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light ">
          <img className="w-[20]" src={groupProfile} alt="" />
          <p>
            simply browse through our extensive list of trusted doctors, <br className="sm:block hidden" />{" "}
            schedule your appointment hassle-free
          </p>
        </div>
        <a
          href="#speacility"
          className="px-8 py-3 bg-white text-gray-500 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300  
          flex items-center justify-center gap-3 rounded-full "
        >
          Book appoinment <img src={arrow_icon} alt="" />
        </a>
      </div>
      {/* -------right side------ */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={headerImage}
          alt=""
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
