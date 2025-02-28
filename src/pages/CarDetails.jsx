import { useLocation, useNavigate } from "react-router-dom";
import {FaMapMarkerAlt, FaStar, FaTaxi, FaSnowflake, FaWheelchair, FaGasPump, FaBed, FaUsers,} from "react-icons/fa";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CarDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showFull, setShowFull] = useState(false);
    const car = location.state?.car;
    console.log(car)
    const reviews = [
        {
            reviewer: "Rahul Sharma",
            date: "2024-02-20",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            comment: "The Audi A3 offers an incredibly smooth and comfortable ride with a touch of luxury. The interiors are spacious, and the fuel efficiency is impressive for a car of this class. A great choice for city drives and long road trips!"
        },
        {
            reviewer: "Priya Verma",
            date: "2024-02-18",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            comment: "Loved the premium feel and smooth handling. However, I wish the back seats were slightly more spacious."
        }
    ]

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
        { icon: <FaSnowflake />, text: "AC" },
    ];

    const carImages = [
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Main image
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png", // Small images
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png",
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png"
    ];

    return (
        <div className=" bg-[#212121] text-white w-full mx-auto">

            <div><Navbar/></div>

            {/* back button */}
            <button 
                onClick={() => navigate(-1)} 
                className="absolute sm:left-5 left-3 lg:top-23 xl:top-27 md:top-20 sm:top-15 top-14 sm mb-4 lg:text-base sm:text-sm text-xs"
            >
                &larr;
            </button>

            {/* Header Section */}
            <header className="lg:px-20 sm:px-14 px-10">
                <h2 className="xl:text-[45px] lg:text-4xl md:text-2xl sm:text-xl text-lg max-w-[90%] font-semibold lg:leading-14 md:leading-10">{car.name}</h2>
                <p className="text-gray-300 font-semibold xl:text-2xl lg:text-xl sm:text-base text-sm lg:my-2 my-1">- By {car.company}</p>
                <div className="flex items-center lg:my-3 my-2 lg:text-sm sm:text-xs text-[10px] text-[#466F7F]">
                    <FaMapMarkerAlt className="sm:mr-2 mr-1" />
                    <span>{car.location}</span>
                </div>
                <p className="xl:text-xl lg:text-lg sm:text-base text-sm">
                    Vehicle No. -{" "}
                    <span className="text-white font-semibold xl:text-2xl lg:text-xl sm:text-lg text-sm">{car?.vehicleNumber || "N/A"}</span>
                </p>
            </header>

            {/* Description Section */}
            <section className="w-5/6 mx-auto">
                {/* Image Section */}
                <div className="flex sm:flex-row flex-col sm:mt-3 mt-2 sm:p-4 p-2 rounded-lg">
                    {/* Main Image */}
                    <div className="flex-1">
                        <img
                        src={carImages[0]}
                        alt="Car"
                        className="w-full xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-[250px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Side Thumbnails */}
                    <div className="flex sm:flex-col flex-row md:gap-5 gap-3 md:mt-0 mt-2 sm:ml-4 ml-1">
                        {carImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Car detail"
                            className="xl:w-25 xl:h-27 lg:h-24 md:h-18 sm:h-[52px] w-[115px] overflow-hidden object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                        />
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="xl:p-8 lg:p-5 sm:p-3 p-4 lg:max-w-[97%] sm:max-w-[95%] max-w-[93%] ml-4 mx-auto rounded-lg border border-gray-600 w-full">
                    <div className="grid sm:grid-cols-5 grid-cols-2 xl:gap-x-8 lg:gap-x-6 sm:gap-x-3 sm:gap-y-5 gap-x-4 gap-y-2">
                        {details.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#466F7F] text-white flex items-center justify-center lg:gap-2 sm:gap-1.5 gap-1 xl:p-5 lg:p-3 sm:py-2 sm:px-1 p-1.5 rounded-md xl:text-lg lg:text-base md:text-sm text-xs"
                        >
                            {item.icon} <span className="xl:text-sm lg:text-xs text-[10px] line-clamp-1">{item.text}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Overview */}
                <div className="m-6">
                    <h3 className="lg:text-3xl sm:text-2xl font-bold">Overview</h3>
                    <p className="text-gray-200 mt-2 xl:text-base md:text-sm sm:text-xs text-[10px]">
                        {showFull ? car.description : car.description.slice(0, 250)}
                        {!showFull && car.description.length > 200 && "... "}
                        
                        {/* Show More/Less Button at the End */}
                        {car.description.length > 398 && (
                            <button
                                className="text-[#466F7F] hover:underline font-semibold"
                                onClick={() => setShowFull(!showFull)}
                            >
                                {showFull ? "See Less" : "See More"}
                            </button>
                        )}
                    </p>
                </div>

                {/* Average total rating & Reviews */}
                <div className="mt-6">
                    <div className="p-3 rounded-lg text-white mx-4">
                        <h2 className="lg:text-3xl sm:text-2xl font-bold sm:mb-4 mb-2">Rate & Reviews</h2>
                        <div className="border border-gray-500 lg:w-[200px] sm:w-[160px] w-[100px] lg:mx-5 md:mx-3 flex flex-col items-center sm:space-y-3 space-y-1 rounded-lg sm:p-6 p-3 text-center">
                            <p className="lg:text-[28px] sm:text-xl text-sm font-bold"> 4.95 / 5 </p>
                            <p className="text-gray-400 lg:text-lg sm:text-[15px] text-[10px]">({car.reviews} reviews)</p>
                            <div className="flex justify-center sm:mt-2 mt-1 sm:gap-1 gap-0.5 text-cyan-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="sm:size-[14px] size-[10px]" />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Individual rating & Reviews */}
                <div className="lg:p-12 md:p-8 sm:p-6 px-6 py-3 text-white rounded-lg shadow-lg mx-auto w-full">
                    {/* Reviews Section */}
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="rounded-lg w-full mb-4"
                        >
                            <div className="border border-gray-600 rounded-lg lg:p-12 md:p-8 sm:p-6 px-2 py-3 w-full">
                                {/* Header - Profile Image, Name, Time, Rating */}
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={review.image}
                                            alt="Profile"
                                            className="lg:w-20 lg:h-20 md:h-16 md:w-16 w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-bold lg:text-lg sm:text-base text-xs">{review.reviewer}</p>
                                            <p className="text-gray-400 lg:text-sm sm:text-xs text-[10px]">{review.date}</p>
                                        </div>
                                    </div>
                                    {/* Star Rating */}
                                    <div className="flex text-cyan-400 mt-10">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} className="lg:text-lg sm:text-sm text-[10px]" />
                                        ))}
                                        <FaStar className="text-gray-600 lg:text-lg sm:text-sm text-[10px]" /> {/* 4/5 rating */}
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="border-gray-600 ml-6 my-3" />

                                {/* Review Text */}
                                <p className="text-gray-300 lg:text-base md:text-sm sm:text-xs text-[10px] leading-relaxed">{review.comment}</p>
                            </div>
                        </div>
                    ))}

                    {/* Load More Button */}
                    <div className="flex text-black justify-center sm:mt-6 mt-3">
                        <button className="flex items-center bg-[#00E1FF] lg:px-6 lg:py-2 sm:px-4 sm:py-1.5 px-2 py-1 rounded-lg font-semibold hover:bg-[#00e1ffb4]">
                            <span className="mr-2">🔄</span> <span className="lg:text-base sm:text-sm text-xs"> Load More</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
