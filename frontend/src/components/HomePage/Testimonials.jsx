import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "react-awesome-reveal";
import FadeContent from "../animation/FadeContent";

const testimonials = [
    {
        id: 1,
        name: "Nabin Agrawal",
        role: "Student",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        review: "Easy to Understand",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        rating: "⭐⭐⭐",
    },
    {
        id: 2,
        name: "Jane Doe",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        review: "Highly Recommend",
        text: "Great service and an amazing experience overall!",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        id: 3,
        name: "John Smith",
        role: "Developer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        review: "Very Helpful",
        text: "This platform has helped me a lot in learning new things.",
        rating: "⭐⭐⭐⭐",
    },
    {
        id: 4,
        name: "Jane Doe",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        review: "Highly Recommend",
        text: "Great service and an amazing experience overall!",
        rating: "⭐⭐⭐⭐⭐",
    },
];

const TestimonialSlider = () => {
    return (
        <div className="relative bg-cover bg-center py-10">
            
            {/* testimonials */}
            <Slide direction="up" duration={500} triggerOnce>
                <div className="relative mb-2 lg:mb-5 xl:mx-24 xl:w-[220px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[120px] flex items-center justify-center bg-black text-white lg:py-3 sm:py-2 py-1 rounded-full border-2 border-gray-400 shadow-lg">
                    {/* Overlapping Profile Images */}
                    <div className="absolute md:left-[15px] sm:left-[10px] left-[8px] flex">
                        <img
                            src="https://carento-demo.vercel.app/assets/imgs/page/homepage1/testimonial3.png"
                            alt="User1"
                            className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 w-4 h-4 rounded-full border-2 border-white shadow-md"
                        />
                        <img
                            src="https://carento-demo.vercel.app/assets/imgs/page/homepage1/testimonial3.png"
                            alt="User2"
                            className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 w-4 h-4 rounded-full border-2 border-white shadow-md lg:-ml-3 md:-ml-2.5 -ml-2"
                        />
                        <img
                            src="https://carento-demo.vercel.app/assets/imgs/page/homepage1/testimonial3.png"
                            alt="User3"
                            className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 w-4 h-4 rounded-full border-2 border-white shadow-md md:-ml-2.5 -ml-2"
                        />
                    </div>

                    <span className="xl:text-xl lg:text-lg md:text-base sm:text-xs text-[10px] font-bold lg:ml-15 sm:ml-13 ml-10">Testimonials</span>
                </div>      
            </Slide>
            
            {/* heading */}
            <Slide direction="up" duration={1000} triggerOnce>
                <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto flex text-center">
                    <h2 className="text-white text-2xl md:text-3xl font-bold lg:mb-10 mb-5">
                        What they say about us?
                    </h2>
                </div>
            </Slide>

            {/* content */}
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    200: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 50 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                className="max-w-4xl lg:max-w-5xl xl:max-w-6xl cursor-grab mx-auto px-2"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <FadeContent 
                            blur={true} 
                            duration={200} 
                            easing="ease-out" 
                            initialOpacity={0}
                        >
                            <div className="bg-black/30 h-auto text-white lg:p-6 sm:p-5 p-4 rounded-lg shadow-lg text-xs">
                                <h3 className="font-semibold sm:text-sm md:text-base lg:text-lg text-xs line-clamp-1">
                                    {testimonial.review}
                                </h3>
                                <p className="lg:text-sm text-gray-400 sm:text-xs text-[10px] md:mt-2 sm:mt-1.5 mt-1 line-clamp-3">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center lg:gap-3 sm:gap-2 gap-1.5 sm:mt-4 mt-2">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="lg:w-12 lg:h-12 sm:w-10 sm:h-10 h-7 w-7 rounded-full sm:border-2 border-[1px] border-white"
                                    />
                                    <div>
                                        <h4 className="lg:text-lg font-bold sm:text-sm text-[11px] line-clamp-2">
                                            {testimonial.name}
                                        </h4>
                                        <p className=" lg:text-base sm:text-xs text-[9px] line-clamp-1">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <span className="ml-auto lg:text-sm sm:text-xs text-[6px]">
                                        {testimonial.rating}
                                    </span>
                                </div>
                            </div>
                        </FadeContent>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default TestimonialSlider;


