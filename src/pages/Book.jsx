import { useState, useEffect } from "react";
import { FaTrash, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function WaypointSelector() {
    const [waypoints, setWaypoints] = useState([]);
    const [showWaypoints, setShowWaypoints] = useState(false);

    useEffect(() => {
        const storedWaypoints = JSON.parse(localStorage.getItem("waypoints")) || [];
        setWaypoints(storedWaypoints);
    }, []);
    
    useEffect(() => {
        localStorage.setItem("waypoints", JSON.stringify(waypoints));
    }, [waypoints]);

    const addWaypoint = () => {
        setWaypoints([...waypoints, ""]);
    };

    const removeWaypoint = (index) => {
        const updatedWaypoints = waypoints.filter((_, i) => i !== index);
        setWaypoints(updatedWaypoints);
    };

    const handleWaypointChange = (index, value) => {
        const updatedWaypoints = [...waypoints];
        updatedWaypoints[index] = value;
        setWaypoints(updatedWaypoints);
    };

    return (
        <div className="relative bg-black text-white p-4 rounded-md">
            <div className="flex gap-4">
                {/* Pickup Location */}
                <div className="flex-1">
                    <label className="font-bold">Pick up location</label>
                    <input
                        className="w-full p-2 bg-gray-800 rounded-md"
                        placeholder="Enter pick up location"
                    />
                </div>

                {/* Dropoff Location */}
                <div className="flex-1">
                    <label className="font-bold">Dropoff location</label>
                    <input
                        className="w-full p-2 bg-gray-800 rounded-md"
                        placeholder="Enter Dropoff location"
                    />
                </div>

                {/* Waypoint Location */}
                <div className="flex-1 relative">
                    <label className="font-bold">Waypoint location</label>
                    <div
                        className="w-full flex items-center justify-between p-2 bg-gray-800 rounded-md cursor-pointer"
                        onClick={() => setShowWaypoints(!showWaypoints)}
                    >
                        <span>Enter Waypoint location</span>
                        {showWaypoints ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {/* Waypoints Dropdown */}
                    {showWaypoints && ( 
                        <div className="absolute top-full left-0 w-full bg-gray-900 p-2 rounded-md mt-1 shadow-lg z-10">
                            {waypoints.map((waypoint, index) => (
                                <div key={index} className="flex items-center gap-2 mt-2" >
                                    <input
                                        className="w-full p-2 bg-gray-800 rounded-md"
                                        value={waypoint}
                                        onChange={(e) => handleWaypointChange(index, e.target.value)}
                                        type="text"
                                        placeholder="Enter Waypoint"
                                    />

                                    {/* delete button */}
                                    <button
                                        onClick={() => removeWaypoint(index)}
                                        className="cursor-pointer text-red-500"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Add Waypoint Button */}
                <button
                    className="p-2 bg-gray-700 rounded-md hover:bg-gray-600"
                    onClick={addWaypoint}
                >
                    <FaPlus />
                </button>
            </div>

            
        </div>
    );
}
