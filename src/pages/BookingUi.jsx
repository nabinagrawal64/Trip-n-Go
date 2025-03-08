/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaLocationArrow, FaRegDotCircle } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const API_KEY = "PBAcSepBB2mZNagmG7i1MMCpeXeZqqzRE2RiVdAg";

export default function BookingUI() {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
    const [pickupCoords, setPickupCoords] = useState("");
    const [dropoffCoords, setDropoffCoords] = useState("");
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [price, setPrice] = useState(null);
    const [routePath, setRoutePath] = useState([]);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    const getRoute = async () => {
        if (!origin ) return;
        console.log("origin: " + origin);
        
        const url = `https://api.olamaps.io/routing/v1/directions?origin=${origin}&destinations=${destination}&api_key=${API_KEY}`
        console.log("url: ", url)
        try {
            const response = await fetch(url)
            console.log("data: ",response)
            const data = await response.json();
            if (data.routes) {
                const route = data.routes[0];
                setDistance(route.legs[0].distance.text);
                setDuration(route.legs[0].duration.text);
                setPrice(parseInt(route.legs[0].distance.value / 1000) * 10); // ₹10 per km

                // Extract coordinates for route path
                const path = route.legs[0].steps.map((step) => [
                    step.start_location.lat,
                    step.start_location.lng,
                ]);
                setRoutePath(path);

                // Set pickup & dropoff coordinates
                setPickupCoords(route.legs[0].start_location);
                setDropoffCoords(route.legs[0].end_location);
            }
        } catch (error) {
            console.error("Error fetching route:", error);
        }
    };

    const fetchSuggestions = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.predictions.map((place) => place.description));
            if (data.predictions.length > 0) {
                const firstLocation = data.predictions[0].geometry.location;
                const or = `${firstLocation.lat},${firstLocation.lng}`;
                setOrigin(or);
                console.log(or); // Output: "20.92744,82.82344"
            } else {
                console.log("No location found");
            }
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    const fetchSuggestions2 = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.predictions.map((place) => place.description));
            if (data.predictions.length > 0) {
                const firstLocation = data.predictions[0].geometry.location;
                const or = `${firstLocation.lat},${firstLocation.lng}`;
                setDestination(or);
                console.log(or); // Output: "20.92744,82.82344"
            } else {
                console.log("No location found");
            }
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
            <div className="w-[87%]">
                <div className="w-full flex gap-20">
                    {/* location */}
                    <div className="flex flex-col w-1/3">
                        {/* pickup */}
                        <div className="mb-7">
                            <label className="block mb-3 font-semibold">
                                Pick up location
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={pickup}
                                    onChange={(e) => {
                                        setPickup(e.target.value);
                                        fetchSuggestions(
                                            e.target.value,
                                            setPickupSuggestions
                                        );
                                    }}
                                    placeholder="Enter pick up location"
                                    className="w-full p-3 border border-gray-400 rounded-md outline-none"
                                />
                                {pickupSuggestions.length > 0 && (
                                    <ul className="absolute bg-white text-black border w-full">
                                        {pickupSuggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => {
                                                    setPickup(suggestion);
                                                    setPickupSuggestions([]);
                                                }}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <FaLocationArrow className="absolute right-3 top-4 text-gray-400" />
                            </div>
                        </div>

                        {/* dropoff */}
                        <div className="mb-5">
                            <label className="block mb-3 font-semibold">
                                Dropoff location
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={dropoff}
                                    onChange={(e) => {
                                        setDropoff(e.target.value);
                                        fetchSuggestions2(
                                            e.target.value,
                                            setDropoffSuggestions
                                        );
                                    }}
                                    placeholder="Enter Dropoff location"
                                    className="w-full p-3 border border-gray-400 rounded-md outline-none"
                                />
                                {dropoffSuggestions.length > 0 && (
                                    <ul className="absolute bg-white text-black border w-full">
                                        {dropoffSuggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => {
                                                    setDropoff(suggestion);
                                                    setDropoffSuggestions([]);
                                                }}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <FaRegDotCircle className="absolute right-3 top-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    
                    {/* estimated distance/duration/price */}
                    <div className="w-2/3 flex items-end font-semibold lg:text-base sm:text-sm text-xs justify-between text-white mb-4">
                        <div>
                            <p className="text-[#787B7B]">
                                Estimated distance:
                            </p>
                            <p><strong>{distance}</strong></p>
                        </div>
                        <div>
                            <p className="text-[#787B7B]">
                                Estimated duration
                            </p>
                            <p><strong>{duration}</strong></p>
                        </div>
                        <div>
                            <p className="text-[#787B7B]">
                                Estimated Price
                            </p>
                            <p><strong>{price}</strong></p>
                        </div>
                    </div>
                </div>
                
                {/* get routenbutton */}
                <div className="flex justify-start mb-8">
                    <div 
                        className="bg-cyan-400 cursor-pointer text-black px-8 font-semibold py-2 rounded"    
                        onClick={getRoute}
                    >
                        Get Route
                    </div>
                </div>
                
                {/* map */}
                <div className="w-full h-96 bg-gray-900 rounded-md overflow-hidden relative">
                    <MapContainer
                        center={[27.7172, 85.324]} // Default location (Kathmandu)
                        zoom={13}
                        style={{ height: "500px", width: "100%" }}
                    >
                        <TileLayer
                            url={`https://api.olamaps.io/tiles/v1/styles/default-light-standard/static/77.61,12.93,15/800x600.png?path=77.61,12.93|77.61190639293811,12.937637130956137|width:6|stroke:green&api_key=${API_KEY}`}
                        />
                        
                        {/* Pickup Marker */}
                        {pickupCoords && (
                            <Marker position={[pickupCoords.lat, pickupCoords.lng]} />
                        )}
    
                        {/* Dropoff Marker */}
                        {dropoffCoords && (
                            <Marker position={[dropoffCoords.lat, dropoffCoords.lng]} />
                        )}
    
                        {/* Route Polyline */}
                        {routePath.length > 0 && (
                            <Polyline positions={routePath} color="blue" />
                        )}
                    </MapContainer>
                </div>
                
                {/* submit button */}
                <div className="flex justify-end mt-2">
                    <div 
                        className="bg-cyan-400 cursor-pointer text-black px-8 font-semibold py-2 rounded"
                    >
                        Submit
                    </div>
                </div>

            </div>
        </div>
    );
}
