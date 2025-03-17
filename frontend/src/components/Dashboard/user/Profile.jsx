import { useState, useRef, useEffect } from "react";
import { FiEdit, FiTrash2, FiCamera } from "react-icons/fi";
import ConfirmationModal from "../../common/Modal";
import { useNavigate } from "react-router";

const UserProfile = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingDetails, setIsEditingDetails] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);
    const inputRefs = useRef({});
    const navigate = useNavigate();

    const defaultUserData = {
        name: "Satish Kumar Meher",
        email: "nabinagrawal@gmail.com",
        phone: "1234567890",
        language: "Odia",
        address: "Gothapatna, Bhubaneswar, Odisha",
        pin: "123456",
        city: "Bhubaneswar",
        state: "Odisha",
    };

    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem("userProfile");
        return storedData ? JSON.parse(storedData) : defaultUserData;
    });

    const [tempData, setTempData] = useState(userData);

    useEffect(() => {
        localStorage.setItem("userProfile", JSON.stringify(userData));
    }, [userData]);

    const focusInput = (name) => {
        if (inputRefs.current[name]) {
            const input = inputRefs.current[name];
            input.focus();
            const length = input.value.length;
            input.setSelectionRange(length, length);
        }
    };

    // PROFILE EDIT HANDLERS
    const handleProfileEdit = () => {
        setIsEditingProfile(true);
        setTempData(userData);
        setTimeout(() => focusInput("name"), 0);
    };

    const handleProfileSave = () => {
        setUserData(tempData);
        setIsEditingProfile(false);
    };

    // const handleProfileDiscard = () => {
    //     setIsEditingProfile(false);
    //     setTempData(userData);
    // };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempData({ ...tempData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageDelete = () => {
        setTempData({ ...tempData, profilePicture: "" });
    };

    // PERSONAL DETAILS EDIT HANDLERS
    const handleDetailsEdit = () => {
        setIsEditingDetails(true);
        setTempData(userData);
        setTimeout(() => focusInput("email"), 0);
    };

    const handleDetailsSave = () => {
        setUserData(tempData);
        setIsEditingDetails(false);
    };

    const handleDetailsDiscard = () => {
        setIsEditingDetails(false);
        setTempData(userData);
    };

    const handleInputChange = (e) => {
        setTempData({ ...tempData, [e.target.name]: e.target.value });
    };

    return (
        <div className="text-white sm:p-6 p-4">
            <h2 className="xl:text-3xl lg:text-2xl text-xl mx-auto font-bold sm:text-left sm:py-2 text-center">My Profile</h2>

            {/* Profile Section */}
            <div  className="bg-[#1c1f26] border mx-auto border-gray-400 sm:p-6 p-3 rounded-xl mt-4 flex justify-between items-center">
                {/* name and profile picture */}
                <div className="flex items-center sm:gap-4 gap-2">
                    {/* Profile photo */}
                    <div className="lg:size-16 sm:size-12 size-10 rounded-full bg-gray-500 relative overflow-hidden">
                        <img
                            src={tempData.profilePicture || "https://ui-avatars.com/api/?name=Satish+Meher&background=0000&color=fff&rounded=true"}
                            alt="Profile"
                            className={`w-full h-full    object-cover transition-opacity duration-300 ${
                                isEditingProfile ? "group-hover:opacity-50" : ""
                            }`}
                        />
                        {isEditingProfile && (
                            <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30"
                                onClick={() => fileInputRef.current.click()}
                            >
                                <FiCamera size={20} className="text-white" />
                            </div>
                        )}
                        {isEditingProfile && tempData.profilePicture && (
                            <button
                                className="absolute top-0 right-0 bg-gray-500/50 cursor-pointer text-white sm:p-[17px] p-[12px] rounded-full shadow-md"
                                onClick={handleImageDelete}
                            >
                                <FiTrash2 className="lg:size-7 size-4" />
                            </button>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                    
                    {/* Name */}
                    <input
                        ref={(el) => (inputRefs.current["name"] = el)}
                        type="text"
                        name="name"
                        value={tempData.name}
                        onChange={handleInputChange}
                        readOnly={!isEditingProfile}
                        className="bg-transparent w-fit py-1 lg:text-lg sm:text-sm text-xs rounded-md outline-none"
                    />
                </div>

                {/* Profile Edit/Save/Discard Buttons */}
                {isEditingProfile ? (
                    <div className="">
                        <div
                            onClick={handleProfileSave}
                            className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer text-black rounded-md bg-[#00E1FF]"
                        >
                            Save
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={handleProfileEdit}
                        className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer flex items-center gap-1 text-black rounded-md bg-[#00E1FF]"
                    >
                        <FiEdit className="sm:size-4 size-2.5 flex " /> <span>Edit</span>
                    </button>
                )}
            </div>

            {/* Personal Details Section */}
            <div className="bg-[#1c1f26] border mx-auto border-gray-400 sm:p-6 p-3 rounded-xl mt-4">   
                {/* top section */}
                <div className="flex justify-between items-center">
                    <h3 className="font-bold lg:text-xl sm:text-lg text-sm ">Personal Details</h3>

                    {/* Edit/Save/Discard Buttons */}
                    {isEditingDetails ? (
                        <div className="flex gap-2 ">
                            <button
                                onClick={handleDetailsDiscard}
                                className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer rounded-md border border-gray-400 hover:border-[#00E1FF] transition-all duration-200 "
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleDetailsSave}
                                className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer text-black rounded-md bg-[#00E1FF]"
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleDetailsEdit}
                            className="lg:px-3 sm:px-2 px-1 lg:py-1.5 sm:py-1 p-0.5 lg:text-base sm:text-sm text-[10px] cursor-pointer flex items-center gap-1 text-black rounded-md bg-[#00E1FF]"
                        >
                            <FiEdit className="sm:size-4 size-2.5 flex " /> <span>Edit</span>
                        </button>
                    )}
                </div>
                
                {/* Details */}
                <div className="grid grid-cols-2 gap-y-4 sm:gap-x-24 gap-x-20 mt-2">
                    {/* Email */}
                    <div>
                        <p className="text-gray-400 lg:text-base sm:text-sm text-xs">Email</p>
                        <input
                            ref={(el) => (inputRefs.current["email"] = el)}
                            type="email"
                            name="email"
                            value={tempData.email}
                            onChange={handleInputChange}
                            readOnly={!isEditingDetails}
                            className="bg-transparent sm:py-1 lg:text-base sm:text-sm text-[10px] rounded-md outline-none "
                        />
                    </div>

                    {/* Preferred Language - Dropdown */}
                    <div>
                        <p className="text-gray-400 lg:text-base sm:text-sm text-xs">Language</p>
                        {isEditingDetails ? (
                            <select
                                name="language"
                                value={tempData.language}
                                onChange={handleInputChange}
                                className="bg-transparent border lg:text-base sm:text-sm text-[10px] border-gray-500 my-1 rounded-md w-auto outline-none"
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
                        ) : (
                            <p className="lg:text-base sm:text-sm text-[10px] mt-2">{userData.language}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="text-gray-400 lg:text-base sm:text-sm text-xs">Phone</p>
                        <input
                            type="number"
                            name="phone"
                            value={tempData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Allow only digits
                                if (value.length <= 10) {
                                    setTempData({ ...tempData, phone: value });
                                }
                            }}
                            readOnly={!isEditingDetails}
                            className="bg-transparent sm:py-1 lg:text-base sm:text-sm text-[10px] rounded-md outline-none w-full"
                            maxLength={10}
                        />
                    </div>

                    <br />

                    {/* Address */}
                    <div>
                        <p className="text-gray-400 lg:text-base sm:text-sm text-xs">Address</p>
                        <input
                            type="text"
                            name="address"
                            value={tempData.address}
                            onChange={handleInputChange}
                            readOnly={!isEditingDetails}
                            className="bg-transparent sm:py-1 lg:text-base sm:text-sm text-[10px] rounded-md outline-none "
                        />
                    </div>

                    {/* PIN */}
                    <div>
                        <p className="text-gray-400 lg:text-base sm:text-sm text-xs">PIN</p>
                        <input
                            type="number"
                            name="pin"
                            value={tempData.pin}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Allow only digits
                                if (value.length <= 6) {
                                    setTempData({ ...tempData, pin: value });
                                }
                            }}
                            readOnly={!isEditingDetails}
                            className="bg-transparent sm:py-1 lg:text-base sm:text-sm text-[10px] rounded-md outline-none w-full"
                            maxLength={6}
                        />
                    </div>

                    {/* City */}
                    <div>
                        <p className="text-gray-400 lg:text-base sm:text-sm text-xs">City</p>
                        <input
                            type="text"
                            name="city"
                            value={tempData.city}
                            onChange={handleInputChange}
                            readOnly={!isEditingDetails}
                            className="bg-transparent sm:py-1 lg:text-base sm:text-sm text-[10px] rounded-md outline-none w-full"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <p className="text-gray-400 w-fit lg:text-base sm:text-sm text-xs">State</p>
                        {isEditingDetails ? (
                            <select
                                name="state"
                                value={tempData.state}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    e.target.blur();
                                }}
                                className="bg-transparent border w-fit lg:text-base sm:text-sm text-[10px] border-gray-500 my-1 w-fit rounded-md outline-none"
                                size={1}
                                onClick={(e) => e.target.size = 5} 
                                onBlur={(e) => e.target.size = 1} 
                            >
                                {[
                                    "Andhra Pradesh",
                                    "Arunachal Pradesh",
                                    "Assam",
                                    "Bihar",
                                    "Chhattisgarh",
                                    "Goa",
                                    "Gujarat",
                                    "Haryana",
                                    "Himachal Pradesh",
                                    "Jharkhand",
                                    "Karnataka",
                                    "Kerala",
                                    "Madhya Pradesh",
                                    "Maharashtra",
                                    "Manipur",
                                    "Meghalaya",
                                    "Mizoram",
                                    "Nagaland",
                                    "Odisha",
                                    "Punjab",
                                    "Rajasthan",
                                    "Sikkim",
                                    "Tamil Nadu",
                                    "Telangana",
                                    "Tripura",
                                    "Uttar Pradesh",
                                    "Uttarakhand",
                                    "West Bengal",
                                ].map((state) => (
                                    <option
                                        key={state}
                                        value={state}
                                        className="bg-[#1c1f26] w-fit lg:text-base sm:text-sm text-[10px]"
                                    >
                                        {state}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <p className="lg:text-base w-fit sm:text-sm text-[10px] my-1">{userData.state}</p>
                        )}
                    </div>
                </div>
            </div>
                        
            {/* Delete Account */}
            <div className="bg-[#2a0410] border mx-auto border-[#6b1b2d] mt-4 sm:p-6 p-3 rounded-xl flex items-center sm:gap-4 gap-2.5">
                {/* Trash Icon */}
                <div className="lg:size-12 sm:size-8 size-6 flex items-center justify-center bg-[#6b1b2d] rounded-full shrink-0">
                    <FiTrash2 className="text-[#ff6473] lg:text-xl sm:text-lg text-sm" />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h2 className="lg:text-lg sm:text-sm text-xs font-semibold text-white">Delete Account</h2>
                    <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px]">
                        Would you like to delete your account? <br className="hidden sm:block" />
                        This account includes access to rented vehicles. Deleting your account will permanently remove all associated bookings and rental history.
                    </p>
                    <p 
                        className="text-[#ff6473] lg:text-base sm:text-[13px] text-[11px] italic cursor-pointer lg:mt-2 mt-1 hover:underline"
                        onClick={() => setIsModalOpen(true)}
                    >
                        I want to delete my account.
                    </p>
                </div>

                {/* Confirmation Modal */}
                {isModalOpen && (
                    <ConfirmationModal 
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={() => { alert("Account Deleted!"); navigate('/')}}
                        title="Delete Account"
                        message="Are you sure you want to delete your account? This action cannot be undone."
                        confirmText="Delete"
                    />
                )}
            </div>
            
        </div>
    );
};

export default UserProfile;
