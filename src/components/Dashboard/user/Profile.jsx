import { useState } from "react";

const UserProfile = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingDetails, setIsEditingDetails] = useState(false);

    const [userData, setUserData] = useState({
        name: "Satish Kumar Mehar",
        email: "nabinagrawal@gmail.com",
        phone: "1234567890",
        language: "Odia",
        address: "Gothapatna, Bhubaneswar, Odisha",
        pin: "123456",
        city: "Bhubaneswar",
        state: "Odisha",
    });

    const [tempData, setTempData] = useState(userData);

    // Handlers for profile section
    const handleProfileEdit = () => {
        setIsEditingProfile(true);
        setTempData(userData);
    };

    const handleProfileSave = () => {
        setUserData(tempData);
        setIsEditingProfile(false);
    };

    const handleProfileDiscard = () => {
        setIsEditingProfile(false);
    };

    // Handlers for personal details section
    const handleDetailsEdit = () => {
        setIsEditingDetails(true);
        setTempData(userData);
    };

    const handleDetailsSave = () => {
        setUserData(tempData);
        setIsEditingDetails(false);
    };

    const handleDetailsDiscard = () => {
        setIsEditingDetails(false);
    };

    const handleInputChange = (e) => {
        setTempData({ ...tempData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-[#10141c] text-white min-h-screen p-6">
            <h2 className="text-2xl font-bold">My Profile</h2>

            {/* Profile Section */}
            <div className="bg-[#1c1f26] p-6 rounded-xl mt-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-500"></div>
                        {isEditingProfile ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={tempData.name}
                                    onChange={handleInputChange}
                                    className="bg-gray-700 px-3 py-1 rounded-md"
                                />
                            </>
                        ) : (
                            <div>
                                <h3 className="font-bold">{userData.name}</h3>
                                <p className="text-gray-400">{userData.email}</p>
                            </div>
                        )}
                    </div>
                {isEditingProfile ? (
                    <>
                        <button
                            onClick={handleProfileDiscard}
                            className="px-4 py-2 bg-gray-600 rounded-md"
                        >
                            Discard Changes
                        </button>
                        <button
                            onClick={handleProfileSave}
                            className="px-4 py-2 bg-blue-500 rounded-md"
                        >
                            Save Changes
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleProfileEdit}
                        className="px-4 py-2 bg-blue-500 rounded-md"
                    >
                        Edit
                    </button>
                )}
            </div>

            {/* Personal Details Section */}
            <div className="bg-[#1c1f26] p-6 rounded-xl mt-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold">Personal Details</h3>
                    {!isEditingDetails && (
                        <button
                            onClick={handleDetailsEdit}
                            className="px-4 py-2 bg-blue-500 rounded-md"
                        >
                            Edit
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <p className="text-gray-400">Email</p>
                        {isEditingDetails ? (
                            <input
                                type="email"
                                name="email"
                                value={tempData.email}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            />
                        ) : (
                            <p>{userData.email}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-400">Preferred Language</p>
                        {isEditingDetails ? (
                            <select
                                name="language"
                                value={tempData.language}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            >
                                <option value="Odia">Odia</option>
                                <option value="Japanese">Japanese</option>
                            </select>
                        ) : (
                            <p>{userData.language}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-400">Phone</p>
                        {isEditingDetails ? (
                            <input
                                type="text"
                                name="phone"
                                value={tempData.phone}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            />
                        ) : (
                            <p>{userData.phone}</p>
                        )}
                    </div>
                </div>

                <h3 className="font-bold mt-4">Location</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <p className="text-gray-400">Address</p>
                        {isEditingDetails ? (
                            <input
                                type="text"
                                name="address"
                                value={tempData.address}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            />
                        ) : (
                            <p>{userData.address}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-400">Pin Code</p>
                        {isEditingDetails ? (
                            <input
                                type="text"
                                name="pin"
                                value={tempData.pin}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            />
                        ) : (
                            <p>{userData.pin}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-400">City</p>
                        {isEditingDetails ? (
                            <input
                                type="text"
                                name="city"
                                value={tempData.city}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            />
                        ) : (
                            <p>{userData.city}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-400">State</p>
                        {isEditingDetails ? (
                            <input
                                type="text"
                                name="state"
                                value={tempData.state}
                                onChange={handleInputChange}
                                className="bg-gray-700 px-3 py-1 rounded-md w-full"
                            />
                        ) : (
                            <p>{userData.state}</p>
                        )}
                    </div>
                </div>

                {isEditingDetails && (
                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={handleDetailsDiscard}
                            className="px-4 py-2 bg-gray-600 rounded-md"
                        >
                            Discard Changes
                        </button>
                        <button
                            onClick={handleDetailsSave}
                            className="px-4 py-2 bg-blue-500 rounded-md"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </div>

            {/* <div>
                <img
                    src={userData.profileImage || `https://ui-avatars.com/api/?name=${userData.name}+${userData.name}&background=random&color=fff`}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                />
            </div> */}
        </div>
    );
};

export default UserProfile;
