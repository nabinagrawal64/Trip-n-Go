/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

const EditProfile = ({ onClose }) => {

    const [isEditingDetails, setIsEditingDetails] = useState(false);
    const fileInputRef = useRef(null);
    const inputRefs = useRef({});
    const [isExpanded, setIsExpanded] = useState(false);

    const userData = {
        name: "Satish Kumar Meher",
        email: "nabinagrawal@gmail.com",
        phone: "1234567890",
        language: "Odia",
        street: "Gothapatna, Bhubaneswar, Odisha",
        landmark: "Gothapatna",
        pin: "123456",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India",
    };

    const [input, setInput] = useState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        language: userData.language,
        street: userData.street,
        landmark: userData.landmark,
        pin: userData.pin,
        city: userData.city,
        state: userData.state,
        country: userData.country,
    });

    const focusInput = (name) => {
        if (inputRefs.current[name]) {
            const input = inputRefs.current[name];
            input.focus();
            const length = input.value.length;
            input.setSelectionRange(length, length);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            // reader.onloadend = () => {
            //     setTempData({ ...tempData, profilePicture: reader.result });
            // };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const countries = [
        "India", "United States", "China", "Japan", "Germany",
        "United Kingdom", "France", "Brazil", "Canada", "Russia",
        "South Korea", "Australia", "Italy", "Mexico", "Spain",
        "Saudi Arabia", "South Africa", "Turkey", "Indonesia", "Argentina"
    ];

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
        "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
        "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
    ];

    return (
        <div className="fixed w-full lg:py-20 sm:py-10 py-6 inset-0 overflow-y-auto bg-black/80 bg-opacity-50 flex flex-col items-center justify-center z-50">
            <div className="bg-[#1c1f26] sm:w-[60%] w-[80%] border mx-auto border-gray-400 sm:p-6 p-3 rounded-xl mt-4">
                {/* Profile Picture and name */}
                <div  className="bg-[#1c1f26] border mx-auto border-gray-400 sm:p-6 p-3 rounded-xl mt-4 flex justify-between items-center">
                    <div className="flex items-center sm:gap-4 gap-2">
                        {/* Profile photo */}
                        <div className="lg:size-20 sm:size-16 size-10 rounded-full bg-gray-500 relative overflow-hidden">
                            <img
                                src={"https://ui-avatars.com/api/?name=Satish+Meher&background=0000&color=fff&rounded=true"}
                                alt="Profile"
                                className={`w-full h-full object-cover transition-opacity duration-300`}
                            />
                        </div>
                        
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            value={input.name}
                            defaultValue={userData.name}
                            onChange={handleInputChange}
                            className="bg-transparent w-auto py-1 lg:text-lg sm:text-sm text-xs rounded-md outline-none"
                        />
                    </div>

                    {/* edit */}
                    <div className="flex justify-end sm:translate-x-0 -translate-x-14">
                        <button
                            onClick={handleImageChange}
                            className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer flex items-center gap-1 text-black rounded-md bg-[#00E1FF]"
                        >
                            <FiEdit className="sm:size-4 size-2.5 flex "/> <span>Edit</span>
                        </button>
                    </div>
                </div>
                
                {/* Personal Details Section */}
                <div className="bg-[#1c1f26] mx-auto lg:p-4 p-2 rounded-xl mt-2">   
                    {/* top section */}
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold lg:text-xl sm:text-lg text-base ">Personal Details</h3>     
                    </div>
                    
                    {/* Details */}
                    <div className="sm:grid sm:grid-cols-2 flex flex-col gap-y-4 lg:gap-x-24 sm:gap-x-10 mt-2">
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={input.email}
                                onChange={handleInputChange}
                                defaultValue={userData.email}
                                ref={(el) => (inputRefs.current["email"] = el)}
                                className="bg-transparent w-auto py-1 lg:text-base sm:text-sm text-xs rounded-md outline-none"
                            />
                        </div>

                        {/* Preferred Language - Dropdown */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Language</label>
                            <select
                                name="language"
                                value={input.language}
                                onChange={handleInputChange}
                                className="bg-transparent px-1 border lg:text-base sm:text-sm text-xs border-gray-500 my-1 rounded-md outline-none sm:p-0 p-1"
                            >
                                <option value="English" className="bg-[#1c1f26]">
                                    English
                                </option>
                                <option value="Hindi" className="bg-[#1c1f26]">
                                    Hindi
                                </option>
                                <option value="Odia" className="bg-[#1c1f26]">
                                    Odia
                                </option>
                            </select>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Phone</label>
                            <input 
                                type="number" 
                                name="phone"
                                value={input.phone}
                                onChange={handleInputChange}
                                defaultValue={userData.phone}
                                ref={(el) => (inputRefs.current["phone"] = el)}
                                className="bg-transparent w-auto py-1 lg:text-base sm:text-sm text-xs rounded-md outline-none"
                            />
                        </div>

                        <br className="sm:visible hidden" />

                        {/* Country dropdown*/}
                        <div className="flex flex-col relative">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Country</label>
                            <select
                                name="country"
                                value={input.country}
                                onChange={handleInputChange}
                                defaultValue={userData.country}
                                className="bg-transparent px-1 lg:text-base sm:text-sm text-xs border border-gray-500 my-1 rounded-md outline-none sm:p-0 p-1"
                            >
                                {countries.map((country, index) => (
                                    <option key={index} value={country} className="bg-[#1c1f26] lg:text-base sm:text-sm text-xs">
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* State dropdown*/}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">State</label>
                            <select
                                name="state"
                                value={input.state}
                                onChange={handleInputChange}
                                defaultValue={userData.state}
                                className="bg-transparent lg:text-base sm:text-sm text-xs px-1 border border-gray-500 my-1 rounded-md outline-none sm:p-0 p-1"
                            >
                                {states.map((state, index) => (
                                    <option key={index} value={state} className="bg-[#1c1f26] lg:text-base sm:text-sm text-xs">
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* City */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">City</label>
                            <input 
                                type="text" 
                                name="text"
                                value={input.city}
                                onChange={handleInputChange}
                                defaultValue={userData.city}
                                ref={(el) => (inputRefs.current["city"] = el)}
                                className="bg-transparent w-auto py-1 lg:text-base sm:text-sm text-xs rounded-md outline-none"
                            />
                        </div>

                        {/* Street */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Street</label>
                            <input 
                                type="text" 
                                name="text"
                                value={input.street}
                                onChange={handleInputChange}
                                defaultValue={userData.street}
                                ref={(el) => (inputRefs.current["street"] = el)}
                                className="bg-transparent w-auto py-1 lg:text-base sm:text-sm text-xs rounded-md outline-none"
                            />
                        </div>

                        {/* Landmark */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Landmark</label>
                            <input 
                                type="landmark" 
                                name="landmark"
                                value={input.landmark}
                                onChange={handleInputChange}
                                defaultValue={userData.landmark}
                                ref={(el) => (inputRefs.current["landmark"] = el)}
                                className="bg-transparent w-auto py-1 lg:text-base sm:text-sm text-xs rounded-md outline-none"
                            />
                        </div>

                        {/* Pin */}
                        <div className="flex flex-col">
                            <label className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Pin</label>
                            <input 
                                type="number" 
                                name="pin"
                                value={input.pin}
                                onChange={handleInputChange}
                                defaultValue={userData.pin}
                                ref={(el) => (inputRefs.current["pin"] = el)}
                                className="bg-transparent w-auto py-1 lg:text-base sm:text-sm text-xs rounded-md outline-none"
                            />
                        </div>
                        
                    </div>
                </div>

                {/* save and discard button */}
                <div className="flex justify-end mt-4 gap-2">
                    <button
                        onClick={onClose}
                        className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer flex items-center gap-1 text-white rounded-md bg-transparent border border-[#00E1FF]"
                    >
                        Discard
                    </button>
                    <button
                        onClick={onClose}
                        className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer flex items-center gap-1 text-black rounded-md bg-[#00E1FF]"
                    >
                        Save
                    </button>
                
                </div>
            </div>
        </div>
    )
}

export default EditProfile