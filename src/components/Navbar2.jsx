import { useState, useEffect, useRef } from "react";
import { Bell, MoonStar, Sun, Search, Settings, SlidersHorizontal, User, Check, Car, Snowflake, DollarSign, Users, ChevronDown, Menu, ArrowLeft } from "lucide-react";
import { FaCheckSquare } from "react-icons/fa";
import { FaRegStar  } from "react-icons/fa";
import { useDarkMode } from './DarkModeProvider.jsx'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [filterOpen, setFilterOpen] = useState(false); // State to toggle filter dropdown
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [storedQuery, setStoredQuery] = useState("");
    const searchRef = useRef(null);
    const dropdownRef = useRef(null); 
    const menuRef = useRef(null);

    const filters = {
        "Vehicle Type": ["Bus", "SUV", "Mini"],
        "AC": ["AC", "Non AC"],
        "Price Range": ["Low to High", "High to Low", "Popular"],
        "Seat Capacity": ["Small (15 seats)", "Medium (20 seats)", "Large (30 seats)"],
        "Rating": ["3 and above", "3.5 and above", "4 and above", "4.5 and above"]
    };
    
    const filterIcons = {
        "Vehicle Type": <Car size={19} />,
        "AC": <Snowflake size={18} />,
        "Price Range": <DollarSign size={18} />,
        "Seat Capacity": <Users size={17} />,
        "Rating": <FaRegStar size={15} />,
    };

    const handleSelection = (category, subFilter) => {
        setSelectedFilters((prev) => {
            const updatedFilters = { ...prev };
    
            if (category === "Vehicle Type") {
                // Multi-Select for "Vehicle Type"
                if (!updatedFilters[category]) {
                    updatedFilters[category] = [];
                }
    
                if (updatedFilters[category].includes(subFilter)) {
                    // Remove if already selected
                    updatedFilters[category] = updatedFilters[category].filter(
                        (item) => item !== subFilter
                    );
    
                    // Remove category if empty
                    if (updatedFilters[category].length === 0) {
                        delete updatedFilters[category];
                    }
                } else {
                    // Add new sub-filter
                    updatedFilters[category].push(subFilter);
                }
            } else {
                if (updatedFilters[category]?.[0] === subFilter) {
                    // If already selected, remove the selection
                    delete updatedFilters[category];
                } else {
                    // Set selected sub-filter
                    updatedFilters[category] = [subFilter];
                }
            }
    
            return updatedFilters;
        });
    
        setDropdownOpen((prev) => ({
            ...prev,
            [category]: false,
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); // Close menu when clicking outside
                setFilterOpen(false); 
            }
            else if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside); // Listen for clicks
        return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup event
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchQuery.trim() !== "") {
            setStoredQuery(searchQuery); // Save the entered search query
            console.log("Searched Stored:", searchQuery); // Debugging log
            console.log("stored Query:", storedQuery);
            setSearchOpen(false); // Close search bar after enter
        }
    };

    return (
        <div className={`relative z-1 flex bg-black/25 transition-colors ${searchOpen ? "backdrop-blur-md" : "b"}  duration-500 xl:h-[90px] lg:h-[80px] md:h-[70px] sm:h-[60px] h-[50px]`}>
            <nav className="w-full px-6 py-3 flex sm:gap-5 gap-2 items-center backdrop-blur-[2px]">
                {/* Logo */}
                <h1 className={`transition-colors duration-500 sm:translate-x-0 -translate-x-2`}>
                    <img src="./logoDark.gif" alt="logo" className="xl:size-32 lg:size-28 md:size-24 size-20" />
                </h1>

                {/* Search Bar */}
                <div 
                    className={`flex bg-white/15 items-center w-[150px] h-[30px] sm:w-[180px] sm:h-[33px] md:w-[300px] md:h-[35px] lg:w-[400px] lg:h-[38px] xl:w-[492px] xl:h-[42px] rounded-lg px-3 py-2 transition-colors duration-500`}
                    ref={searchRef}
                    onClick={() => setSearchOpen(true)}
                >
                    <Search className="text-white" />
                    <input
                        type="text"
                        placeholder="Search"
                        className={`ml-2 bg-transparent outline-none transition-colors duration-500 w-ful placeholder:font-light lg:placeholder:text-lg placeholder:text-sm text-white placeholder-white w-full`}
                    />
                </div>

                {/* Filter Button */}
                <div className="relative z-10"  >
                    {/* Filter Button */}
                    <button
                        className="text-white cursor-pointer items-center rounded-lg lg:px-[9px] py-[9px] transition-colors duration-500"
                        onClick={() => setFilterOpen(!filterOpen)}
                    >
                        <SlidersHorizontal />
                    </button>

                    {/* Filter Dropdown Menu */}
                    {filterOpen && (
                        <div
                            className={`absolute right-0 mt-2 lg:w-[250px] md:w-[200px] w-[170px] h-[200px] md:h-[250px] lg-h[300px]
                                        ${darkMode ? "bg-black/55 text-white" : "bg-white/35 text-black"}
                                        rounded-lg shadow-lg transition-all duration-300 
                                        ${filterOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                                        overflow-y-auto z-999 scrollbar-thin scrollbar-thumb-[#00E1FF] scrollbar-track-gray-100 scrollbar-thumb-rounded-full
                                        `}
                            style={{ scrollbarWidth: "thin" }}
                            ref={dropdownRef}
                        >
                            {Object.entries(filters).map(([category, subFilters], index) => (
                                <div key={index} className="p-2 md:p-3">
                                    {/* Main Filter Name with Icon (Dropdown Trigger) */}
                                    <div
                                        className={`flex items-center justify-between text-xs cursor-pointer lg:px-4 md:px-3 px-1 lg:py-2 py-1 rounded-md 
                                                    ${darkMode ? "bg-gray-800/85 hover:bg-gray-700" : "bg-gray-100/55 hover:bg-gray-200"}`}
                                        onClick={() =>
                                            setDropdownOpen((prev) => ({
                                                ...prev,
                                                [category]: !prev[category],
                                            }))
                                        }
                                    >
                                        <div className="flex items-center gap-2">
                                            {filterIcons[category]}
                                            <span>
                                                {selectedFilters[category]?.length > 0
                                                    ? selectedFilters[category].join("/")
                                                    : category}
                                            </span>
                                        </div>

                                        {/* Show Checkmark if any sub-filter is selected */}
                                        {selectedFilters[category] ? (
                                            <FaCheckSquare className={`size-4 ${darkMode ? "text-[#00E1FF]/85" : "text-[#073C6D]/85"}`} />
                                        ) : (
                                            <ChevronDown className="text-gray-500" />
                                        )}
                                    </div>

                                    {/* Sub-Filters List */}
                                    {dropdownOpen[category] && (
                                        <div
                                            className={`mt-2 border rounded-md shadow-md 
                                                        ${darkMode ? "bg-gray-800/55 border-gray-700" : "bg-white/55 border-gray-300"}`}
                                        >
                                            {subFilters.map((subFilter, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition-all duration-300 
                                                        ${
                                                            selectedFilters[category]?.includes(subFilter)
                                                        }`}
                                                    onClick={() => handleSelection(category, subFilter)}
                                                >
                                                    <span className="text-xs md:text-sm">{subFilter}</span>
                                                    {selectedFilters[category]?.includes(subFilter)  && (
                                                        <span className={`ml-auto ${darkMode ? "text-white/85" : "text-black/85"}`} >
                                                            <Check className="md:size-5 size-4" /> 
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </nav>

            {/* Right Side Icons */}
            <nav>
                <div className="w-full xl:px-6 xl:py-7 lg:py-6 md:px-4 md:py-5 py-4 hidden sm:flex gap-5">
                    {/* Dark Mode Toggle */}
                    <button 
                        onClick={toggleDarkMode}
                        className="relative w-[70px] h-8 lg:my-1 bg-gray-300 dark:bg-white/15 rounded-full flex items-center p-2 transition-colors duration-500"
                    >
                        <div 
                            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? "translate-x-8" : "translate-x-0"}`}
                        ></div>
                        <div className={`absolute left-2.5 ${darkMode ? "text-white" : "text-black"}`}>
                            <Sun size={20} />
                        </div>
                        <div className={`absolute right-2.5 ${darkMode ? "text-black" : "text-white"}`}>
                            <MoonStar size={20} />
                        </div>
                    </button>

                    <div className={`bg-white/15 items-center rounded-md h-[35px] px-1.5 py-1 transition-colors duration-500 text-white`}>
                        <Bell />
                    </div>
                    <div className={`bg-white/15 items-center rounded-md h-[35px] px-1.5 py-1 transition-colors duration-500 text-white`}>
                        <Settings />
                    </div>
                    <div className={`bg-white/15 items-center rounded-md h-[35px] px-1.5 py-1 transition-colors duration-500 text-white`}>
                        <User />
                    </div>
                    <div className="w-[75px] items-center rounded-lg text-white">
                        <span className={`text-xl font-semibold transition-colors duration-500 text-white`}>Log in</span>
                    </div>
                </div>
                
                {/* Hamburger Menu for Smaller screens */}
                <div className="sm:hidden relative flex">
                    {/* dark mode light mode */}
                    <button 
                        onClick={toggleDarkMode} 
                        className="w-[52px] mt-3  h-6 bg-gray-300 dark:bg-white/15 rounded-full flex items-center p-1 transition-colors duration-500"
                    >
                        <div 
                            className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? "translate-x-7" : "translate-x-0"}`}
                        ></div>
                        <div className={`absolute ${darkMode ? "text-white" : "text-black"}`}>
                            <Sun size={14} />
                        </div>
                        <div className={`absolute right-14 ${darkMode ? "text-black" : "text-white"}`}>
                            <MoonStar size={14} />
                        </div>
                    </button>
                    
                    {/* menu icon */}
                    <div>
                        <button 
                            className="text-white cursor-pointer p-3 rounded-md " 
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <Menu size={26} />
                        </button>

                        {/* Dropdown Menu (Visible when clicked) */}
                        {menuOpen && (
                            <div ref={menuRef} className={`absolute right-0 my-1 w-[50px] ${darkMode ? "bg-black/45 text-white" : "bg-white/35 text-black"} rounded-lg shadow-lg z-20 transition-all duration-300`}>
                                <div className="flex flex-col">
                                    {/* Dark Mode Toggle Inside Menu */}
                                    
                                    <button className="flex cursor-pointer items-center px-3 py-4 hover:bg-gray-700">
                                        <Bell size={24} /> 
                                    </button>
                                    <button className="flex cursor-pointer items-center px-3 py-3 hover:bg-gray-700">
                                        <Settings size={24} /> 
                                    </button>
                                    <button className="flex cursor-pointer items-center px-3 py-4 hover:bg-gray-700">
                                        <User size={24} /> 
                                    </button>
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            
            {/* serach bar  */}
            {searchOpen && (
                <div className="absolute inset-0 gap-3 backdrop-blur-2xl flex items-center justify-center transition-all duration-500 sm:hidden z-20">
                    <div className="w-full relative">
                        <ArrowLeft 
                            className="absolute left-2 top-3 text-white" 
                            onClick={() => setSearchOpen(false)}
                            />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-3 pl-10 bg-gray-800 text-white outline-none text-sm"
                            autoFocus
                            value={searchQuery}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="absolute right-4 top-3 text-white"
                            onClick={() => {
                                setSearchQuery(""); // Clear query
                            }} 
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;


            