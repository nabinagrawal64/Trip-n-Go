import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ConfirmationModal from ".././common/Modal";
import { useNavigate } from "react-router";
import EditProfile from "./EditProfile";

const UserProfile = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const defaultUserData = {
        name: "Satish Kumar Meher",
        email: "nabinagrawal@gmail.com",
        phone: "1234567890",
        language: "Odia",
        Street: "Gothapatna, Bhubaneswar, Odisha",
        landmark: "Gothapatna",
        pin: "123456",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India",
    };

    return (
        <div className="text-white sm:p-6 p-4 lg:pl-[290px] sm:pl-[230px]">
            {/* Edit Button and heading */}
            <div className="flex justify-between">
                <div className="xl:text-3xl lg:text-2xl text-xl sm:mx-0 mx-auto font-bold sm:text-left sm:py-2 text-center">My Profile</div>
                <div
                    onClick={() => setIsEditing(true)}
                    className="md:px-3 sm:my-2 my-1 px-2 lg:text-base sm:text-sm text-[10px] cursor-pointer flex items-center gap-1 text-black rounded-md bg-[#00E1FF]"
                >
                    <FiEdit className="sm:size-4 size-2.5 flex " /> <span>Edit</span>
                </div>
            </div>

            {isEditing && <EditProfile onClose={() => setIsEditing(false)} />}

            {/* Profile Section */}
            <div  className="bg-[#1c1f26] border mx-auto border-gray-400 sm:p-6 p-3 rounded-xl mt-4 flex justify-between items-center">
                {/* name and profile picture */}
                <div className="flex items-center sm:gap-4 gap-2">
                    {/* Profile photo */}
                    <div className="lg:size-16 sm:size-12 size-10 rounded-full bg-gray-500 relative overflow-hidden">
                        <img
                            src={"https://ui-avatars.com/api/?name=Satish+Meher&background=0000&color=fff&rounded=true"}
                            alt="Profile"
                            className={`w-full h-full object-cover transition-opacity duration-300`}
                        />
                    </div>
                    
                    {/* Name */}
                    <h3 className="bg-transparent w-fit py-1 lg:text-lg sm:text-sm text-xs rounded-md outline-none">{defaultUserData.name}</h3>
                </div>

            </div>

            {/* Personal Details Section */}
            <div className="bg-[#1c1f26] border mx-auto border-gray-400 sm:p-6 p-3 rounded-xl mt-4">   
                {/* top section */}
                <div className="flex justify-between items-center">
                    <h3 className="font-bold lg:text-xl sm:text-lg text-base ">Personal Details</h3>     
                </div>
                
                {/* Details */}
                <div className="sm:grid sm:grid-cols-2 flex flex-col gap-y-4 sm:gap-x-24 gap-x-20 mt-2">
                    {/* Email */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Email</p>
                        <p className="lg:text-base text-sm">{defaultUserData.email}</p>
                    </div>

                    {/* Preferred Language - Dropdown */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px] ">Language</p>
                        <p className="lg:text-base text-sm">{defaultUserData.language}</p>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Phone</p>
                        <p className="lg:text-base text-sm">{defaultUserData.phone}</p>
                    </div>

                    <br className="hidden sm:block" />

                    {/* Country */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Country</p>
                        <p className="lg:text-base text-sm">{defaultUserData.country}</p>
                    </div>

                    {/* State */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">State</p>
                        <p className="lg:text-base text-sm">{defaultUserData.state}</p>
                    </div>

                    {/* City */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">City</p>
                        <p className="lg:text-base text-sm">{defaultUserData.city}</p>
                    </div>

                    {/* Street */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Street</p>
                        <p className="lg:text-base text-sm">{defaultUserData.Street}</p>
                    </div>

                    {/* Landmark */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Landmark</p>
                        <p className="lg:text-base text-sm">{defaultUserData.landmark}</p>
                    </div>

                    {/* Pin */}
                    <div>
                        <p className="text-gray-400 lg:text-[17px] sm:text-[15px] text-[13px]">Pin</p>
                        <p className="lg:text-base text-sm">{defaultUserData.pin}</p>
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
