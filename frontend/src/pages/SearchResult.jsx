/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import ListCard from "../components/Dashboard/ListCard";

const FilterCard = ({ title, children, onClear, onApply }) => (
    <div className="border border-gray-500 lg:p-8 sm:p-5 p-3 sm:mt-0 mt-2 rounded-lg">
        <h4 className="sm:text-base text-sm font-semibold lg:mb-8 mb-5 lg:tracking-wide ">{title}</h4>
        <div>{children}</div>
        <div className="flex lg:gap-2 sm:gap-1 lg:mt-10 mt-6 justify-between">
            <button 
                className="lg:text-sm sm:text-xs flex text-gray-400 hover:underline"
                onClick={onClear}
            >
                <X className="p-0.5 lg:size-5 sm:size-3 size-4 mr-1 mt-0.5 text-black rounded-md bg-white"/>
                <span 
                    className="lg:text-base sm:text-xs text-sm mt-[1px]"
                >
                    Clear
                </span>
            </button>
            <button 
                className="lg:text-sm text-[10px] cursor-pointer bg-[#00E1FF] lg:px-3 px-2 lg:py-1 py-0.5 rounded-md text-black"
                onClick={onApply}
            >
                Apply
            </button>
        </div>
    </div>
);

const FilterCheckbox = ({ label, checked, onChange }) => (
    <label 
        className="flex items-center gap-x-2 lg:mb-3 sm:mb-2 text-white lg:text-lg sm:text-base cursor-pointer"
    >
        <input 
            type="checkbox" 
            checked={checked}
            onChange={onChange}
            className="lg:h-5 lg:w-5 w-3 h-3 cursor-pointer border border-white bg-transparent appearance-none rounded-sm checked:bg-white checked:border-white checked:outline-none checked:after:content-['✔'] checked:after:text-black lg:checked:after:text-xl checked:after:text-xs checked:after:flex checked:after:justify-center lg:checked:after:-mt-1 checked:after:-mt-0.5  checked:after:items-center" 
        />
        <span className="lg:text-sm sm:text-xs text-[11px]">{label}</span>    
    </label>
);

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

const SearchResult = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxVisiblePages = 5;
    const totalPages = Math.ceil(cars.length / maxVisiblePages); //total card rahega yaha

    const startIdx = (currentPage - 1) * maxVisiblePages;
    const visibleCards = cars.slice(startIdx, startIdx + maxVisiblePages);

    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsOpen(false); // Close modal if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const [selectedFilters, setSelectedFilters] = useState({
        priceRange: [50, 900],
        vehicleType: [],
        rating: null,
        seatCapacity: [],
    });

    const handleClearFilters = () => {
        setSelectedFilters({
            priceRange: [50, 900],
            vehicleType: [],
            rating: null,
            seatCapacity: [],
        });
    };

    const handleApplyFilters = () => {
        console.log("Filters applied:", selectedFilters);
    };

    const toggleFilter = (category, value) => {
        setSelectedFilters((prevFilters) => {
            let updatedValues = prevFilters[category].includes(value)
                ? prevFilters[category].filter((item) => item !== value)
                : [...prevFilters[category], value];

            return { ...prevFilters, [category]: updatedValues };
        });
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getVisiblePages = () => {
        if (totalPages <= maxVisiblePages) {
            return [...Array(totalPages)].map((_, i) => i + 1);
        }

        if (currentPage <= 2) {
            return [1, 2, 3, 4, "...", totalPages];
        } else if (currentPage >= totalPages - 1) {
            return ["...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            return ["...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
        }
    };

    return (
        <div className="bg-[#171717] text-white min-h-screen p-6 ">
            {/* Header */}
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-center xl:text-3xl lg:text-2xl lg:mt-10 sm:mt-6 sm:text-lg text-sm font-semibold lg:mb-6 sm:max-w-[1000px] max-w-[220px] mx-auto"
            >
                {`Showing 1 – 24 of 11,057 results for "Cars" `}
            </motion.h2>
            
            {/* main section */}
            <div className="grid grid-cols-1 md:grid-cols-4 xl:max-w-5/6 md:max-w-11/12 mx-auto lg:gap-6 sm:gap-3">
                {/* Sidebar Filters for large screen */}
                <div className="col-span-1 sm:inline hidden space-y-6 mt-10 xl:mr-10 ">

                    {/* Calendar */}
                    <FilterCard 
                        title="Choose Date" 
                        onClear={() => setSelectedFilters({ ...selectedFilters, date: null })} 
                        onApply={handleApplyFilters}
                    >   
                        <div className="lg:space-y-3 space-y-2 lg:text-base sm:text-xs">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                type="datetime-local"
                                id="startDate"
                                value={selectedFilters.date || ""}
                                className="w-full mt-1 text-gray-300 lg:p-2 sm:p-1 rounded-md border border-gray-400 cursor-pointer"
                                onChange={(e) => setSelectedFilters({ ...selectedFilters, date: e.target.value })}
                            />
                            <label htmlFor="endDate">End Date</label>
                            <input
                                type="datetime-local"
                                id="endDate"
                                value={selectedFilters.date || ""}
                                className="w-full mt-1 text-gray-300 lg:p-2 sm:p-1 rounded-md border border-gray-400cursor-pointer"
                                onChange={(e) => setSelectedFilters({ ...selectedFilters, date: e.target.value })}
                            />
                        </div>
                    </FilterCard>

                    {/* Price Range */}
                    <FilterCard 
                        title="Price Range" 
                        onClear={handleClearFilters} 
                        onApply={handleApplyFilters}
                    >
                        <input
                            type="range"
                            min="50"
                            max="900"
                            value={selectedFilters.priceRange[1]}
                            className="w-full appearance-none h-2 rounded-lg outline-none 
                                        bg-gradient-to-l from-[#00E1FF] to-gray-700"
                            onChange={(e) =>
                                setSelectedFilters({
                                    ...selectedFilters,
                                    priceRange: [50, parseInt(e.target.value)],
                                })
                            }
                        />
                        <div className="flex justify-between text-gray-400 lg:text-sm sm:text-xs">
                            <span>$50</span>
                            <span className="relative -top-9">${selectedFilters.priceRange[1]}</span>
                            <span>$900</span>
                        </div>
                    </FilterCard>

                    {/* Vehicle Type */}
                    <FilterCard 
                        title="Vehicle Type" 
                        onClear={() => setSelectedFilters({ ...selectedFilters, vehicleType: [] })} 
                        onApply={handleApplyFilters}
                    >
                        {["Bus", "SUV", "Mini"].map((type) => (
                            <FilterCheckbox 
                                key={type} 
                                label={type} 
                                checked={selectedFilters.vehicleType.includes(type)}
                                onChange={() => toggleFilter("vehicleType", type)} 
                            />
                        ))}
                    </FilterCard>

                    {/* Rating */}
                    <FilterCard 
                        title="Rating" 
                        onClear={() => setSelectedFilters({ ...selectedFilters, rating: null })} 
                        onApply={handleApplyFilters}
                    >
                        {[5, 4, 3, 2, 1].map((stars) => (
                            <FilterCheckbox 
                                key={stars} 
                                label={
                                    <>
                                        {"⭐".repeat(stars)}
                                        {"✩ ".repeat(5 - stars)}
                                    </>
                                }
                                checked={selectedFilters.rating === stars}
                                onChange={() => setSelectedFilters({ ...selectedFilters, rating: stars })}
                            />
                        ))}
                    </FilterCard>

                    {/* Seat Capacity */}
                    <FilterCard 
                        title="Seat Capacity" 
                        onClear={() => setSelectedFilters({ ...selectedFilters, seatCapacity: [] })} 
                        onApply={handleApplyFilters}
                    >
                        {["Small", "Medium", "Large"].map((size) => (
                            <FilterCheckbox 
                                key={size} 
                                label={size} 
                                checked={selectedFilters.seatCapacity.includes(size)}
                                onChange={() => toggleFilter("seatCapacity", size)}
                            />
                        ))}
                    </FilterCard>
                </div>
                
                {/* Sidebar Filters for mobile */}
                <div className="inline sm:hidden " >
                    {/* Menu Button */}
                    <button 
                        className="absolute cursor-pointer top-6 left-6 bg-[#00E1FF] text-black p-1 rounded-md shadow-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Filter size={16} />
                    </button>

                    {/* Sidebar for mobile view */}
                    <div ref={cardRef} className={`fixed top-0 left-0 z-10 w-48 h-full bg-black p-5 py-10 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} duration-300 ease-in-out shadow-lg overflow-y-auto max-h-full scroll-smooth`}
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute cursor-pointer top-4 right-4 text-white text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                        <FilterCard 
                            title="Choose Date" 
                            onClear={() => setSelectedFilters({ ...selectedFilters, date: null })} 
                            onApply={handleApplyFilters}
                        >   
                            <div className="space-y-1.5 text-xs">
                                <label htmlFor="startDate">Start Date</label>
                                <input
                                    type="datetime-local"
                                    id="startDate"
                                    value={selectedFilters.date || ""}
                                    className="w-full mt-1 text-gray-300 p-1 rounded-md border border-gray-400 cursor-pointer"
                                    onChange={(e) => setSelectedFilters({ ...selectedFilters, date: e.target.value })}
                                />
                                <label htmlFor="endDate">End Date</label>
                                <input
                                    type="datetime-local"
                                    id="endDate"
                                    value={selectedFilters.date || ""}
                                    className="w-full mt-1 text-gray-300 p-1 rounded-md border border-gray-400cursor-pointer"
                                    onChange={(e) => setSelectedFilters({ ...selectedFilters, date: e.target.value })}
                                />
                            </div>
                        </FilterCard>

                        {/* Price Range */}
                        <FilterCard 
                            title="Price Range" 
                            onClear={handleClearFilters} 
                            onApply={handleApplyFilters}
                        >
                            <input
                                type="range"
                                min="50"
                                max="900"
                                value={selectedFilters.priceRange[1]}
                                className="w-full appearance-none h-2 rounded-lg outline-none 
                                            bg-gradient-to-l from-[#00E1FF] to-gray-700"
                                onChange={(e) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        priceRange: [50, parseInt(e.target.value)],
                                    })
                                }
                            />
                            <div className="flex justify-between text-gray-400 text-xs">
                                <span>$50</span>
                                <span className="relative -top-9">${selectedFilters.priceRange[1]}</span>
                                <span>$900</span>
                            </div>
                        </FilterCard>

                        {/* Vehicle Type */}
                        <FilterCard 
                            title="Vehicle Type" 
                            onClear={() => setSelectedFilters({ ...selectedFilters, vehicleType: [] })} 
                            onApply={handleApplyFilters}
                        >
                            {["Bus", "SUV", "Mini"].map((type) => (
                                <FilterCheckbox 
                                    key={type} 
                                    label={type} 
                                    checked={selectedFilters.vehicleType.includes(type)}
                                    onChange={() => toggleFilter("vehicleType", type)} 
                                />
                            ))}
                        </FilterCard>

                        {/* Rating */}
                        <FilterCard 
                            title="Rating" 
                            onClear={() => setSelectedFilters({ ...selectedFilters, rating: null })} 
                            onApply={handleApplyFilters}
                        >
                            {[5, 4, 3, 2, 1].map((stars) => (
                                <FilterCheckbox 
                                    key={stars} 
                                    label={
                                        <>
                                            {"⭐".repeat(stars)}
                                            {"✩ ".repeat(5 - stars)}
                                        </>
                                    }
                                    checked={selectedFilters.rating === stars}
                                    onChange={() => setSelectedFilters({ ...selectedFilters, rating: stars })}
                                />
                            ))}
                        </FilterCard>

                        {/* Seat Capacity */}
                        <FilterCard 
                            title="Seat Capacity" 
                            onClear={() => setSelectedFilters({ ...selectedFilters, seatCapacity: [] })} 
                            onApply={handleApplyFilters}
                        >
                            {["Small", "Medium", "Large"].map((size) => (
                                <FilterCheckbox 
                                    key={size} 
                                    label={size} 
                                    checked={selectedFilters.seatCapacity.includes(size)}
                                    onChange={() => toggleFilter("seatCapacity", size)}
                                />
                            ))}
                        </FilterCard>
                    </div>
                </div>

                {/* Car Listings */}
                <div className="col-span-3 space-y-3">
                    {visibleCards.map((card) => (
                        <ListCard key={card.id} card={card} />
                    ))}
                </div>
            </div>

            {/* page changer */}
            <div className="flex items-center justify-center lg:gap-2 lg:p-4 sm:gap-1.5 sm:p-3 gap-1 p-2 lg:text-base sm:text-sm text-xs rounded-lg">
                {/* Left Arrow (Hidden on first page) */}
                {currentPage > 1 && (
                    <button 
                        className="bg-[#222222] text-white lg:px-3 lg:py-2 sm:px-2 sm:py-1 px-1 py-0.5 rounded-md"
                        onClick={() => goToPage(currentPage - 1)}
                    > 
                        ←
                    </button>
                )}

                {/* Page Numbers */}
                {getVisiblePages().map((page, index) => (
                    <button
                        key={index}
                        className={`lg:px-3.5 lg:py-2 sm:px-2.5 sm:py-1 px-1.5 py-0.5 rounded-md ${
                            currentPage === page ? "bg-[#4B4A4A] text-white" : "bg-[#222222] text-white"
                        }`}
                        onClick={() => typeof page === "number" && goToPage(page)}
                        disabled={page === "..."}
                    >
                        {page}
                    </button>
                ))}

                {/* Right Arrow (Hidden on last page) */}
                {currentPage < totalPages && (
                    <button 
                        className="bg-[#222222] text-white lg:px-3 lg:py-2 sm:px-2 sm:py-1 px-1 py-0.5 rounded-md"
                        onClick={() => goToPage(currentPage + 1)}
                    >
                        →
                    </button>
                )}
            </div>
        </div>
    )
}

export default SearchResult