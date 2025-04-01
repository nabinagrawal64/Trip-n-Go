/* eslint-disable react/prop-types */
import { FaCheckCircle, FaMapMarkerAlt, FaStar, FaTaxi, FaUserFriends, } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const ListCard = ({index, card}) => {

    const navigate = useNavigate();

    console.log(card.image);

    return (
        <div className="col-span-3 sm:translate-x-5 -translate-x-3">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-4 lg:gap-x-10 sm:gap-x-5 rounded-lg shadow-md"
                >
                    {/* Car Details */}
                    <div className="lg:p-4 flex sm:p-2.5 mt-1 sm:mt-2 xl:tracking-wider">
                        {/* Car Image */}
                        <div>
                            <img
                                src={card?.image}
                                alt={card?.name}
                                className="w-auto lg:h-64 sm:h-40 h-32 object-fit xl:mr-20 sm:mr-8 mr-3 rounded-lg"
                            />
                        </div>

                        {/* deatils */}
                        <div className="lg:mt-2 sm:translate-x-0 translate-x-6">
                            <h2 className="lg:text-2xl sm:text-base truncate text-xs font-bold">
                                {card?.name}
                            </h2>
                            <p className="text-gray-400 lg:text-lg sm:text-sm text-[10px]">
                                - By {card?.company}
                            </p>

                            {/* rating */}
                            <div className="flex mt-1 bg-black w-fit gap-1 rounded-xl lg:text-sm sm:text-xs text-[8px] lg:p-2 sm:p-1.5 py-1 px-1.5">
                                <FaStar className="lg:size-4 sm:size-3 size-2.5 text-[#00E1FF]" />
                                <span className="lg:text-sm sm:text-[10px]">
                                    4.92{" "}
                                </span>
                                <span className="text-white/50 lg:text-sm sm:text-[10px] text-[8px]">
                                    ({card?.reviews} reviews)
                                </span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center lg:text-base text-gray-400 sm:text-xs text-[10px] mt-1">
                                <FaMapMarkerAlt className="mr-1" />
                                <span className="truncate">
                                    {card?.location}
                                </span>
                            </div>

                            {/* Features */}
                            <div className="flex items-center lg:gap-16 sm:gap-8 gap-4 text-gray-300 lg:mt-3 sm:mt-1 mt-0.5">
                                <div className="flex lg:text-base sm:text-sm text-[10px] items-center">
                                    <FaUserFriends className="mr-1" />
                                    <span>{card?.seats} seats</span>
                                </div>
                                <div className="flex lg:text-base sm:text-xs text-[10px] items-center">
                                    <FaTaxi className="mr-1" />
                                    <span>Cab</span>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="flex items-center lg:text-lg sm:text-sm text-[10px] text-green-400 font-semibold lg:mt-3 sm:mt-1 mt-0.5">
                                <FaCheckCircle className="mr-1 lg:text-xl sm:text-base text-xs" />
                                <span>Available</span>
                            </div>

                            {/* Price and Button */}
                            <div className="flex justify-between sm:gap-5 gap-2 items-center ">
                                <p className="lg:text-lg sm:text-xs text-[8px]  text-gray-500 text-xs font-semibold">
                                    <span>Price </span>
                                    <span className="lg:text-[20px] ml-1 md:text-sm sm:text-xs text-[10px] text-yellow-300">
                                        ₹{card?.price}/km
                                    </span>
                                </p>
                                <button onClick={() => navigate('/booking')} className="bg-[#00E1FF] cursor-pointer lg:text-sm sm:text-xs text-[8px] hover:bg-gray-700 text-black lg:px-4 sm:px-2.5 px-1.5 lg:py-2 py-1 rounded-lg font-semibold">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </div>
    );
};

export default ListCard;
