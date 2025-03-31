import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar, FaTaxi, FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import ServiceCard from "../../HomePage/Service";
import FadeContent from "../../animation/FadeContent";
import CountUp from "../../animation/Counter";

// import Navbar from "../../common/Navbar";

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

const services = [
    {
        id: 1,
        title: "Bhubaneswar",
        properties: "356 Properties",
        image: "https://carento-demo.vercel.app/assets/imgs/services/services-1/img-1.png",
    },
    {
        id: 2,
        title: "Cuttack",
        properties: "356 Properties",
        image: "https://carento-demo.vercel.app/assets/imgs/services/services-1/img-2.png",
    },
    {
        id: 3,
        title: "Puri",
        properties: "356 Properties",
        image: "https://carento-demo.vercel.app/assets/imgs/services/services-1/img-3.png",
    },
    {
        id: 4,
        title: "Berhampur",
        properties: "356 Properties",
        image: "https://carento-demo.vercel.app/assets/imgs/services/services-1/img-4.png",
    },
];

const Home = () => {

    const [visibleCount, setVisibleCount] = useState(3);

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, reviews.length));
    };

    return (
        <div className="bg-[#0B1120] flex flex-col justify-start items-start text-white lg:pl-[255px] sm:pl-[200px]">

            {/* <div><Navbar /></div> */}
            <div className="xl:p-8 p-6 lg:space-y-10 space-y-6">
                {/* top section */}
                <section>
                    <h2 className="lg:text-4xl text-xl font-bold flex sm:justify-start justify-center">Hi, Satish!</h2>
                    <h1 className="lg:text-4xl text-xl font-extrabold lg:mt-2 mt-1.5 sm:text-start text-center">
                        What do you want to <span className="text-cyan-400">learn</span> today?
                    </h1>
                    <p className="text-gray-400 lg:mt-4 mt-3 text-wrap md:text-base text-sm sm:text-start text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, assumenda.
                    </p>
                    <div className="lg:mt-6 mt-4 lg:px-6 px-3 lg:py-3 py-2 sm:mx-0 mx-2 md:text-sm text-xs flex items-center lg:gap-2 gap-1.5 w-fit bg-cyan-400 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-300 transition cursor-pointer">
                        <Plus className="lg:size-5 size-4 font-semibold" /> Add More Vehicles
                    </div>
                </section>

                {/* most booked vehicle */}
                <section>
                    <h2 className="lg:text-2xl text-base font-bold lg:my-3 my-2">Most Booked Vehicle</h2>
                    
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            200: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            1024: { slidesPerView: 2, spaceBetween: 20 },
                        }}
                        className="max-w-[300px] lg:max-w-[720px] xl:max-w-[1200px] cursor-grab mx-auto"
                    >
                        {cars.map((car, index) => (
                            <SwiperSlide key={car.id}>
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center pt-2 xl:gap-x-10 sm:gap-x-5 rounded-lg shadow-md"
                                >
                                    {/* Car Details */}
                                    <div className="lg:p-4 flex gap-2 p-2.5 mt-1 sm:mt-2 xl:tracking-widest bg-[#292929] rounded-2xl">
                                        {/* Car Image */}
                                        <div>
                                            <img src={car.image}
                                                alt={car.name}
                                                className="w-auto xl:h-40 lg:h-30 sm:h-26 h-[90px] object-fit mr-5 rounded-lg"
                                            />
                                        </div>

                                        {/* deatils */}
                                        <div className="lg:mt-2 sm:translate-x-0">
                                            <h2 className="xl:text-2xl sm:text-base truncate text-xs font-bold"> {car?.name} </h2>

                                            {/* rating */}
                                            <div className="flex bg-black w-fit gap-1 rounded-xl lg:text-sm sm:text-xs xl:p-2 sm:p-1.5 py-1 px-2 mt-1">
                                                <FaStar className="xl:size-4 sm:size-3 size-2.5 text-[#00E1FF]" />
                                                <span className="xl:text-sm sm:text-[10px] text-[8px]">
                                                    4.92{" "}
                                                </span>
                                                <span className="text-white/50 xl:text-sm sm:text-[10px] text-[8px]">
                                                    ({car.reviews} reviews)
                                                </span>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center xl:text-base text-gray-400 sm:text-xs truncate text-[10px] mt-1">
                                                <FaMapMarkerAlt className="mr-1" />
                                                <span className="truncate">
                                                    {car?.location}
                                                </span>
                                            </div>

                                            {/* Features */}
                                            <div className="flex items-center xl:gap-16 sm:gap-8 gap-4 text-gray-300 lg:mt-3 sm:mt-1 mt-1">
                                                <div className="flex xl:text-base sm:text-sm text-[9px] items-center">
                                                    <FaUserFriends className="mr-1" />
                                                    <span>{car?.seats} seats</span>
                                                </div>
                                                <div className="flex xl:text-base sm:text-xs text-[9px] items-center">
                                                    <FaTaxi className="mr-1" />
                                                    <span>Cab</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                
                {/* most popular reviews */}
                <section>
                    <h2 className="lg:text-2xl text-base font-bold lg:my-3 my-2">Most Booked Reviews</h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className=" lg:py-5 py-3 text-white rounded-lg mx-auto w-full"
                    >
                        {/* Reviews Section */}
                        <div className="">
                            {reviews.slice(0, visibleCount).map((review, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-lg lg:p-6 p-4 w-full"
                                >
                                    <div className="rounded-lg flex justify-between">
                                        {/* profile image */}
                                        <div className="flex items-start">
                                            <motion.img
                                                src={review.image}
                                                alt="Profile"
                                                className="xl:size-16 lg:size-[60px] sm:size-12 size-10 rounded-full"
                                                initial={{ scale: 0.8 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>

                                        {/* reviewers name and details */}
                                        <div className="flex flex-col lg:mx-5 mx-3">
                                            <div className="flex gap-3 mt-0.5">
                                                <p className="font-bold lg:text-lg sm:text-base text-xs">{review.reviewer}</p>
                                                <p className="text-gray-400 lg:text-base sm:text-xs lg:mt-0.5 sm:mt-[5px] mt-0.5 text-[10px]">{review.date}</p>
                                            </div>
                                            {/* Review Text */}
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="text-gray-300 lg:text-base md:text-xs sm:text-[10px] text-[10px] leading-relaxed xl:max-w-4xl lg:max-w-xl md:max-w-sm sm:max-w-[200px] max-w-[300px]"
                                            >
                                                {review.comment}
                                            </motion.p>
                                        </div>

                                        {/* car image */}
                                        <div>
                                            <motion.img
                                                src={cars[index].image}
                                                alt="Profile"
                                                className="xl:size-36 lg:size-32 md:size-28 sm:size-[100px] size-[90px] rounded-xl "
                                                initial={{ scale: 0.8 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
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
                </section>

                {/* Car Rental Experience */}
                <div className="relative bg-cover bg-center max-w-[95%] mx-auto my-10 rounded-2xl text-white py-16 px-8" style={{ backgroundImage: "url('/images/experience-bg.png')" }}>
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="md:text-sm text-xs uppercase tracking-widest"
                        >
                            How It Works
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="lg:text-3xl text-xl sm:text-2xl font-bold mt-2"
                        >
                            Presenting Your New Go-To Car Rental Experience
                        </motion.h2>
                    </div>

                    {/* Logo */}
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-8 mt-12 text-center">
                        <div>
                            <div className="lg:text-3xl text-xl">📍</div>
                            <h3 className="font-bold mt-4 lg:text-base sm:text-sm text-[10px]">Choose a Location</h3>
                            <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Select the ideal destination to begin your journey with ease.</p>
                        </div>
                        <div>
                            <div className="lg:text-3xl text-xl">🚗</div>
                            <h3 className="font-bold mt-4 lg:text-base sm:text-sm text-[10px]">Choose Your Vehicle</h3>
                            <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Browse our fleet and find the perfect car for your needs.</p>
                        </div>
                        <div>
                            <div className="lg:text-3xl text-xl">✅</div>
                            <h3 className="font-bold mt-4 lg:text-base sm:text-sm text-[10px]">Verification</h3>
                            <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Review your information and confirm your booking.</p>
                        </div>
                        <div>
                            <div className="lg:text-3xl text-xl">🏁</div>
                            <h3 className="font-bold mt-4 lg:text-base sm:text-sm text-[10px]">Begin Your Journey</h3>
                            <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Start your adventure with confidence and ease.</p>
                        </div>
                    </div>
                    
                    {/* Experience */}
                    <div className="grid sm:grid-cols-4 grid-cols-2 text-center sm:gap-5 gap-4 mt-16">
                        <div>
                            <CountUp
                                from={0}
                                to={45}
                                separator=","
                                direction="up"
                                duration={1}
                                className="lg:text-3xl sm:text-xl text-lg font-bold"
                            />
                            <span className="font-bold lg:text-3xl sm:text-xl text-lg ">{" "}+</span>
                            <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Global Branches</p>
                        </div>

                        <div>
                            <CountUp
                                from={1}
                                to={29}
                                separator=","
                                direction="up"
                                duration={1}
                                className="lg:text-3xl sm:text-xl text-lg font-bold"
                            />
                            <span className="font-bold lg:text-3xl sm:text-xl text-lg ">K</span>
                            <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Destinations Collaboration</p>
                        </div>

                        <div>
                            <CountUp
                                from={1}
                                to={50}
                                separator=","
                                direction="up"
                                duration={1}
                                className="lg:text-3xl sm:text-xl text-lg font-bold"
                            />
                            <span className="font-bold lg:text-3xl sm:text-xl text-lg">+</span>
                            <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Years Experience</p>
                        </div>

                        <div>
                            <CountUp
                                from={1}
                                to={168}
                                separator=","
                                direction="up"
                                duration={1}
                                className="lg:text-3xl sm:text-xl text-lg font-bold"
                            />
                            <span className="font-bold lg:text-3xl sm:text-xl text-lg">K</span>
                            <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Happy Customers</p>
                        </div>
                    </div>
                </div>
                        
                {/* services */}
                <section className="bg-[#111] w-[95%] mx-auto text-white py-12 lg:px-10 sm:px-8 px-6">
                    <Slide direction="up" triggerOnce>
                        <div className="text-center space-y-1 mb-8">
                            <h2 className="sm:text-2xl text-2xl lg:text-4xl font-bold">Our Services</h2>
                            <p className="text-gray-400 sm:text-sm text-xs lg:text-base">
                                Serving You with Quality, Comfort, and Convenience
                            </p>
                        </div>
                    </Slide>

                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
                        {services.map((service) => (
                            <FadeContent 
                                key={service.id} 
                                blur={true} 
                                duration={1200} 
                                easing="ease-out" 
                                initialOpacity={0}
                            >
                                <ServiceCard 
                                    key={service.id} 
                                    service={service} 
                                />
                            </FadeContent>
                        ))}
                    </div>
                </section>
                
                {/* Advertise */}
                <section className="w-[95%] mx-auto bg-cover bg-center" style={{ backgroundImage: "url('/images/busBg.png')" }}>
                    <div className="relative w-full bg-gradient-to-r from-[#073C6D] to-[#32E3FB] py-10 px-5 md:px- flex flex-col md:flex-row items-center justify-between text-white">
                        {/* Text Section */}
                        <Slide direction="up" triggerOnce>
                            <div className="text-center xl:px-10 md:px-6 px-4 md:text-left max-w-5xl">
                                <h2 className="text-xl lg:text-2xl xl:text-[32px] font-bold">
                                    Trip & go App is Available
                                </h2>
                                <p className="text-xs sm:text-sm lg:text-base mt-2">
                                    Manage all your vehicle rentals on the go with Trip & go app
                                </p>

                                {/* Store Buttons */}
                                <div className="flex justify-center md:justify-start mt-4 space-x-3">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                                        alt="Google Play"
                                        className="xl:h-12 lg:h-8 h-6 cursor-pointer"
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        className="xl:h-12 lg:h-8 h-6 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </Slide>
                        
                        {/* Images Section */}
                        <Slide direction="up" triggerOnce>
                            <div className="relative mt-8 md:mt-0 ">
                                <img
                                    src="/images/busImage.png"
                                    alt="Vehicles"
                                    className="max-w-[500px] sm:max-w-[550px] lg:max-w-[600px] xl:max-w-[500px] lg:mr-14 w-full object-contain drop-shadow-md"
                                />
                            </div>
                        </Slide>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home