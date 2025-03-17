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
                    className="lg:text-base sm:text-xs text-sm"
                    
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

const SearchResult = () => {

    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef();

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
            
            <div className="grid grid-cols-1 md:grid-cols-4 xl:max-w-5/6 md:max-w-11/12 mx-auto gap-6">
                {/* Sidebar Filters for large screen */}
                <div className="col-span-1 sm:inline hidden space-y-6 mt-10 xl:mr-10 ">
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
                <ListCard />
            </div>
        </div>
    )
}

export default SearchResult