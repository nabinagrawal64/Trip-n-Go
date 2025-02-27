import { useState } from "react";
import {User, Heart, History, Globe, FileText, Star, Car, CalendarCheck, LogOut,} from "lucide-react"; // Importing Lucide icons
import { useNavigate } from "react-router";
import UserProfile from "./Profile";

const menuItems = [
    { name: "My Profile", icon: <User size={20} /> },
    { name: "Favorites", icon: <Heart size={20} /> },
    { name: "History", icon: <History size={20} /> },
    { name: "Language", icon: <Globe size={20} /> },
    { name: "Posts", icon: <FileText size={20} /> },
    { name: "Reviews", icon: <Star size={20} /> },
    { name: "My Vehicles", icon: <Car size={20} /> },
    { name: "Booked Vehicles", icon: <CalendarCheck size={20} /> },
];

const UserDashboard = () => {
    const [activeItem, setActiveItem] = useState("My Profile");
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="lg:w-64 sm:w-56 w-32 lg:text-base sm:text-sm text-xs space-y-3 bg-gray-800 lg:px-5 lg:py-10 sm:px-4 sm:py-8 px-3 py-6">
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => setActiveItem(item.name)}
                            className={`flex items-center space-x-3 cursor-pointer sm:px-3 px-1 sm:py-2 py-1 rounded-lg transition ${
                                activeItem === item.name
                                    ? "text-cyan-400 font-semibold bg-gray-700"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {item.icon} <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
                <hr className="text-[#3F4040] border-[1.5px]" />
                <div 
                    className="flex items-center space-x-3 m-auto sm:ml-0 ml-1 cursor-pointer text-red-800 font-bold sm:px-3 py-2 rounded-lg transition"
                    onClick={() => navigate('/')}
                >
                    <span><LogOut className="sm:size-5 size-4 mr-3" /></span> Logout 
                </div>
            </aside>
            
            {/* Profile Section */}
            <UserProfile />
        </div>
    );
};

export default UserDashboard;
