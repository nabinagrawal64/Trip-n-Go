import { useLocation, useNavigate } from "react-router-dom";
import {FaMapMarkerAlt, FaStar, FaTaxi, FaSnowflake, FaWheelchair, FaGasPump, FaBed, FaUsers,} from "react-icons/fa";

export default function CarDetails() {
    const location = useLocation();
    const navigate = useNavigate();
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
        <div className="py-20 bg-[#212121] text-white w-full mx-auto">
            {/* back button */}
            <button 
                onClick={() => navigate(-1)} 
                className="absolute left-5 mb-4"
            >
                &larr;
            </button>

            {/* Header Section */}
            <header className="px-20">
                <h2 className="text-[45px] max-w-[90%] font-semibold leading-14">Hyundai Accent 2015 - Modern compact sedan in blue color on beautiful dark wheels</h2>
                <p className="text-gray-300 font-semibold text-2xl my-2">- By {car.company}</p>
                <div className="flex items-center my-3 text-sm text-[#466F7F]">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{car.location}</span>
                </div>
                <p className="text-xl ">
                    Vehicle No. -{" "}
                    <span className="text-white font-semibold text-2xl">{car?.vehicleNumber || "N/A"}</span>
                </p>
            </header>

            {/* Description Section */}
            <section className="w-5/6 mx-auto">
                {/* Image Section */}
                <div className="flex mt-3 p-4 rounded-lg">
                    {/* Main Image */}
                    <div className="flex-1">
                        <img
                        src={carImages[0]}
                        alt="Car"
                        className="w-full xl:h-[500px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Side Thumbnails */}
                    <div className="flex flex-col gap-5 mt-1 ml-4">
                        {carImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Car detail"
                            className="xl:w-25 xl:h-27 object-cover rounded-lg"
                        />
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="p-8 max-w-[97%] mx-auto rounded-lg border border-gray-600 w-full">
                    <div className="grid grid-cols-5 gap-x-8 gap-y-5">
                        {details.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#466F7F] text-white flex items-center justify-center gap-2 p-5 rounded-md text-lg "
                        >
                            {item.icon} <span className="text-sm">{item.text}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Overview */}
                <div className="m-6">
                    <h3 className="text-2xl font-bold">Overview</h3>
                    <p className="text-gray-200 mt-2">{car.description.slice(0,398)}</p>
                    <p className="text-gray-200 mt-2">{car.description.slice(398)}</p>
                </div>

                {/* Average total rating & Reviews */}
                <div className="mt-6">
                    <div className="p-3 rounded-lg text-white mx-4">
                        <h2 className="text-3xl font-bold mb-4">Rate & Reviews</h2>
                        <div className="border border-gray-500 w-[15%] mx-5 flex flex-col items-center space-y-3 rounded-lg p-6 text-center">
                            <p className="text-[32px] font-bold"> 4.95 / 5 </p>
                            <p className="text-gray-400 text-lg">({car.reviews} reviews)</p>
                            <div className="flex justify-center mt-2 gap-1 text-cyan-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Individual rating & Reviews */}
                <div className="p-12 text-white rounded-lg shadow-lg mx-auto w-full">
                    {/* Reviews Section */}
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="rounded-lg w-full mb-4"
                        >
                            <div className="border border-gray-600 rounded-lg p-12 w-full">
                                {/* Header - Profile Image, Name, Time, Rating */}
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={review.image}
                                            alt="Profile"
                                            className="w-20 h-20 rounded-full"
                                        />
                                        <div>
                                            <p className="font-bold text-lg">{review.reviewer}</p>
                                            <p className="text-gray-400 text-sm">{review.date}</p>
                                        </div>
                                    </div>
                                    {/* Star Rating */}
                                    <div className="flex text-cyan-400">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} size={18} />
                                        ))}
                                        <FaStar size={18} className="text-gray-600" /> {/* 4/5 rating */}
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="border-gray-600 ml-6 my-3" />

                                {/* Review Text */}
                                <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                            </div>
                        </div>
                    ))}

                    {/* Load More Button */}
                    <div className="flex text-black justify-center mt-6">
                        <button className="flex items-center bg-[#00E1FF] px-6 py-2 rounded-lg font-semibold hover:bg-[#00e1ffb4]">
                            <span className="mr-2">🔄</span> Load More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
