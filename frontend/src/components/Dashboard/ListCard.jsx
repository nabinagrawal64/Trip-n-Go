import { FaCheckCircle, FaMapMarkerAlt, FaStar, FaTaxi, FaUserFriends, } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const ListCard = () => {

    const navigate = useNavigate();

    const cars = [
        {
            id: 1,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
            name: "Audi A3 1.6 TDI S line",
            company: "Sahu Express",
            location: "Bhubaneswar, Odisha",
            vehicleNumber: "OD 02 1234",
            seats: 7,
            price: "12",
            rating: "4.92",
            reviews: 672,
            description:
                "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
            review: "The Audi A3 offers an incredibly smooth and comfortable ride with a touch of luxury. The interiors are spacious, and the fuel efficiency is impressive for a car of this class. A great choice for city drives and long road trips!",
        },
        {
            id: 2,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png",
            name: "BMW X5 M Sport",
            company: "Royal Rides",
            location: "Mumbai, Maharashtra",
            vehicleNumber: "OD 02 1234",
            seats: 5,
            price: "15",
            rating: "4.85",
            reviews: 523,
            description:
                "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
            review: "The BMW X5 M Sport is a powerhouse on the road. It combines performance with comfort seamlessly. The handling is exceptional, and the premium features make every ride feel first-class. Highly recommended for those who love driving in style!",
        },
        {
            id: 3,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png",
            name: "Mercedes-Benz GLC",
            company: "Luxury Wheels",
            location: "Delhi, India",
            vehicleNumber: "OD 02 1234",
            seats: 5,
            price: "13",
            rating: "4.78",
            reviews: 601,
            description:
                "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
            review: "The Mercedes-Benz GLC provides a premium driving experience with top-notch safety features and luxurious interiors. It's perfect for both city commuting and highway cruising, offering a smooth and quiet ride.",
        },
        {
            id: 4,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-4.png",
            name: "Hyundai Creta SX",
            company: "Smart Rentals",
            vehicleNumber: "OD 02 1234",
            location: "Bangalore, Karnataka",
            seats: 5,
            price: "10",
            rating: "4.65",
            reviews: 482,
            description:
                "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
            review: "The Hyundai Creta SX is an excellent choice for those looking for a reliable and stylish SUV. It has a powerful engine, good mileage, and an infotainment system that keeps you entertained on the go.",
        },
        {
            id: 5,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
            name: "Toyota Fortuner",
            company: "Elite Cars",
            location: "Chennai, Tamil Nadu",
            vehicleNumber: "OD 02 1234",
            seats: 7,
            price: "14",
            rating: "4.90",
            reviews: 715,
            description:
                "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
            review: "The Toyota Fortuner is the ultimate SUV for adventure lovers. It offers a commanding driving position, a spacious cabin, and excellent off-road capabilities. A great choice for family trips and rugged terrains!",
        },
        {
            id: 6,
            image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
            name: "Audi A3 1.6 TDI S line",
            company: "Sahu Express",
            location: "Bhubaneswar, Odisha",
            vehicleNumber: "OD 02 1234",
            seats: 7,
            price: "12",
            rating: "4.92",
            reviews: 672,
            description:
                "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
            review: "The Audi A3 provides a premium experience with smooth acceleration and a well-designed interior. It's an excellent choice for those looking for a combination of performance and elegance.",
        },
    ];

    return (
        <div className="col-span-3 sm:translate-x-5 -translate-x-3">
            {cars.map((car, index) => (
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
                                src={car.image}
                                alt={car.name}
                                className="w-auto lg:h-64 sm:h-40 h-32 object-fit xl:mr-20 sm:mr-8 mr-3 rounded-lg"
                            />
                        </div>

                        {/* deatils */}
                        <div className="lg:mt-2 sm:translate-x-0 translate-x-6">
                            <h2 className="lg:text-2xl sm:text-base truncate text-xs font-bold">
                                {car?.name}
                            </h2>
                            <p className="text-gray-400 lg:text-lg sm:text-sm text-[10px]">
                                - By {car?.company}
                            </p>

                            {/* rating */}
                            <div className="flex mt-1 bg-black w-fit gap-1 rounded-xl lg:text-sm sm:text-xs text-[8px] lg:p-2 sm:p-1.5 py-1 px-1.5">
                                <FaStar className="lg:size-4 sm:size-3 size-2.5 text-[#00E1FF]" />
                                <span className="lg:text-sm sm:text-[10px]">
                                    4.92{" "}
                                </span>
                                <span className="text-white/50 lg:text-sm sm:text-[10px] text-[8px]">
                                    ({car.reviews} reviews)
                                </span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center lg:text-base text-gray-400 sm:text-xs text-[10px] mt-1">
                                <FaMapMarkerAlt className="mr-1" />
                                <span className="truncate">
                                    {car?.location}
                                </span>
                            </div>

                            {/* Features */}
                            <div className="flex items-center lg:gap-16 sm:gap-8 gap-4 text-gray-300 lg:mt-3 sm:mt-1 mt-0.5">
                                <div className="flex lg:text-base sm:text-sm text-[10px] items-center">
                                    <FaUserFriends className="mr-1" />
                                    <span>{car?.seats} seats</span>
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
                                        ₹{car?.price}/km
                                    </span>
                                </p>
                                <button onClick={() => navigate('/booking')} className="bg-[#00E1FF] cursor-pointer lg:text-sm sm:text-xs text-[8px] hover:bg-gray-700 text-black lg:px-4 sm:px-2.5 px-1.5 lg:py-2 py-1 rounded-lg font-semibold">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ListCard;
