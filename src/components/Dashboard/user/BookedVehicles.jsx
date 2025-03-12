import { FaMapMarkerAlt, FaStar, FaTaxi, FaUserFriends, } from "react-icons/fa";
import { motion } from "framer-motion";
import { CalendarCheck2 } from "lucide-react";

const Bookings = () => {

    const cars = [
        {
            id: 1,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
            name: "Audi A3 1.6 TDI S line",
            company: "Sahu Express",
            location: "Bhubaneswar, Odisha",
            vehicleNumber: "OD 02 1234",
            seats: 7,
            totalAmount: "12,500",
            rating: "4.92",
            reviews: 672,
            startDate: "2025-03-10",
            endDate: "2025-03-15",
        },
        {
            id: 2,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png",
            name: "BMW X5 M Sport",
            company: "Royal Rides",
            location: "Mumbai, Maharashtra",
            vehicleNumber: "OD 02 1234",
            seats: 5,
            totalAmount: "18,750",
            rating: "4.85",
            reviews: 523,
            startDate: "2025-03-12",
            endDate: "2025-03-18",
        },
        {
            id: 3,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png",
            name: "Mercedes-Benz GLC",
            company: "Luxury Wheels",
            location: "Delhi, India",
            vehicleNumber: "OD 02 1234",
            seats: 5,
            totalAmount: "15,200",
            rating: "4.78",
            reviews: 601,
            startDate: "2025-03-08",
            endDate: "2025-03-14",
        },
        {
            id: 4,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-4.png",
            name: "Hyundai Creta SX",
            company: "Smart Rentals",
            vehicleNumber: "OD 02 1234",
            location: "Bangalore, Karnataka",
            seats: 5,
            totalAmount: "10,850",
            rating: "4.65",
            reviews: 482,
            startDate: "2025-03-11",
            endDate: "2025-03-16",
        },
        {
            id: 5,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
            name: "Toyota Fortuner",
            company: "Elite Cars",
            location: "Chennai, Tamil Nadu",
            vehicleNumber: "OD 02 1234",
            seats: 7,
            totalAmount: "20,450",
            rating: "4.90",
            reviews: 715,
            startDate: "2025-03-09",
            endDate: "2025-03-14",
        },
        {
            id: 6,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
            name: "Audi A3 1.6 TDI S line",
            company: "Sahu Express",
            location: "Bhubaneswar, Odisha",
            vehicleNumber: "OD 02 1234",
            seats: 7,
            totalAmount: "14,300",
            rating: "4.92",
            reviews: 672,
            startDate: "2025-03-07",
            endDate: "2025-03-12",
        }
    ];
    
    
    return (
        <div className="text-white min-h-screen sm:p-6 p-4">
            <h2 className="xl:text-3xl lg:text-2xl text-xl mx-auto font-bold sm:text-left text-center">Bookings</h2>
            <div className="col-span-3 -translate-x-3">
                {cars.map((car, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-center p-4 lg:gap-x-10 sm:gap-x-5 rounded-lg shadow-md"
                    >
                        <div className="xl:p-4 flex mt-1 sm:mt-2 xl:tracking-widest">
                            {/* Car Image */}
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full xl:h-56 lg:h-48 md:h-32 h-20 object-fit xl:mr-20 md:mr-8 mr-5 rounded-lg"
                            />

                            {/* deatils */}
                            <div className="lg:mt-2 flex xl:gap-x-40 lg:gap-8 md:gap-6 gap-3">
                                {/* Left part */}
                                <div className="xl:space-y-5 md:space-y-3 space-y-0.5 xl:min-w-[300px] lg:min-w-[240px] min-w-[120px] flex flex-col xl:justify-center">
                                    {/* Car name and provider name */}
                                    <div>
                                        <h2 className="xl:text-2xl lg:text-xl md:text-sm truncate text-[11px] font-bold">
                                            {car?.name}
                                        </h2>
                                        <p className="text-gray-400 xl:text-lg lg:text-sm md:text-xs text-[9px] sm:mt-1">
                                            - By {car?.company}
                                        </p>
                                    </div>
                                    
                                    {/* Location */}
                                    <div className="flex items-center lg:text-base text-gray-400 md:text-xs truncate text-[8px] ">
                                        <FaMapMarkerAlt className="mr-1" />
                                        <span className="truncate">
                                            {car?.location}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <div className="flex items-center lg:gap-16 md:gap-4 gap-2 text-gray-300 ">
                                        <div className="flex lg:text-base md:text-xs text-[9px] items-center">
                                            <FaUserFriends className="mr-2 lg:size-5 md:size-4 size-3" />
                                            <span>{car?.seats} seats</span>
                                        </div>
                                        <div className="flex lg:text-base md:text-xs text-[9px] items-center">
                                            <FaTaxi className="mr-2 lg:size-5 md:size-4 size-3" />
                                            <span>Cab</span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="flex justify-between sm:gap-5 gap-1 items-center ">
                                        <p className="lg:text-lg md:text-xs text-[8px] text-gray-500 font-semibold">
                                            <span className="">Total Amount </span>
                                            <span className="lg:text-[20px] ml-0.5 md:text-sm text-[10px] text-red-100">
                                                ₹{car?.totalAmount}
                                            </span>
                                        </p>
                                        
                                    </div>
                                </div>

                                {/* Right part */}
                                <div className="flex flex-col md:translate-x-0 sm:translate-x-5 -translate-x-1 items-end xl:space-y-3 lg:space-y-1 justify-center ">
                                    {/* Rating */}
                                    <div className="flex sm:translate-x-0 -translate-x-1 bg-black w-fit h-fit md:gap-1 gap-0.5 rounded-lg lg:text-sm sm:text-xs lg:p-2 md:p-1.5 sm:p-1 py-1 px-2">
                                        <FaStar className="xl:size-4 lg:size-3 md:size-2.5 size-2 text-[#00E1FF]" />
                                        <span className="xl:text-sm md:text-[10px] text-[7px]">
                                            4.92{" "}
                                        </span>
                                        <span className="text-white/50 md:inline hidden xl:text-sm md:text-[10px] sm:text-[8px] text-[6px]">
                                            ({car.reviews} reviews)
                                        </span>
                                    </div>

                                    {/* Date */}
                                    <div className="flex flex-col items-end w-fit h-fit lg:gap-1 rounded-xl lg:text-sm md:text-xs text-[7px] lg:p-2 sm:p-1.5 py-1 px-2 md:mt-1">
                                        <span>From</span>
                                        <p className="text-white flex"><span><CalendarCheck2 className="lg:size-4 md:size-3 size-2 sm:mr-1 mr-0.5" /></span>{car.startDate}</p>
                                        <span>To</span>
                                        <p className="text-white flex"><span><CalendarCheck2 className="lg:size-4 md:size-3 size-2 sm:mr-1 mr-0.5" /></span>{car.endDate}</p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex md:gap-2 sm:translate-x-0 -translate-x-0.5 gap-1">
                                        <div className="bg-[#9A0000] cursor-pointer xl:text-sm md:text-xs text-[7px] hover:bg-gray-700 text-white xl:px-4 lg:px-2.5 px-1 lg:py-2 py-0.5 rounded-md">
                                            cancel
                                        </div>
                                        <div className="bg-[#009051] cursor-pointer xl:text-sm md:text-xs text-[7px] hover:bg-gray-700 text-white xl:px-4 lg:px-2.5 px-1 lg:py-2 py-0.5 rounded-md ">
                                            Booked
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
    
export default Bookings;
