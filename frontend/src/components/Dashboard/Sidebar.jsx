import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { History, FileText, Car, CalendarCheck, LogOut, Menu, Home, Bell, Globe } from "lucide-react"; // Importing Lucide icons
import { toast } from "react-toastify";
import { FaRegQuestionCircle } from "react-icons/fa";

const adminMenu = [
    { name: "Home", to: "", icon: <Home className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Profile", to: "profile", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "My Vehicles", to: "vehicles", icon: <Car className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Notifications", to: "notifications", icon: <Bell className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Booking Request", to: "booking-request", icon: <FaRegQuestionCircle className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Booked Vehicles", to: "booked-vehicles", icon: <CalendarCheck className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Language", to: "language", icon: <Globe className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Posts", to: "posts", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "History", to: "history", icon: <History className="lg:size-6 sm:size-5 size-4 " /> },
];

const userMenu = [
    { name: "Profile", to: "profile", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Notifications", to: "notifications", icon: <Bell className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Booked Vehicles", to: "booked-vehicles", icon: <CalendarCheck className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Language", to: "language", icon: <Globe className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Posts", to: "posts", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "History", to: "history", icon: <History className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Reviews", to: "reviews", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
    { name: "Favorites", to: "favorites", icon: <FileText className="lg:size-6 sm:size-5 size-4 " /> },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // const role = "user"; 
    const role = "admin";

    const [activeItem, setActiveItem] = useState( role === "admin" ? adminMenu[0].to : userMenu[0].to); // Default to 'profile'

    const handleNavigation = (path) => {
        if(role === "admin") {
            if(path === "favorites" || path === "language" || path === "reviews") {
                return;
            }
            navigate(`/admin/${path}`);
            setActiveItem(path);
            setIsSidebarOpen(false); 
        } else {
            if(path === "my-vehicles" || path === "language" || path === "booking-request" || path === "home") {
                return;
            }
            navigate(`/dashboard/${path}`);
            setActiveItem(path);
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className="fixed flex flex-col min-h-screen bg-[#313131] text-white z-999">
            
            {/* button for mobile view for user*/}
            <button 
                className="absolute top-4 left-4 z-50 text-white sm:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? "" : <Menu size={28} />}
            </button>

            {/* button for mobile view for admin*/}
            {/* <button 
                className="absolute top-16 left-4 z-50 text-white sm:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? "" : <Menu size={28} />}
            </button> */}

            {/* Sidebar */}
            <aside className={`lg:w-64 w-52 lg:text-base sm:text-sm text-xs space-y-3 bg-[#313131] lg:px-5 lg:py-8 px-4 py-6 fixed sm:relative top-0 left-0 h-full transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}>

                {/* profile for only admin */}
                {
                    role === "admin" && (
                        <div>
                            <div className="mx-auto mb-5 space-y-2">
                                {/* image */}
                                <div className="lg:size-30 size-[90px] mx-auto rounded-full bg-gray-500 relative overflow-hidden">
                                    <img
                                        src={"https://ui-avatars.com/api/?name=Satish+Meher&background=0000&color=fff&rounded=true"}
                                        alt="Profile"
                                        className={`w-full h-full object-cover transition-opacity duration-300`}
                                    />
                                </div>

                                {/* name and email */}
                                <div className="lg:max-w-[200px] sm:max-w-[150px] max-w-[150px] mx-auto">
                                    <h3 className="lg:text-lg sm:text-sm text-[13px] flex items-center justify-center">Satish Kumar Meher</h3>
                                    <h6 className="lg:text-sm sm:text-xs text-[11px] break-all w-full flex items-center justify-center">
                                        satish@gmail.com
                                    </h6>
                                </div>
                            </div>
                            
                            <ul className="lg:space-y-2 space-y-1 cursor-pointer">
                                {role === "admin" && (adminMenu.map((item) => (
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
                                )))}
                            </ul>
                        </div>

                    )
                }
                
                {/* home for only user */}
                {
                    role === "user" && (
                        <div className="lg:space-y-4 space-y-2">
                            <div 
                                onClick={() => navigate("/")}
                                className="flex items-center text-gray-400 hover:text-white sm:space-x-3 space-x-2 cursor-pointer px-3 pt-1 rounded-lg transition"
                            >
                                <Home className="lg:size-6 sm:size-5 size-4" /> <span className="ml-1">Home</span>
                            </div>

                            <ul className="lg:space-y-2 space-y-1 cursor-pointer">
                                {role === "user" && (userMenu.map((item) => (
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
                                )))}
                            </ul>
                        </div>
                    )
                }

                {/* all list */}
                

                {/* all list */}
                

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
