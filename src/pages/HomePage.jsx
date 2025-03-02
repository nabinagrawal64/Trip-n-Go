import "../styles.css"; 
import { Calendar, CircleCheck, Search } from "lucide-react";
// import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";
import LogoWall from '../components/HomePage/LogoWall';
import { useDarkMode } from '../components/DarkModeProvider'
import Card from "../components/HomePage/Card";
import FadeContent from '../components/animation/FadeContent'
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import ServiceCard from "../components/HomePage/Service";
import CountUp from "../components/animation/Counter";
import TestimonialSlider from "../components/HomePage/Testimonials";
import { useState } from "react";
import { useNavigate } from "react-router";

const logoImgs = [
    // auto
    { imgUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yOCAyNi41YTEuNSAxLjUgMCAxIDEtMyAwYTEuNSAxLjUgMCAwIDEgMyAwIi8+PHBhdGggZD0iTTkuOTIgNmMtMS4xNSAwLTIuMTguNzQtMi41NCAxLjgzYy0uMDMuMDguMDMuMTcuMTIuMTdoMi4xNDhsLTIuMzI2IDdoLS4wMDhsLS4zMzQgMWguMDFsLS4wNS4xNDdsLS4wMDYuMDIzbC0uMjQ0LjczYTUuMzMgNS4zMyAwIDAgMC0uMDYxIDMuMTc4Yy0uMzczLjE0Ni0uNjM5LjUxLS42MzkuOTMydi41MThBNC41IDQuNSAwIDAgMCAyIDI1LjgzYzAgLjA5LjA3LjE3LjE3LjE3aC44NjVhMy41IDMuNSAwIDEgMCA2LjkzNS45NmwuMDIuMDRoMTMuMDM1YTMuNTAxIDMuNTAxIDAgMSAwIDUuOTY1LTIuOTVWMjNjLS41NSAwLTEtLjQ1LTEtMXYtMS42OWMwLS4xNy4xNC0uMzEuMzEtLjMxaC43di0xaC0uMDA0di04LjA3QzI5LjAwNiA4LjIxIDI2Ljc4IDYgMjQuMDYgNnptLjc4MiAySDExdjQuNjdDMTEgMTMuOTYgOS45NiAxNSA4LjY3IDE1aC0uMjk1ek0yMy45OCA4djExaC0xLjUyYy0uODEgMC0xLjQ3LjY2LTEuNDcgMS40N1YyNGgtMlY4em0tMTEgMGg1LjAxdjExaC0xLjUzYy0uODEgMC0xLjQ3LjY2LTEuNDcgMS40N1YyNGgtMnYtOGgtLjAxek00IDI2LjVxMC0uMjU3LjA1LS41aDEuMDM1YTEuNSAxLjUgMCAxIDAgMi44MyAwSDguOTVxLjA1LjI0My4wNS41YTIuNSAyLjUgMCAwIDEtNSAwbTIuOTktMy40OHYtMy4wMUg4LjVjLjgzIDAgMS41MS42NyAxLjUxIDEuNTFjLS4wMS44Mi0uNjggMS41LTEuNTEgMS41ek0yNi40OSAyOWEyLjUgMi41IDAgMSAxIDAtNWEyLjUgMi41IDAgMCAxIDAgNSIvPjwvZz48L3N2Zz4=", altText: "React Bits Logo", name: "Auto" },

    // car
    { imgUrl: "https://cdn-icons-png.flaticon.com/512/89/89102.png", altText: "React Bits Logo", name: "Car" },
    
    // cab mini
    { imgUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNXEtLjAxNi0uMDA1LS4wMjQuMDA1bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdxLS4wMDQtLjAxNi0uMDE3LS4wMThtLjI2NS0uMTEzbC0uMDEzLjAwMmwtLjE4NS4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwN2wuMjAxLjA5M3EuMDE5LjAwNS4wMjktLjAwOGwuMDA0LS4wMTRsLS4wMzQtLjYxNHEtLjAwNS0uMDE4LS4wMi0uMDIybS0uNzE1LjAwMmEuMDIuMDIgMCAwIDAtLjAyNy4wMDZsLS4wMDYuMDE0bC0uMDM0LjYxNHEuMDAxLjAxOC4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwNC0uMDExbC4wMTctLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDF6Ii8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTUuNzY0IDRhMyAzIDAgMCAxIDIuNjgzIDEuNjU4bDEuMzgzIDIuNzY1Yy4yNDQtLjEuNDg3LS4yMDEuNzIzLS4zMThhMSAxIDAgMCAxIC44OTQgMS43OWMtLjQ5NC4yNDYtLjcyLjMyMi0uNzIuMzIybC45NTYgMS45MTNjLjIwOS40MTcuMzE3Ljg3Ni4zMTcgMS4zNDJWMTZhMyAzIDAgMCAxLTEgMi4yMzZWMTkuNWExLjUgMS41IDAgMCAxLTMgMFYxOUg2di41YTEuNSAxLjUgMCAwIDEtMyAwdi0xLjI2NGMtLjYxNC0uNTUtMS0xLjM0OC0xLTIuMjM2di0yLjUyOGEzIDMgMCAwIDEgLjMxNy0xLjM0MWwuOTU2LTEuOTE0YTE0IDE0IDAgMCAxLS43MTgtLjMyMWExIDEgMCAwIDEtLjQ1LTEuMzQzYTEuMDEgMS4wMSAwIDAgMSAxLjM0Ny0uNDQ1cS4zNTQuMTcuNzE4LjMxNWwxLjM4My0yLjc2NUEzIDMgMCAwIDEgOC4yMzYgNFptMy4wNyA2LjkwNEMxNy4xMzQgMTEuNDQxIDE0LjcxNSAxMiAxMiAxMnMtNS4xMzQtLjU2LTYuODM0LTEuMDk2bC0xLjA2IDIuMTJhMSAxIDAgMCAwLS4xMDYuNDQ4VjE2YTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMXYtMi41MjhhMSAxIDAgMCAwLS4xMDYtLjQ0N2wtMS4wNi0yLjEyWk03LjUgMTNhMS41IDEuNSAwIDEgMSAwIDNhMS41IDEuNSAwIDAgMSAwLTNtOSAwYTEuNSAxLjUgMCAxIDEgMCAzYTEuNSAxLjUgMCAwIDEgMC0zbS0uNzM2LTdIOC4yMzZhMSAxIDAgMCAwLS44OTQuNTUzTDYuMDcyIDkuMDlDNy42MiA5LjU1NSA5LjcwNiAxMCAxMiAxMHM0LjM4LS40NDUgNS45MjctLjkxbC0xLjI2OS0yLjUzN0ExIDEgMCAwIDAgMTUuNzY0IDYiLz48L2c+PC9zdmc+", altText: "React Bits Logo", name: 'Can Mini' },

    // bike
    { imgUrl: "https://cdn-icons-png.flaticon.com/512/26/26969.png", altText: "React Bits Logo", name: "Bike" },

    // bus
    { imgUrl: "https://cdn-icons-png.flaticon.com/512/2207/2207497.png", altText: "React Bits Logo", name: "Bus" },

    // taxi
    { imgUrl: "https://cdn-icons-png.flaticon.com/512/7695/7695199.png ", altText: "React Bits Logo", name: "Taxi" },
];

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
        description: "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
        review: "The Audi A3 offers an incredibly smooth and comfortable ride with a touch of luxury. The interiors are spacious, and the fuel efficiency is impressive for a car of this class. A great choice for city drives and long road trips!"
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
        description: "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
        review: "The BMW X5 M Sport is a powerhouse on the road. It combines performance with comfort seamlessly. The handling is exceptional, and the premium features make every ride feel first-class. Highly recommended for those who love driving in style!"
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
        description: "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
        review: "The Mercedes-Benz GLC provides a premium driving experience with top-notch safety features and luxurious interiors. It's perfect for both city commuting and highway cruising, offering a smooth and quiet ride."
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
        description: "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
        review: "The Hyundai Creta SX is an excellent choice for those looking for a reliable and stylish SUV. It has a powerful engine, good mileage, and an infotainment system that keeps you entertained on the go."
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
        description: "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
        review: "The Toyota Fortuner is the ultimate SUV for adventure lovers. It offers a commanding driving position, a spacious cabin, and excellent off-road capabilities. A great choice for family trips and rugged terrains!"
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
        description: "Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.",
        review: "The Audi A3 provides a premium experience with smooth acceleration and a well-designed interior. It's an excellent choice for those looking for a combination of performance and elegance."
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

export default function HomePage() {
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();

    const getFormattedDateTime = () => {
        const now = new Date();
        return now.toISOString().slice(0, 16); // Removes seconds and milliseconds
    };

    const [endDateTime, setEndDateTime] = useState(getFormattedDateTime());
    const [startDateTime, setStartDateTime] = useState(getFormattedDateTime());

    //eslint-disable-next-line
    function Feature({ text }) {
        return (
            <div className="flex items-center text-gray-300 text-sm">
                <CircleCheck className="text-[#00E1FF] mr-2" />
                <span className="md:text-base text-sm truncate">{text}</span>
            </div>
        );
    }

    // const endTime = endDateTime.slice(11,16);
    // const startDate = startDateTime.slice(0,10);
    // const startTime = startDateTime.slice(11,16);
    // const endDate = endDateTime.slice(0,10);

    return (
        <div className="relative w-full flex flex-col bg-black/80">
            {/* Background Image */}
            <div
                className="relative h-screen bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: "url('./bgi.png')" }}
            >

                {/* Navbar */}
                <div > <Navbar /> </div>
                
                {/* text section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative inset-x-0 flex flex-col transition-all duration-300 ease-in-out mx-10 sm:mx-12 md:mx-16 lg:mx-24 xl:mx-40 md:mt-36 mt-16"
                >
                    {/* Subtitle */}
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className={`sm:text-lg text-sm md:text-xl font-semibold mb-2 ${darkMode ? "text-cyan-400" : "text-blue-600"}`}
                    >
                        Find Your Perfect Car
                    </motion.h4>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className={`font-bold leading-tight ${darkMode ? "text-white" : "text-gray-900"} 
                            sm:text-3xl text-2xl md:text-4xl lg:text-5xl xl:text-6xl`}
                    >
                        Looking for a vehicle? <br /> You’re in the perfect spot.
                    </motion.h1>

                    {/* Feature List */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                        className="flex md:flex-row flex-col font-base lg:mx-4 sm:mx-3 mx-2 gap-4 sm:gap-2 lg:gap-5 xl:gap-18 mt-6 w-full max-w-3xl"
                    >
                        {[
                            "High quality at a low cost.",
                            "Premium services.",
                            "24/7 roadside support."
                        ].map((text, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex items-center md:gap-1 gap-2 text-white/90"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 * index }}
                                >
                                    <CircleCheck className="text-cyan-400 w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                                </motion.div>
                                <h3 className="xl:text-[15px] lg:text-[13px] md:text-[10px] text-[13px]">{text}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Search Section */} 
                <Fade blur={true} duration={5000} triggerOnce easing="ease-out" initialOpacity={0}>               
                <div className={`flex sm:flex-row flex-col xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[500px] w-[300px] items-center lg:gap-8 md:gap-4 sm:gap-3 gap-2 absolute sm:bottom-[4%] bottom-[12%] inset-x-0 mx-auto ${darkMode ? "bg-black" : "bg-gray-400"} rounded-xl shadow-lg  xl:px-20 lg:px-16 md:px-12 sm:px-10 px-5 py-6 xl:py-8 lg:py-7 md:py-6 sm:py-5  transition-all duration-300 ease-in-out`}>
                    {/* Start Date */}
                    <div className="flex flex-col w-full sm:w-auto">
                        <label htmlFor="start-date-time" className={`${darkMode ? "text-gray-400" : "text-gray-700"} md:text-sm text-xs mb-1`}>Start Date & Time</label>
                        <div className="flex items-center bg-gray-900 lg:px-4 sm:px-3 px-2 py-2 rounded-lg">
                            <Calendar className="text-gray-400 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 lg:h-4.5 lg:w-4.5" size={18} />
                            <input 
                                id="start-date-time"
                                type="datetime-local"
                                value={startDateTime}
                                onChange={(e) => setStartDateTime(e.target.value)} 
                                className="bg-transparent text-white lg:text-sm text-xs outline-none lg:ml-2 ml-1"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={`hidden sm:block sm:items-center w-[2px] h-12 ${darkMode ? "bg-white/50" : "bg-black/50"}`}></div>

                    {/* End Date */}
                    <div className="flex flex-col w-full sm:w-auto">
                        <label htmlFor="end-date-time" className={`${darkMode ? "text-gray-400" : "text-gray-700"} md:text-sm text-xs mb-1`}>
                            Select End Date & Time
                        </label>
                        <div className={`flex items-center ${darkMode ? "bg-gray-900" : "bg-black/45"} lg:px-4 sm:px-3 px-2 py-2 rounded-lg`}>
                            <Calendar className={`${darkMode ? "text-gray-400" : "text-gray-800"} h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 lg:h-4.5 lg:w-4.5`} size={18} />
                            
                            <input
                                id="end-date-time"
                                type="datetime-local"
                                value={endDateTime}
                                onChange={(e) => setEndDateTime(e.target.value)}
                                className="bg-transparent text-white lg:text-sm text-xs outline-none lg:ml-2 ml-1"
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <button 
                        className={`flex items-center ${darkMode ? "bg-[#00E1FF]" : "bg-[#0f75b9]"} text-black w-full sm:w-auto lg:mt-5 mt-4 font-semibold xl:px-6 xl:py-4 lg:px-4 lg:py-3 sm:py-2     sm:px-2 px-2 py-2 rounded-lg ml-auto cursor-pointer hover:bg-[#00BFD8] transition-all`}
                        onClick={() => navigate('/search')}
                    >
                        <Search className="sm:h-auto sm:w-auto h-5 w-5 mr-1 sm:mr-2" />
                        <span className="text-xs lg:text-[14px]">Find a Vehicle</span>
                    </button>
                </div>
                </Fade>
            </div>

            {/* Categories Section */}
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="bg-[#313131] w-full sm:pb-24 md:pb-28 pb-20 pt-10 flex flex-col items-start xl:px-28 lg:px-16 md:px-8 sm:px-4 px-2 overflow-hidden transition-all duration-300 ease-in-out">
                {/* Title */}
                <h2 className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold px-32 sm:px-5 self-start">Categories</h2>
                <p className="text-gray-400/60 pl-[108px] sm:px-5 lg:text-sm text-xs mt-2 self-start">
                    High quality at a low cost.
                </p>

                <div className="sm:h-[100px] h-[50px] w-full relative">
                    <LogoWall
                        items={logoImgs}
                        direction='horizontal'
                        pauseOnHover={true}
                        size='clamp(8rem, 1rem + 20vmin, 25rem)'
                        duration='15s'
                        bgColor='#060606'
                        bgAccentColor='#111111'
                    />  
                </div>
            </div>
            </FadeContent>

            {/* Cars Section */}
            <div className="flex flex-col bg-[#221f1f] py-5">
                <Slide direction="up" triggerOnce>
                    <div className="pb-10 flex flex-col items-start lg:px-20 md:px-12 sm:px-10 pl-20 xl:px-32 overflow-hidden transition-all duration-300 ease-in-out">
                        <h2 className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold self-start">Most Searched Vehicles</h2>
                        <p className="text-gray-400/60 lg:text-sm text-xs mt-2 sm:self-start sm:px-0 px-12">
                            High quality at a low cost.
                        </p>
                    </div>
                </Slide>
                
                <div className="gap-y-6 ml-5 sm:ml-10 lg:ml-20 xl:ml-32 grid grid-cols-3 items-center justify-center">
                    {cars.map((car) => (
                        <FadeContent 
                            key={car.id} 
                            blur={true} 
                            duration={1200} 
                            easing="ease-out" 
                            initialOpacity={0}
                        >
                            <Card car={car} />
                        </FadeContent>
                    ))}
                </div>
            </div>

            {/* Car rental offer images */}
            <div className="bg-[#313131] text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-evenly xl:gap-40 gap-10">
                {/* Left Side - Video Image */}
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className="relative max-w-sm md:max-w-md rounded-lg overflow-hidden">
                        <img
                            src="https://carento-demo.vercel.app/assets/imgs/cta/cta-1/video.png"
                            alt="Car Deal Video"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <button className="bg-blue-400 px-3 py-2 rounded-full">
                                ▶
                            </button>
                        </div>
                    </div>
                </FadeContent>

                {/* Right Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0.2, y: 30 }} // Start slightly visible & lower
                    animate={{ opacity: 1, y: 0 }} // Move up and fully visible
                    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth effect
                >
                    <div className="max-w-lg text-center md:text-left">
                        <Slide direction="up" duration={500} triggerOnce>
                            <span className="bg-white text-black px-4 py-1 rounded-lg md:text-sm sm:text-xs text-[10px] font-semibold">
                                Best Vehicle Rental System
                            </span>
                        </Slide>

                        <Slide direction="up" duration={1000} triggerOnce>
                            <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold md:mt-4 mt-3">
                                Receive a Competitive Offer Sell Your Car to Us Today.
                            </h2>
                        </Slide>

                        <Slide direction="up" duration={1500} triggerOnce>
                            <p className="text-gray-400 lg:text-base sm:text-[14px] text-[12px] mt-3">
                                We are committed to delivering exceptional service, competitive pricing, and a diverse selection of options for our customers.
                            </p>
                        </Slide>

                        {/* Features List */}
                        <Slide direction="up" duration={2000} triggerOnce>
                            <div className="grid grid-cols-2 gap-2 mt-6">
                                <Feature text="Expert Certified Mechanics" />
                                <Feature text="First Class Services" />
                                <Feature text="Get Reasonable Price" />
                                <Feature text="24/7 road assistance" />
                                <Feature text="Genuine Spares Parts" />
                                <Feature text="Free Pick-Up & Drop-Offs" />
                            </div>
                        </Slide>
                    </div>
                </motion.div>
            </div>

            {/* Car Rental Experience */}
            <div className="relative bg-cover bg-center max-w-[85%] mx-auto my-10 rounded-2xl text-white py-16 px-8" style={{ backgroundImage: "url('/images/experience-bg.png')" }}>
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
                        className="md:text-4xl text-2xl sm:text-3xl font-bold mt-2"
                    >
                        Presenting Your New Go-To Car Rental Experience
                    </motion.h2>
                </div>
                {/* Logo */}
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-8 mt-12 text-center">
                    <div>
                        <div className="lg:text-3xl text-xl">📍</div>
                        <h3 className="font-bold mt-4 md:text-base sm:text-sm text-[10px]">Choose a Location</h3>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Select the ideal destination to begin your journey with ease.</p>
                    </div>
                    <div>
                        <div className="lg:text-3xl text-xl">🚗</div>
                        <h3 className="font-bold mt-4 md:text-base sm:text-sm text-[10px]">Choose Your Vehicle</h3>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Browse our fleet and find the perfect car for your needs.</p>
                    </div>
                    <div>
                        <div className="lg:text-3xl text-xl">✅</div>
                        <h3 className="font-bold mt-4 md:text-base sm:text-sm text-[10px]">Verification</h3>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-gray-300 line-clamp-2">Review your information and confirm your booking.</p>
                    </div>
                    <div>
                        <div className="lg:text-3xl text-xl">🏁</div>
                        <h3 className="font-bold mt-4 md:text-base sm:text-sm text-[10px]">Begin Your Journey</h3>
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
                            className="lg:text-3xl sm:text-2xl text-xl font-bold"
                        />
                        <span className="font-bold lg:text-3xl sm:text-2xl text-xl ">{" "}+</span>
                        <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Global Branches</p>
                    </div>

                    <div>
                        <CountUp
                            from={1}
                            to={29}
                            separator=","
                            direction="up"
                            duration={1}
                            className="lg:text-3xl sm:text-2xl text-xl font-bold"
                        />
                        <span className="font-bold lg:text-3xl sm:text-2xl text-xl ">K</span>
                        <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Destinations Collaboration</p>
                    </div>

                    <div>
                        <CountUp
                            from={1}
                            to={50}
                            separator=","
                            direction="up"
                            duration={1}
                            className="lg:text-3xl sm:text-2xl text-xl font-bold"
                        />
                        <span className="font-bold lg:text-3xl sm:text-2xl text-xl">+</span>
                        <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Years Experience</p>
                    </div>

                    <div>
                        <CountUp
                            from={1}
                            to={168}
                            separator=","
                            direction="up"
                            duration={1}
                            className="lg:text-3xl sm:text-2xl text-xl font-bold"
                        />
                        <span className="font-bold lg:text-3xl sm:text-2xl text-xl">K</span>
                        <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">Happy Customers</p>
                    </div>
                </div>
            </div>
                    
            {/* services */}
            <section className="bg-[#111] text-white py-12 lg:px-36 md:px-24 sm:px-16 px-12">
                <Slide direction="up" triggerOnce>
                    <div className="text-center mb-8">
                        <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold">Our Services</h2>
                        <p className="text-gray-400 sm:text-base text-sm md:text-lg">
                            Serving You with Quality, Comfort, and Convenience
                        </p>
                    </div>
                </Slide>

                <div className="grid sm:grid-cols-4 grid-cols-2 gap-10">
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

            {/* Testimonials */}
            <section className="w-full sm:px-20 px-10 h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/testimonialbg.png')" }}>
                <TestimonialSlider />
            </section>
            
            {/* Advertise */}
            <section className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/busBg.png')" }}>
                <div className="relative w-full bg-gradient-to-r from-[#073C6D] to-[#32E3FB] py-10 px-5 md:px-16 flex flex-col md:flex-row items-center justify-between text-white">
                    {/* Text Section */}
                    <Slide direction="up" triggerOnce>
                        <div className="text-center xl:px-28 lg:px-16 md:px-10 px-10 md:text-left max-w-5xl">
                            <h2 className="text-2xl lg:text-3xl xl:text-[32px] font-bold">
                                Trip & go App is Available
                            </h2>
                            <p className="text-sm md:text-[15px] lg:text-base mt-2">
                                Manage all your vehicle rentals on the go with Trip & go app
                            </p>

                            {/* Store Buttons */}
                            <div className="flex justify-center md:justify-start mt-4 space-x-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                                    alt="Google Play"
                                    className="lg:h-12 h-10 cursor-pointer"
                                />
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="lg:h-12 h-10 cursor-pointer"
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
    );
}


