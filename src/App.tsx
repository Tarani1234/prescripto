import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Doctor from "./pages/Doctor";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/doctors/:speciality" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/my-appoinments" element={<MyAppointment/>}/>
           <Route path="/appointment/:docId" element={<Appointment/>}/> 
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
