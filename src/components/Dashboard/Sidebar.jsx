import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Heart, History, Globe, FileText, Star, Car, CalendarCheck, LogOut } from "lucide-react"; // Importing Lucide icons
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

    const handleNavigation = (path) => {
        setActiveItem(path);
        if(path === "language"){
            return;
        }
        navigate(`/dashboard/${path}`);
    };

    return (
        <div className="flex min-h-screen bg-[#313131] text-white">
            {/* Sidebar */}
            <aside className="lg:w-64 sm:w-52 w-28 lg:text-base sm:text-sm text-xs space-y-3 bg-[#313131] lg:px-5 lg:py-8 sm:px-4 sm:py-6 px-3 py-4">
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => handleNavigation(item.to)}
                            className={`flex items-center sm:space-x-3 space-x-1 cursor-pointer sm:px-3 px-1 sm:py-2 py-1 rounded-lg transition ${
                                activeItem === item.to
                                    ? "text-cyan-400 bg-gray-700 "
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            <span>{item.icon}</span> 
                            <span className="ml-1 lg:text-base sm:text-sm text-[9px]">{item.name}</span>
                        </li>
                    ))}
                </ul>

                <hr className="text-[#3F4040] border-[1.5px]" />
                {/* logout button */}
                <div 
                    className="flex items-center sm:space-x-3 space-x-1 m-auto sm:ml-0 ml-1.5 cursor-pointer text-red-800 font-bold sm:px-3 py-2 rounded-lg transition hover:bg-gray-700"
                    onClick={() => {
                        navigate('/')
                        toast.success("Successfully Logged out")
                    }}
                >
                    <LogOut className="lg:size-6 sm:size-5 size-4 sm:mr-4 mr-2" />
                    <span className="lg:text-base sm:text-sm text-[10px]">Logout</span>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
