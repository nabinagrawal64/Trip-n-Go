import { useEffect, useRef, useState } from "react";
import { FaPlus, FaArrowRight, FaTimes } from "react-icons/fa";

const AddVehicle = () => {
    const [input, setInput] = useState({
        companyName: "",
        modelName: "",
        vehicleNumber: "",
        vehicleType: "",
        vehicleDescription: "",
        maxPassengers: "",
        chargingPorts: false,
        musicSystem: false,
        luggageSpace: false,
        wifi: false,
        tv: false,
        acType: "",
        seatType: "",
        numSeats: "",
        pricePerKm: "",
        pricePerHour: "",
        pricePerDay: "",
        maxKmPerHour: "",
        maxKmPerDay: "",
        location: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef(null);


    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    const [images, setImages] = useState([]);

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        console.log("files: ", files);
        const newImages = files.map((file) => ({
            id: URL.createObjectURL(file),
            src: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...newImages]);
    };

    // Remove selected image
    const handleRemoveImage = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <div className={`bg-[#0B1120] w-[98%] flex flex-col justify-start text-white lg:pl-[255px] sm:pl-[200px]`}>
            <form
                onSubmit={handleSubmit}
                className="p-8 rounded-lg w-full"
            >   
                {/* upload image */}
                <div className="my-4 flex flex-col">
                    <label htmlFor="fileUpload" className="block text-sm font-medium mb-2">Upload images</label>
                    <div className="flex lg:gap-10 sm:gap-4 gap-2">

                        {/* show small image */}
                        {images.map((image) => (
                            <div key={image.id} className="relative lg:size-24 sm:size-20 size-16">
                                <img  
                                    src={image.src} 
                                    alt="Uploaded" 
                                    onClick={() => openModal(image.src)}
                                    className="w-full h-full rounded-md object-cover" 
                                />
                                <button
                                    onClick={() => handleRemoveImage(image.id)}
                                    className="absolute top-0 right-0 bg-black text-white rounded-full p-1 text-xs"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        ))}

                        {/* show big image */}
                        {images && isModalOpen && (
                            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
                                <div ref={modalRef}  className="relative bg-white rounded-lg w-auto max-w-[70vw]">
                                    <button
                                        onClick={closeModal}
                                        className="absolute cursor-pointer sm:top-2 sm:right-2 top-1 right-1 text-white bg-black lg:p-1.5 p-1 rounded-full"
                                    >
                                        <FaTimes />
                                    </button>
                                    <img
                                        src={selectedImage}
                                        alt="Enlarged"
                                        className="w-full lg:max-h-[60vh] sm:max-h-[40vh] max-h-[30vh] z-99 object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        )}

                        {/* show plus icon */}
                        <div className="flex flex-col justify-center items-center">
                            <div htmlFor="fileUpload" className="relative lg:size-24 sm:size-20 size-16 bg-gray-700 flex items-center justify-center rounded-md">
                                <input
                                    type="file"
                                    name="images"
                                    className="hidden !w-fit"
                                    id="fileUpload"
                                    onChange={handleFileChange}
                                    multiple
                                    accept="image/*"
                                />
                                <label htmlFor="fileUpload"><FaPlus size={20}  /></label>
                            </div>
                        </div>
                    </div>
                </div>
                        
                {/* vehicle details */}
                <div className="grid sm:grid-cols-2 grid-col-1 lg:gap-x-40 lg:gap-y-5 sm:gap-x-28 sm:gap-y-3 gap-y-2 lg:mb-10 sm:mb-6 mb-4">

                    {/* Company Name */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            // placeholder="Company name"
                            className="input-style lg:!p-3 !p-1 !text-xs"
                            onChange={handleInput}
                        />
                    </div>

                    {/* Model Name */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Model Name</label>
                        <input
                            type="text"
                            name="modelName"
                            // placeholder="Model name"
                            className="input-style lg:!p-3 !p-1 !text-xs"
                            onChange={handleInput}
                        />
                    </div>

                    {/* Vehicle Number */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Vehicle Number</label>
                        <input
                            type="text"
                            name="vehicleNumber"
                            // placeholder="Vehicle number"
                            className="input-style lg:!p-3 !p-1 !text-xs"
                            onChange={handleInput}
                        />
                    </div>

                    {/* Vehicle Type */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Vehicle Type</label>
                        <select
                            name="vehicleType"
                            className="input-style lg:!p-3 !p-1 !text-xs"
                            onChange={handleInput}
                        >
                            <option className="text-black font-medium" value="bus">Bus</option>
                            <option className="text-black font-medium" value="car">Car</option>
                            <option className="text-black font-medium" value="bus">Bus</option>
                            <option className="text-black font-medium" value="car">Car</option>
                        </select>
                    </div>
                </div>
                
                {/* vehicle Description */}
                <div>
                    <label className="block lg:text-sm text-xs font-medium">Vehicle Description</label>
                    <textarea
                        name="vehicleDescription"
                        className="input-style mt-2 lg:p-2 p-1 h-30 lg:text-sm text-xs w-full"
                        onChange={handleInput}
                    />
                </div>
                
                {/* ammenities */}
                <div className="mt-4 space-y-5">
                    <label className="block lg:text-lg font-medium text-sm">Ammenities</label>

                    <div className="grid grid-cols-3 gap-2 lg:mx-2 mx-1">
                    {[
                        "Charging Ports",
                        "Music System",
                        "Luggage Space",
                        "Wifi",
                        "TV",
                    ].map((amenity) => (
                        <label
                            key={amenity}
                            className="flex items-center space-x-2 lg:!p-3 !p-1 !text-xs"
                        >
                            <input
                                type="checkbox"
                                name={amenity}
                                className="lg:h-5 lg:w-5 w-3 h-3 cursor-pointer border border-white bg-transparent appearance-none rounded-sm checked:bg-[#0BB6D3] checked:border-[#0BB6D3] checked:outline-none checked:after:content-['✔'] checked:after:text-black lg:checked:after:text-xl checked:after:text-xs checked:after:flex checked:after:justify-center lg:checked:after:-mt-1 checked:after:-mt-0.5  checked:after:items-center" 
                                onChange={handleInput}
                            />
                            <span className="lg:text-sm text-[10px] sm:text-xs">
                                {amenity}
                            </span>
                        </label>
                    ))}
                    </div>
                </div>
                
                {/* extra things */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-40 gap-y-5 my-10">

                    {/* Ac type */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">AC Type</label>
                        <select name="acType" className="input-style lg:!p-3 !p-1 !text-xs" onChange={handleInput}>
                            <option className="text-black font-medium" value="AC">AC</option>
                            <option className="text-black font-medium" value="non AC">Non-AC</option>
                        </select>
                    </div>
                
                    {/* Seat type */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Seat Type</label>
                        <select name="seatType" className="input-style lg:!p-3 !p-1 !text-xs" onChange={handleInput}>
                            <option className="text-black font-medium" value="Seat">Seat</option>
                            <option className="text-black font-medium" value="Sleeper">Sleeper</option>
                        </select>
                    </div>
                
                    {/* Number of Seats */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Number of Seats</label>
                        <input 
                            type="number" 
                            name="numSeats" 
                            className="input-style lg:!p-3 !p-1 !text-xs" 
                            onChange={handleInput} 
                        />
                    </div>
                    
                    {/* max Passengers */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Maximum Passengers</label>
                        <input
                            type="number"
                            name="maxPassengers"
                            className="input-style lg:!p-3 !p-1 !text-xs"
                            onChange={handleInput}
                        />
                    </div>

                    {/* price per hour */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Price per Hour</label>
                        <input 
                            type="number" 
                            name="pricePerHour" 
                            className="input-style lg:!p-3 !p-1 !text-xs" 
                            onChange={handleInput} 
                        />
                    </div>

                    {/* max km per hour */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Max km per Hour</label>
                        <input 
                            type="number" 
                            name="maxKmPerHour" 
                            className="input-style lg:!p-3 !p-1 !text-xs" 
                            onChange={handleInput}
                        />
                    </div>

                    {/* price per day */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Price per Day</label>
                        <input 
                            type="number" 
                            name="pricePerDay" 
                            className="input-style lg:!p-3 !p-1 !text-xs" 
                            onChange={handleInput}
                        />
                    </div>

                    {/* max Km Per Day */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Max km per Day</label>
                        <input 
                            type="number" 
                            name="maxKmPerDay" 
                            className="input-style lg:!p-3 !p-1 !text-xs" 
                            onChange={handleInput} 
                        />
                    </div>

                    {/* price per km */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Price per km</label>
                        <input 
                            type="number" 
                            name="pricePerKm" 
                            className="input-style lg:!p-3 !p-1 !text-xs" 
                            onChange={handleInput} 
                        />
                    </div>

                    {/* location */}
                    <div>
                        <label className="block lg:text-sm text-xs font-medium mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="input-style lg:!p-3 !p-1 !text-xs"
                            onChange={handleInput}
                        />
                    </div>

                </div>

                {/* submit button */}
                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className="flex items-center bg-blue-500 lg:py-2 lg:px-5 py-1 px-2 rounded-md hover:bg-blue-600"
                    >
                        Submit <FaArrowRight className="ml-2" />
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddVehicle;
