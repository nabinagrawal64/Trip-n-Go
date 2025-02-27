import { useState } from "react";
import { FaEdit } from "react-icons/fa";

import {User, Heart, History, Globe, FileText, Star, Car, CalendarCheck, LogOut,} from "lucide-react"; // Importing Lucide icons
import { useNavigate } from "react-router";

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
            <main className="flex-1 lg:p-10 sm:p-8 px-4 py-7">
                <h1 className="lg:text-2xl md:text-xl sm:text-lg text-sm font-bold">{activeItem}</h1>

                {activeItem === "My Profile" && (
                    <>
                        {/* Profile Card */}
                        <div className="bg-gray-800 p-5 rounded-lg mt-5 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    alt="profile"
                                    className="w-14 h-14 rounded-full"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Satish Kumar Mehar
                                    </h2>
                                    <p className="text-gray-400">
                                        nabinagrawal@gmail.com
                                    </p>
                                </div>
                            </div>
                            <button className="bg-cyan-400 text-black px-4 py-2 rounded flex items-center">
                                <FaEdit className="mr-2" /> Edit
                            </button>
                        </div>

                        {/* Personal Details Card */}
                        <div className="bg-gray-800 p-5 rounded-lg mt-5">
                            {/* heading and edit */}
                            <div className="flex justify-between">
                                <h2 className="text-lg font-semibold">
                                    Personal Details
                                </h2>
                                <button className="bg-cyan-400 text-black px-4 py-2 rounded flex items-center">
                                    <FaEdit className="mr-2" /> Edit
                                </button>
                            </div>
                            {/* personal details */}
                            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-300">
                                <div>
                                    <p className="text-sm">Email</p>
                                    <p className="font-semibold">
                                        nabinagrawal@gmail.com
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        Preferred Language
                                    </p>
                                    <p className="font-semibold">Odia</p>
                                </div>
                                <div>
                                    <p className="text-sm">Phone</p>
                                    <p className="font-semibold">
                                        1234567890
                                    </p>
                                </div>
                            </div>
                            {/* location */}
                            <div className="mt-4 text-gray-300">
                                <h3 className="text-lg font-semibold">
                                    Location
                                </h3>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <p className="text-sm">Address</p>
                                        <p className="font-semibold">
                                            Gothapatna, Bhubaneswar, Odisha
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">PIN</p>
                                        <p className="font-semibold">
                                            123456
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">City</p>
                                        <p className="font-semibold">
                                            Bhubaneswar
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">State</p>
                                        <p className="font-semibold">
                                            Odisha
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeItem === "Favorites" && (
                    <div className="mt-5">
                        <h2 className="text-lg font-semibold">Favorites</h2>
                        <p className="text-gray-400">No favorites yet!</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default UserDashboard;
