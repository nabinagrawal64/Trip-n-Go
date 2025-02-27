import { useLocation, useNavigate } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaStar,
    FaUserFriends,
    FaTaxi,
    FaSnowflake,
} from "react-icons/fa";

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
            date: "2024-02-18",
            image: "https://randomuser.me/api/portraits",
            comment: "The Audi A3 offers an incredibly smooth and comfortable ride with a touch of luxury. The interiors are spacious, and the fuel efficiency is impressive for a car of this class. A great choice for city drives and long road trips!"
        },
        {
            reviewer: "Priya Verma",
            date: "2024-02-18",
            rating: 4.5,
            date: "2024-02-18",
            image: "https://randomuser.me/api/portraits",
            comment: "Loved the premium feel and smooth handling. However, I wish the back seats were slightly more spacious."
        }
    ]
    console.log("review",reviews)

    if (!car) {
        return (
            <p className="text-center text-white">No car details available</p>
        );
    }

    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-5xl mx-auto">
            {/* Header Section */}
            <button onClick={() => navigate(-1)} className="text-blue-400 mb-4">
                &larr; Back
            </button>
            <h2 className="text-3xl font-bold">{car.name}</h2>
            <p className="text-gray-400 text-lg">- By {car.company}</p>
            <div className="flex items-center mt-2 text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                <span>{car.location}</span>
            </div>
            <p className="mt-2 text-lg font-semibold">
                Vehicle No. -{" "}
                <span className="text-white">{car.vehicleNumber || "N/A"}</span>
            </p>

            {/* Image Section */}
            <div className="flex mt-4">
                <div className="flex-1">
                    <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-80 object-cover rounded-md"
                    />
                </div>
                <div className="flex flex-col ml-4 space-y-2">
                    {car.otherImages?.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Car Detail"
                            className="w-24 h-16 object-cover rounded-md"
                        />
                    ))}
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-6 bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center">
                    <FaUserFriends className="mr-2" /> {car.seats} seats
                </div>
                <div className="flex items-center">
                    <FaTaxi className="mr-2" /> Cab
                </div>
                <div className="flex items-center">
                    <FaSnowflake className="mr-2" /> AC
                </div>
                <div className="flex items-center">$ {car.hourlyPrice}/hr</div>
                <div className="flex items-center">$ {car.kmPrice}/km</div>
                <div className="flex items-center">$ {car.dailyPrice}/day</div>
            </div>

            {/* Overview */}
            <div className="mt-6">
                <h3 className="text-2xl font-bold">Overview</h3>
                <p className="text-gray-400 mt-2">{car.description}</p>
            </div>

            {/* Rating & Reviews */}
            <div className="mt-6">
                <h3 className="text-2xl font-bold">Rate & Reviews</h3>
                <div className="flex items-center text-yellow-400 text-2xl mt-2">
                    <FaStar className="mr-2" /> {car.rating} / 5
                    <span className="text-gray-400 text-lg ml-2">
                        ({car?.reviews} reviews)
                    </span>
                </div>
            </div>

            {/* Book Now Button */}
            <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
                Book Now
            </button>

            <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
                {/* Header */}
                <h2 className="text-2xl font-bold mb-4">Rate & Reviews</h2>

                {/* Rating Box */}
                <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-32 mb-6">
                    <p className="text-3xl font-bold">4.95 / 5</p>
                    <p className="text-gray-400">(672 reviews)</p>
                    <p className="text-blue-400 text-xl">★★★★★</p>
                </div>

                {/* Reviews Section */}
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-4 rounded-lg mb-4 flex"
                    >
                        {/* User Image */}
                        <img
                            src={review.image}
                            alt={review.reviewer}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            {/* Name & Date */}
                            <p className="font-bold">{review.reviewer}</p>
                            <p className="text-gray-400 text-sm">
                                {review.date}
                            </p>

                            {/* Review Text */}
                            <p className="mt-2 text-gray-300">{review.comment}</p>
                        </div>
                        {/* Star Rating */}
                        <p className="text-blue-400 text-xl ml-auto">★★★★☆</p>
                    </div>
                ))}

                {/* Load More Button */}
                <div className="flex justify-center mt-6">
                    <button className="flex items-center bg-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
                        <span className="mr-2">🔄</span> Load More
                    </button>
                </div>
            </div>
        </div>
    );
}
