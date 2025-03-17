import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Heart, History, Globe, FileText, Star, Car, CalendarCheck, LogOut, Menu } from "lucide-react"; // Importing Lucide icons
import { toast } from "react-toastify";

const menuItems = [
    { name: "My Profile", to: "profile", icon: <User className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Favorites", to: "favorites", icon: <Heart className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "History", to: "history", icon: <History className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Language", to: "language", icon: <Globe className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Posts", to: "posts", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Reviews", to: "reviews", icon: <Star className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "My Vehicles", to: "vehicles", icon: <Car className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Booked Vehicles", to: "booked-vehicles", icon: <CalendarCheck className="lg:size-6 sm:size-5 size-4 " /> },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(menuItems[0].to); // Default to 'profile'
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigation = (path) => {
        setActiveItem(path);
        if(path === "language") return;
        navigate(`/dashboard/${path}`);
        setIsSidebarOpen(false); 
    };

    return (
        <div className="flex min-h-screen bg-[#313131] text-white">

            <button 
                className="absolute top-4 left-4 z-50 text-white sm:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? "" : <Menu size={28} />}
            </button>

            {/* Sidebar */}
            <aside className={`lg:w-64 w-52 lg:text-base sm:text-sm text-xs space-y-3 bg-[#313131] lg:px-5 lg:py-8 px-4 py-6 fixed sm:relative top-0 left-0 h-full transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}>
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => handleNavigation(item.to)}
                            className={`flex items-center sm:space-x-3 space-x-2 cursor-pointer px-3 py-2 rounded-lg transition ${
                                activeItem === item.to
                                    ? "text-cyan-400 bg-gray-700 "
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            <span>{item.icon}</span> 
                            <span className="ml-1 lg:text-base sm:text-sm text-xs">{item.name}</span>
                        </li>
                    ))}
                </ul>

                <hr className="text-[#3F4040] border-[1.5px]" />

                {/* logout button */}
                <div 
                    className="flex items-center sm:space-x-3 space-x-1 m-auto  cursor-pointer text-red-800 font-bold px-3 py-2 rounded-lg transition hover:bg-gray-700"
                    onClick={() => {
                        navigate('/')
                        toast.success("Successfully Logged out")
                    }}
                >
                    <LogOut className="lg:size-6 sm:size-5 size-4.5 sm:mr-4 mr-3" />
                    <span className="lg:text-base sm:text-sm text-xs">Logout</span>
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/70 bg-opacity-50 sm:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};  

export default Sidebar;
