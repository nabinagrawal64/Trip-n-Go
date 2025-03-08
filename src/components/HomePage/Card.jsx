/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaUserFriends, FaTaxi, FaCheckCircle, } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function CarCard ({car}) {

    const navigate = useNavigate();

    return (
        <div className="xl:w-[320px] lg:w-[300px] md:w-[210px] sm:w-[170px] w-[110px] bg-[#313131] text-white rounded-xl transition-all duration-500 hover:shadow-md hover:shadow-gray-500 overflow-hidden shadow-lg drop-shadow-2xl">
            {/* Car Image */}
            <div className="relative" >
                <img
                    src={car?.image}
                    alt={car?.name}
                    className="w-auto h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => navigate(`/carDetails/${car.id}`, { state: { car } })} 
                />

                <div className="absolute xl:-bottom-4 md:-bottom-3 -bottom-2 lg:right-2 sm:right-1 right-0.5 bg-black lg:px-2 px-1 lg:text-xs rounded-md flex items-center gap-1">
                    <span className="text-blue-400 lg:text-lg md:text-[16px] sm:text-[13px] text-[10px]">★</span>
                    <span className="font-semibold lg:text-md md:text-xs sm:text-[10px] text-[7px]">{car?.rating}</span>
                    <span className="text-gray-400 lg:text-md md:text-xs sm:text-[10px] text-[7px]">
                        ({car?.reviews} reviews)
                    </span>
                </div>
            </div>

            {/* Car Details */}
            <div className="lg:p-4 sm:p-2.5 p-1.5 mt-1 sm:mt-2">
                <h2 className="lg:text-lg truncate sm:text-sm text-xs font-bold">{car?.name}</h2>
                <p className="text-gray-400 lg:text-sm sm:text-xs text-[8px]">- By {car?.company}</p>

                {/* Location */}
                <div className="flex items-center lg:text-sm text-gray-400 sm:text-xs text-[10px] mt-1">
                    <FaMapMarkerAlt className="mr-1" />
                    <span className="truncate">{car?.location}</span>
                </div>

                {/* Features */}
                <div className="flex  items-center lg:gap-4 sm:gap-3 gap-2 text-sm text-gray-300 lg:mt-3 sm:mt-2 mt-1">
                    <div className="flex lg:text-sm sm:text-xs text-[10px] items-center">
                        <FaUserFriends className="mr-1" />
                        <span>{car?.seats} seats</span>
                    </div>
                    <div className="flex lg:text-sm sm:text-xs text-[10px] items-center">
                        <FaTaxi className="mr-1" />
                        <span>Cab</span>
                    </div>
                </div>

                {/* Availability */}
                <div className="flex items-center lg:text-[16px] sm:text-xs text-[10px] text-green-400 font-semibold lg:mt-3 sm:mt-2 mt-1">
                    <FaCheckCircle className="mr-1 lg:text-lg sm:text-[16px]" />
                    <span>Available</span>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center lg:mt-4 sm:mt-3 mt-2">
                    <p className="lg:text-lg sm:text-xs text-[10px] text-gray-500 text-xs font-semibold">
                        Price{" "}
                        <span className="hidden lg:inline lg:text-[20px] sm:text-[16px] text-xs text-yellow-300">
                            ₹{car?.price}/km
                        </span>
                        <p className="lg:hidden md:text-[16px] sm:text-[14px] text-[10px] text-yellow-300">
                            ₹{car?.price}/km
                        </p>
                    </p>
                    <button 
                        className="bg-[#00E1FF] cursor-pointer lg:text-lg sm:text-sm text-[8px] hover:bg-gray-700 text-black lg:px-4 sm:px-2.5 px-1.5 lg:py-2 py-1 rounded-lg font-semibold"
                        onClick={() => navigate(`/booking`)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};



