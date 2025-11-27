import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { RootState } from "../Redux/store";
import { assets } from "../assets/assets/assets_frontend/assets";
import RelatedDoctors from "./RelatedDoctors";

type DoctorType = {
  _id: string;
  name: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  image: string;
  fees: number; 
};

type SlotType = {
  datetime: Date;
  time: string;
};

const Appointment = () => {
  const { docId } = useParams<string>();

  const [docInfo, setDocInfo] = useState<DoctorType | null>(null);
  const [docSlots, setDocsSlots] = useState<SlotType[][]>([]);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THURS', "FRI", "SAT"];
   
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState<string>("");

  const getAvailableSlots = () => {
    setDocsSlots([]);

    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);
  
      // setting start hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots: SlotType[] = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
           hour12: true,
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocsSlots((prev) => [...prev, timeSlots]);
    }
  };

  const doctors = useSelector((state: RootState) => state.doctors.doctors) as DoctorType[];
  const currency = useSelector((state: RootState) => state.doctors.currency);

  useEffect(() => {
    if(docId) {
      <p>doctor id is not found</p>
    } 
    if (doctors && docId) {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoctor || null);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);


  return (
    docInfo && docId &&(
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" className="w-5" />
            </p>
            <div className="flex items-center font-medium gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 text-xs px-2 border rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm max-w-[700px] text-gray-500 mt-1">{docInfo.about}</p>
            </div>

            <p className="mt-5 text-gray-500 font-medium">
              Appointment Fees: <span className="text-black">{currency}{docInfo.fees}</span>
            </p>
          </div>
        </div>
         {/* -----booking slots------- */}
          <div className="sm:ml-72 sm:pl-4 mt-4  font-medium text-gray-700">
             <p>Booking slots</p>
             <div className="flex gap-5 items-center w-full overflow-x-scroll mt-4">
                {docSlots.length && docSlots.map((item, index)=>(
                  <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index? 'bg-primary text-white': 'border border-gray-200'}`} key={index}>
                       <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                       <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                ))}
             </div>
              <div className="flex items-center mt-4 w-full gap-3 overflow-x-scroll">
                 {docSlots.length && docSlots[slotIndex].map((item, index)=>(
                   <p onClick={()=>setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer
                     ${item.time === slotTime ? 'bg-primary text-white' :'text-gray-400 border border-gray-300' }`
                   }>{item.time}</p>
                 ))}
              </div>
              <button className="px-14 text-sm font-light py-4 bg-primary text-white mt-9 rounded-full">Book an appointment</button>
          </div>
          {/* ----Listing doctors------ */}
          <RelatedDoctors docId={docId} speciality = {docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointment;
