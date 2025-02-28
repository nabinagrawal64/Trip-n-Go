import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaTaxi, FaSnowflake, FaWheelchair, FaGasPump, FaBed, FaUsers } from "react-icons/fa";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CarDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showFull, setShowFull] = useState(false);
    const car = location.state?.car;
    console.log(car);

    if (!car) {
        return (
            <p className="text-center text-white">No car details available</p>
        );
    }

    const details = [
        { icon: <FaWheelchair />, text: "7 seats" },
        { icon: <FaGasPump />, text: "Diesel" },
        { icon: <FaTaxi />, text: "Cab" },
        { icon: <FaBed />, text: "Sleeper" },
        { icon: <FaUsers />, text: "6 Persons max" },
        { text: "$123/hr" },
        { text: "$10/km" },
        { text: "$4562/day" },
        { icon: <FaSnowflake />, text: "AC" },
    ];

    return (
        <motion.div 
            className="bg-[#212121] text-white w-full mx-auto"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            
            <motion.button 
                onClick={() => navigate(-1)}
                className="absolute left-5 top-16 mb-4 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                &larr;
            </motion.button>

            <motion.header 
                className="px-10" 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-semibold">{car.name}</h2>
                <p className="text-gray-300 font-semibold text-xl">- By {car.company}</p>
                <div className="flex items-center text-[#466F7F]">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{car.location}</span>
                </div>
            </motion.header>

            <motion.section 
                className="w-5/6 mx-auto" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <motion.div 
                    className="flex flex-col mt-2 p-2 rounded-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={car.image} alt="Car" className="w-full h-80 object-cover rounded-lg" />
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-4 border border-gray-600 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {details.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-[#466F7F] text-white flex items-center justify-center gap-2 p-3 rounded-md text-sm"
                            whileHover={{ scale: 1.1 }}
                        >
                            {item.icon} <span>{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="m-6"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-bold">Overview</h3>
                    <p className="text-gray-200 mt-2">
                        {showFull ? car.description : car.description.slice(0, 250)}
                        {!showFull && car.description.length > 200 && "... "}
                        {car.description.length > 398 && (
                            <motion.button
                                className="text-[#466F7F] hover:underline font-semibold"
                                onClick={() => setShowFull(!showFull)}
                                whileHover={{ scale: 1.1 }}
                            >
                                {showFull ? "See Less" : "See More"}
                            </motion.button>
                        )}
                    </p>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}