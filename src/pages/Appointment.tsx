import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { RootState } from "../Redux/store";
import { assets } from "../assets/assets/assets_frontend/assets";

type DoctorType = {
  _id: string;
  name: string;
  speciality: string;
  degree: string;
  experience: string;
  about : string;
  image: string;
  fees: number;
};

const Appointment = () => {
  const { docId } = useParams<{ docId: string }>();
  const [docInfo, setDocInfo] = useState<DoctorType | null>(null);

  const doctors = useSelector((state: RootState) => state.doctors.doctors) as DoctorType[]
  const currency = useSelector((state: RootState) => state.doctors.currency)
 
  
  useEffect(() => {
    if (doctors && docId) {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoctor || null);
      console.log("Doctor found:", foundDoctor);
    }
  }, [doctors, docId, currency]);


  return (
      docInfo &&(
        <div>
            {/* Doctors Details */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div>
                    <img className="bg-primary w-full sm:max-w-72 rounded-lg" src = {docInfo.image} alt=""/>
                </div>

                <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                    {/* doc info: name, degree, experience */}
                    <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                       {docInfo.name}
                     <img src={assets.verified_icon} alt="" className="w-5"/>
                    </p>
                     <div className="flex items-center font-medium gap-2 text-sm mt-1 text-gray-600">
                         <p>{docInfo.degree} - {docInfo.speciality}</p>
                          <button className="py-0.5 text-xs px-2 border rounded-full ">{docInfo.experience}</button>
                     </div>
                     {/* About */}
                    
                       <div>
                         <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">About <img src={assets.info_icon} alt=""/></p>
                         <p className="text-sm max-w-[700px] text-gray-500 mt-1">{docInfo.about}</p>
                     </div>
                     <p className="mt-5 text-gray-500 font-medium">Appointment Fees : <span className="text-black">{currency}{docInfo.fees}</span></p>
                </div>
            </div>
        </div>
      )
  );
};

export default Appointment;
