/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from "react-router-dom";
import {FaMapMarkerAlt, FaStar, FaTaxi, FaSnowflake, FaWheelchair, FaGasPump, FaBed, FaUsers, FaPhone, FaEnvelope,} from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { ChevronLeft, ChevronRight, SendHorizontal } from "lucide-react";

export default function CarDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showFull, setShowFull] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState("");
    
    const car = location.state?.car;
    console.log(car)

    useEffect(() => {
        window.scrollTo(0, 0); // Page load hone ke turant baad top pe scroll karega
    }, []);

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, reviews.length));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ rating, comment });
    };

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
        },
        {
            reviewer: "Amit Khanna",
            date: "2024-02-15",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/5.jpg",
            comment: "Great performance and handling, but the infotainment system feels a bit outdated compared to competitors."
        },
        {
            reviewer: "Sanya Kapoor",
            date: "2024-02-12",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            comment: "Absolutely love my Audi A3! It’s sleek, powerful, and the interior feels premium. Worth every penny!"
        },
        {
            reviewer: "Rohit Mehta",
            date: "2024-02-10",
            rating: 3.5,
            image: "https://randomuser.me/api/portraits/men/7.jpg",
            comment: "Good car, but maintenance costs are on the higher side. Expected a bit more from the brand."
        },
        {
            reviewer: "Neha Malhotra",
            date: "2024-02-08",
            rating: 4.8,
            image: "https://randomuser.me/api/portraits/women/5.jpg",
            comment: "Stylish and powerful! The driving experience is smooth, and I love the attention to detail in the interior."
        },
        {
            reviewer: "Vikram Singh",
            date: "2024-02-06",
            rating: 4.2,
            image: "https://randomuser.me/api/portraits/men/9.jpg",
            comment: "Handles well on highways, but I feel the cabin could be a bit quieter."
        },
        {
            reviewer: "Anjali Desai",
            date: "2024-02-04",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/7.jpg",
            comment: "Luxury and comfort at its best! The mileage is surprisingly good, and it’s a head-turner on the road."
        },
        {
            reviewer: "Rajesh Patel",
            date: "2024-02-02",
            rating: 3.8,
            image: "https://randomuser.me/api/portraits/men/11.jpg",
            comment: "Decent car, but I expected more features in this price range. Performance-wise, no complaints."
        },
        {
            reviewer: "Simran Kaur",
            date: "2024-01-30",
            rating: 4.7,
            image: "https://randomuser.me/api/portraits/women/9.jpg",
            comment: "A perfect blend of performance and luxury. The sunroof is my favorite feature!"
        },
        {
            reviewer: "Arjun Nair",
            date: "2024-01-28",
            rating: 4.3,
            image: "https://randomuser.me/api/portraits/men/13.jpg",
            comment: "Great car for city driving! The compact size makes it easy to park, and the acceleration is smooth."
        },
        {
            reviewer: "Pooja Iyer",
            date: "2024-01-25",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/11.jpg",
            comment: "Dream car! The leather seats, premium sound system, and driving experience make it totally worth it."
        }
    ];    

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

    const amenities = ["Charging Ports", "Wi-Fi", "TV", "Music System", "Luggage Space"];

    const carImages = [
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Main image
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png", // Small images
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png",
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png",
        "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-4.png"
    ];

    const [images, setImages] = useState(carImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleImageClick = (index) => {
        const newImages = [...images];
        [newImages[0], newImages[index]] = [newImages[index], newImages[0]];
        setImages(newImages);
    };

    return (
        <motion.div 
            className="bg-[#212121] text-white w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the section is in view
            transition={{ duration: 0.5 }}
        >
            <div className="lg:mb-10 sm:mb-8 mb-6"><Navbar/></div>

            {/* back button */}
            <motion.button  
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                className="absolute bg-black sm:px-2 sm:pb-1 px-1 pb-0.5  rounded-full cursor-pointer lg:left-3 sm:left-2 left-1 xl:top-27 lg:top-24 md:top-20 sm:top-16 top-14 lg:text-xl sm:text-lg text-base"
            >
                &larr;
            </motion.button> 

            {/* Header Section */}
            <motion.header 
                className="lg:px-20 sm:px-14 px-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
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
            </motion.header>

            {/* Description Section */}
            <motion.section 
                className="w-5/6 mx-auto" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {/* Image Section */}
                <div className="flex sm:flex-row flex-col sm:mt-3 mt-2 sm:p-4 p-2 rounded-lg">
                    {/* Main Image */}
                    <motion.div 
                        className="flex-1 relative"
                        key={images[currentIndex]}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}    
                    >      
                        <button
                            onClick={prevSlide}
                            className="absolute left-[2%] cursor-pointer top-[50%] z-10 bg-black/40 text-white lg:p-2 sm:p-1 rounded-full hover:bg-gray-800"
                        >
                            <ChevronLeft />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[currentIndex]} // Ensures re-rendering
                                src={images[currentIndex]}
                                alt="Car"
                                className="w-full xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-[250px] object-cover rounded-lg"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>

                        <button
                            onClick={nextSlide}
                            className="absolute right-[2%] cursor-pointer top-[50%] z-10 bg-black/40 text-white lg:p-2 sm:p-1 rounded-full hover:bg-gray-800"                            >
                            <ChevronRight />
                        </button>
                    </motion.div>

                    {/* Side Thumbnails */}
                    <motion.div  
                        className="flex sm:flex-col flex-row md:gap-5 gap-3 md:mt-0 mt-2 sm:ml-4 ml-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { 
                                opacity: 1, 
                                transition: { 
                                    staggerChildren: 0.5 // Delay each child by 0.5s
                                } 
                            },
                            hidden: { opacity: 0 }
                        }}
                    >
                        {images.slice(1).map((img, index) => (
                            <motion.img
                                key={index+1}
                                src={img}
                                alt="Car detail"
                                className="xl:w-25 xl:h-27 lg:h-24 md:h-18 sm:h-[52px] w-[115px] overflow-hidden object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                                variants={{
                                    hidden: { opacity: 0, y: 20 }, 
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                onClick={() => handleImageClick(index + 1)}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Features */}
                <motion.div 
                    className="xl:p-8 lg:p-5 sm:p-3 p-4 sm:mt-6 mt-4 lg:max-w-[97%] sm:max-w-[95%] max-w-[93%] ml-4 mx-auto rounded-lg border border-gray-600 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <div className="grid sm:grid-cols-5 grid-cols-2 xl:gap-x-8 lg:gap-x-6 sm:gap-x-3 sm:gap-y-5 gap-x-4 gap-y-2">
                        {details.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-[#466F7F] text-white flex items-center justify-center lg:gap-2 sm:gap-1.5 gap-1 xl:p-5 lg:p-3 sm:py-2 sm:px-1 p-1.5 rounded-md xl:text-lg lg:text-base md:text-sm text-xs"
                            >
                                {item.icon} <span className="xl:text-sm lg:text-xs text-[10px] line-clamp-1">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Amenities */}
                <motion.div className=" text-white p-6 rounded-lg mx-auto">
                    {/* Title */}
                    <h3 className="lg:text-3xl sm:text-2xl my-5 font-bold">Amenities</h3>

                    {/* Responsive Amenities Grid */}
                    <div className="flex flex-wrap gap-4">
                        {amenities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-700 text-white lg:px-6 lg:py-3 sm:px-4 sm:py-2 px-3 py-1.5  rounded-full lg:text-sm sm:text-xs text-[10px] font-medium 
                                shadow-md hover:bg-gray-600 transition text-center"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Overview */}
                <motion.div className="m-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="lg:text-3xl sm:text-2xl font-bold">Overview</h3>
                    <p className="text-gray-200 mt-2 xl:text-base md:text-sm sm:text-xs text-[10px]">
                        {showFull ? car.description : car.description.slice(0, 250)}
                        {!showFull && car.description.length > 200 && "... "}
                        
                        {/* Show More/Less Button at the End */}
                        {car.description.length > 398 && (
                            <motion.button
                                className="text-[#466F7F] hover:underline font-semibold"
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setShowFull(!showFull)}
                            >
                                {showFull ? "See Less" : "See More"}
                            </motion.button>
                        )}
                    </p>
                </motion.div>
                        
                {/* Provider details */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className=" text-white lg:py-6 px-6 sm:py-4 py-2 mx-auto"
                >   
                    <h3 className="lg:text-3xl sm:mb-6 mb-4 sm:text-2xl font-bold">Provider Details</h3>
                    {/* Profile Section */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-4"
                    >
                        <img
                            src="https://randomuser.me/api/portraits/men/5.jpg"
                            alt="Profile"
                            className="lg:w-14 lg:h-14 sm:w-[54px] sm:h-[54px] w-12 h-12 rounded-full border-2 border-green-500"
                        />
                        <h2 className="lg:text-xl sm:text-lg text-base font-bold">Satish Travels</h2>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="sm:my-4 my-3 mx-1 flex flex-col gap-2 text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="lg:text-base sm:text-sm text-xs text-white" />
                            <span className="lg:text-base sm:text-sm text-xs">satish@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="lg:text-base sm:text-sm text-xs text-white" />
                            <span className="lg:text-base sm:text-sm text-xs">1234569870</span>
                        </div>
                    </motion.div>

                    {/* Book Now Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mx-1 cursor-pointer bg-[#00E1FF] text-black font-semibold sm:py-2 sm:px-4 py-1 px-2 rounded-lg hover:bg-[#00e1ffb4]"
                    >
                        <span className="lg:text-base sm:text-sm text-xs">Book Now</span>
                    </motion.button>
                </motion.div>

                <hr className="sm:mx-0 mx-4 my-6" />

                {/* Average total rating & Reviews */}
                <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div className="p-3 rounded-lg text-white mx-4">
                        <h2 className="lg:text-3xl sm:text-2xl font-bold sm:mb-4 mb-2">Rate & Reviews</h2>
                        <div className="border border-gray-500 lg:w-[200px] sm:w-[160px] w-[100px] lg:mx-5 md:mx-3 flex flex-col items-center sm:space-y-3 space-y-1 rounded-lg sm:p-6 p-3 text-center">
                            <motion.p 
                                initial={{ scale: 0.8, opacity: 0 }} 
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }} 
                                animate={{ scale: 1, opacity: 1 }} 
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="lg:text-[28px] sm:text-xl text-sm font-bold"
                            > 
                                4.95 / 5 
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }} 
                                className="text-gray-400 lg:text-lg sm:text-[15px] text-[10px]"
                            >
                                ({car.reviews} reviews)
                            </motion.p>
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }} 
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}  
                                animate={{ scale: 1, opacity: 1 }} 
                                transition={{ duration: 0.4, delay: 0.4 }} 
                                className="flex justify-center sm:mt-2 mt-1 sm:gap-1 gap-0.5 text-cyan-400"
                            >
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="sm:size-[14px] size-[10px]" />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Individual rating & Reviews */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4 }}
                    className="lg:p-12 md:p-8 sm:p-6 px-6 py-3 text-white rounded-lg mx-auto w-full"
                >
                    {/* Reviews Section */}
                    <div className="space-y-4">
                        {reviews.slice(0, visibleCount).map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border border-gray-600 rounded-lg p-6 w-full"
                            >
                                <div className=" rounded-lg">
                                    {/* Header - Profile Image, Name, Date, Rating */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <motion.img
                                                src={review.image}
                                                alt="Profile"
                                                className="lg:w-14 lg:h-14 sm:h-12 sm:w-12 w-10 h-10 rounded-full"
                                                initial={{ scale: 0.8 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <div>
                                                <p className="font-bold lg:text-lg sm:text-base text-xs">{review.reviewer}</p>
                                                <p className="text-gray-400 lg:text-base sm:text-xs text-[10px]">{review.date}</p>
                                            </div>
                                        </div>

                                        {/* Star Rating */}
                                        <motion.div
                                            className="flex text-cyan-400 mt-10"
                                            initial={{ scale: 0.8 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            {[...Array(4)].map((_, i) => (
                                                <FaStar key={i} className="lg:text-lg sm:text-sm text-[10px]" />
                                            ))}
                                            <FaStar className="text-gray-600 lg:text-lg sm:text-sm text-[10px]" />
                                        </motion.div>
                                    </div>

                                    {/* Divider */}
                                    <motion.hr
                                        className="border-gray-600 sm:ml-6 ml-0 my-3"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Review Text */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="text-gray-300 lg:text-base md:text-sm sm:text-xs text-[10px] leading-relaxed"
                                    >
                                        {review.comment}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < reviews.length && (
                        <motion.div
                            className="flex justify-center sm:mt-6 mt-3 text-black"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <button 
                                onClick={loadMore} 
                                className="flex items-center cursor-pointer bg-[#00E1FF] lg:px-6 lg:py-2 sm:px-4 sm:py-1.5 px-2 py-1 rounded-lg font-semibold hover:bg-[#00e1ffb4]"
                            >
                                <span className="mr-2">🔄</span> Load More
                            </button>
                        </motion.div>
                    )}
                </motion.div>
                
                {/* Add review */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className="text-white p-6 rounded-lg mx-auto w-full"
                >
                    {/* Title */}
                    <motion.h3 
                        initial={{ opacity: 0, x: -20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.2 }} 
                        className="lg:text-3xl sm:text-2xl font-bold sm:mb-4 mb-2"
                    >
                        Add a review
                    </motion.h3>

                    {/* Review Box */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ duration: 0.5, delay: 0.3 }} 
                        className="border border-gray-600 lg:p-6 sm:p-5 p-4 rounded-lg"
                    >
                        {/* Subtitle */}
                        <h4 className="lg:text-lg sm:text-base text-sm font-semibold mb-2">Leave feedback</h4>

                        {/* Star Rating */}
                        <div className="flex sm:gap-1 gap-0.5 sm:mb-4 mb-3">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <motion.div 
                                        key={index} 
                                        whileHover={{ scale: 1.2 }} 
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <FaStar
                                            className={`cursor-pointer transition lg:size-6 sm:size-5 size-4 ${
                                                starValue <= (hover || rating)
                                                    ? "text-yellow-500"
                                                    : "text-gray-500"
                                            }`}
                                            onClick={() => setRating(starValue)}
                                            onMouseEnter={() => setHover(starValue)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Comment Box */}
                        <motion.textarea
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="w-full lg:h-48 sm:h-32 h-24 sm:p-3 p-2 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white/60 placeholder:text-gray-500 placeholder:sm:text-sm placeholder:lg:text-base placeholder:text-xs"
                            placeholder="Your comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmit}
                            className="lg:mt-3 sm:mt-3 mt-2 bg-[#00E1FF] hover:bg-[#00e1ffad] text-black 
                            lg:px-5 lg:py-2 sm:px-4 sm:py-1.5 px-2 py-1 rounded-lg font-medium flex items-center sm:gap-2 gap-1 transition"
                        >
                            <span className="lg:text-lg md:text-base sm:text-sm text-xs"> Submit </span> <SendHorizontal className="lg:size-5 sm:size-4 size-3" />
                        </motion.button>
                    </motion.div>
                </motion.div>
                
            </motion.section>
        </motion.div>
    );
}
