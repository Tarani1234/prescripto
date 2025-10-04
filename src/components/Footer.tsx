import { assets } from "../assets/assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------left section ------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vel
            voluptatum totam beatae nam fugiat autem quia incidunt molestias
            perferendis veritatis odio ab nihil facere, harum illo quisquam
            magnam. Soluta.
          </p>
        </div>
        <div>
          {/* ------center section------ */}
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div>
          {/* ------right section ------- */}
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9876543210</li>
            <li> greatstack@gmail.com</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div>
        {/* ------copyright text------- */}
        <hr />
        <p className="py-5 text-sm text-center">copyright@2024 Greatstack - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
