/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import {MapContainer,Marker,TileLayer,useMap,} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaLocationArrow, FaPlus, FaRegDotCircle, FaTrash } from "react-icons/fa";
import "./demo.css";

// const API_KEY_GOOGLE = "AIzaSyDLKAZoyY16HjFXgv3N7lZ_H-tM4CVJ9eo";
const API_KEY_GOOGLE = "AIzaSyDLKAZoyY16HjFXgv3N7lZ_H-tM4CVJ9eo  ";
const API_KEY_OLA = "PBAcSepBB2mZNagmG7i1MMCpeXeZqqzRE2RiVdAg";
const API_KEY_GO_MAPS = 'AlzaSy_J30dfJViJOGlNUaxzzbIqQY3H18AcW1w'

const CabBooking = () => {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    const [waypoints, setWaypoints] = useState([]);
    const [showWaypoints, setShowWaypoints] = useState(false);
    const [activeWaypointIndex, setActiveWaypointIndex] = useState(null);

    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
    const [waypointsSuggestions, setWaypointsSuggestions] = useState([]);

    const [pickupCoords, setPickupCoords] = useState("");
    const [dropoffCoords, setDropoffCoords] = useState("");
    const [waypointsCoords, setWaypointsCoords] = useState([]);

    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [price, setPrice] = useState(null);
    const inputRef = useRef(null); // Reference for input box
    const dropdownRef = useRef(null); // Reference for suggestions box

    useEffect(() => {
        const storedWaypoints = localStorage.getItem("waypoints");
        try {
            // Parse waypoints safely
            const parsedWaypoints = JSON.parse(storedWaypoints);
            // Ensure it's an array
            setWaypoints(Array.isArray(parsedWaypoints) ? parsedWaypoints : []);
        } catch (error) {
            console.error("Error parsing waypoints from localStorage:", error);
            setWaypoints([]); // Default to empty array
        }
    }, []);
    
    // Save to localStorage when waypoints change
    useEffect(() => {
        localStorage.setItem("waypoints", JSON.stringify(waypoints));
    }, [waypoints]);

    // oustide click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)
            ) {
                setWaypointsSuggestions([]); // Hide suggestions
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    let start = [20.472833,85.890161]; 
    let end = [20.281103,85.816885]; 

    useEffect(() => {
        window.scrollTo(0, 0); // Page load hone ke turant baad top pe scroll karega
    }, []);

    const addWaypoint = () => {
        setWaypoints([...waypoints, ""]);
        setShowWaypoints(true);
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

    const fetchSuggestions = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("pickup data: " + JSON.stringify(data.predictions));
            setSuggestions(data.predictions.map((place) => place.description));
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    const fetchSuggestions2 = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.predictions.map((place) => place.description));
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    const fetchSuggestions3 = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.predictions.map((place) => place.description));
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    const parseDuration = (durationText) => {
        let hours = 0, minutes = 0;
        
        // Extract hours
        const hourMatch = durationText.match(/(\d+)\s*hour/);
        if (hourMatch) hours = parseInt(hourMatch[1]);
    
        // Extract minutes
        const minuteMatch = durationText.match(/(\d+)\s*min/);
        if (minuteMatch) minutes = parseInt(minuteMatch[1]);
    
        // Convert everything to minutes
        return hours * 60 + minutes;
    };

    const getRoute = async () => {
        console.log("Pickup: " + pickup);
        console.log("dropoff: " + dropoff);
        console.log("waypoints: " + waypoints);
        if (!pickup || !dropoff) return;
        const waypointsParam = "optimize:true|" + waypoints.join("|");
        
        // const url = `https://api.olamaps.io/routing/v1/directions?origin=${origin}&destinations=${destination}&api_key=${API_KEY_OLA}`;
        let url_go_map = "";
        if(waypoints) url_go_map = `https://maps.gomaps.pro/maps/api/directions/json?destination=${dropoff}&origin=${pickup}&waypoints=${waypointsParam}&key=${API_KEY_GO_MAPS}`
        else url_go_map = `https://maps.gomaps.pro/maps/api/directions/json?destination=${dropoff}&origin=${pickup}&key=${API_KEY_GO_MAPS}`
        // const url_google = `https://maps.googleapis.com/maps/api/directions/json?origin=New+York,NY&destination=Los+Angeles,CA&mode=driving&key=${API_KEY_GOOGLE}`;
        console.log("url: ", url_go_map);
        try {
            const response = await fetch(url_go_map);
            console.log("data: ", response);
            const data = await response.json();
            console.log("data: ", data);
            if (data.routes) {
                const route = data.routes[0];
                console.log("route before:",route);
                if(route.legs.length > 1){
                    let totalDistance = 0;
                    let totalMinutes = 0;
                    let waypointsCoordsArray = [];
                    route.legs.forEach((leg) => {
                        totalDistance += parseFloat(leg.distance.text.replace(" km", "")).toFixed(2);
                        totalMinutes += parseDuration(leg.duration.text) + parseDuration(leg.duration.text);

                        waypointsCoordsArray.push([leg.start_location.lat, leg.start_location.lng]);
                    });
                    // const totalDistance = (parseFloat(route.legs[0].distance.text.replace(" km", "")) + parseFloat(route.legs[1].distance.text.replace(" km", ""))).toFixed(2);;
                    setDistance(totalDistance + " km");

                    const hours = Math.floor(totalMinutes / 60);
                    const minutes = totalMinutes % 60;
                    const formattedDuration = hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
                    setDuration(formattedDuration);

                    const price = parseInt(totalDistance * 10); // Convert meters to km and multiply by rate
                    setPrice(price);

                    console.log("route: ", route);

                    // Set pickup, waypoints & dropoff coordinates
                    setPickupCoords([route.legs[0].start_location.lat, route.legs[0].start_location.lng]);
                    setWaypointsCoords(waypointsCoordsArray);
                    setDropoffCoords([route.legs[route.legs.length - 1].end_location.lat, route.legs[route.legs.length - 1].end_location.lng]);
                } else {
                    setDistance(route.legs[0].distance.text);
                    setDuration(route.legs[0].duration.text);
                    setPrice(parseInt((route.legs[0].distance.value) / 1000) * 10); // ₹10 per km

                    console.log("route after: ", route);

                    setPickupCoords([route.legs[0].start_location.lat, route.legs[0].start_location.lng]);
                    setDropoffCoords([route.legs[0].end_location.lat, route.legs[0].end_location.lng]);
                }

                console.log("pickupCoords: ", pickupCoords);
                console.log("dropoffCoords: ", dropoffCoords);
                console.log("waypointsCoords: ", waypointsCoords);
            }
            else{
                console.log("No routes found !")
            }
        } catch (error) {
            console.error("Error fetching route:", error);
        }
    };

    const RoutingMachine = () => {
        const map = useMap();

        useEffect(() => {
            if (!map) return;
            let routingControl 
            if(waypointsCoords.length > 0) {
                ("waypointsCoords in routing machine:", waypointsCoords);
                routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(pickupCoords[0], pickupCoords[1]),
                        ...waypointsCoords.map(coords => L.latLng(coords[0], coords[1])),
                        L.latLng(dropoffCoords[0], dropoffCoords[1]),
                    ],
                    routeWhileDragging: true,
                    lineOptions: {
                        styles: [{ color: "cyan", weight: 4, opacity: 0.7 }],
                    },
                    draggableWaypoints: false,
                }).addTo(map);
            } else {
                routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(pickupCoords[0], pickupCoords[1]),
                        L.latLng(dropoffCoords[0], dropoffCoords[1]),
                    ],
                    routeWhileDragging: true,
                    lineOptions: {
                        styles: [{ color: "cyan", weight: 4, opacity: 0.9 }],
                    },
                    draggableWaypoints: false,
                }).addTo(map);
            }

            return () => map.removeControl(routingControl);
        }, [map]);

        return null;
    };  

    return (
        <motion.div 
            className="bg-black text-white min-h-screen flex flex-col items-center p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        > 
            <motion.div className="sm:w-[87%] w-[97vw]">
                {/* location + estimated */}
                <motion.div className="sm:w-full w-[90%] mx-auto flex-col gap-20">
                    {/* top items */}
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} 
                        className="flex sm:flex-row flex-col sm:gap-3 justify-between mb-10"
                    >
                        {/* Location */}
                        <motion.div className="flex sm:flex-row flex-col lg:gap-10 md:gap-5 sm:gap-2 ">
                            {/* pickup */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="xl:w-[300px] sm:mb-0 mb-2 lg:w-[200px] md:w-[150px] sm:w-[150px] w-full"
                            >
                                <label className="block sm:mb-3 mb-2 ml-1 font-semibold xl:text-base lg:text-sm  text-xs">
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
                                        placeholder="Pick up location"
                                        className="w-full xl:text-base lg:text-sm sm:text-xs text-[10px] lg:p-3 p-2 border border-gray-400 rounded-md outline-none"
                                    />
                                    {pickupSuggestions.length > 0 && (
                                        <ul className="absolute z-[1000] bg-white text-black border w-full shadow-md max-h-100 overflow-y-auto">
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
                                    <FaLocationArrow className="absolute xl:size-4 lg:size-3 sm:size-2.5 size-3 lg:right-3 lg:top-4 sm:right-2 sm:top-3 top-2.5 right-2 text-gray-400" />
                                </div>
                            </motion.div>

                            {/* dropoff */}
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="xl:w-[300px] sm:mb-0 mb-2 lg:w-[200px] md:w-[150px] sm:w-[150px] w-fulll"
                            >
                                <label className="block sm:mb-3 mb-2 ml-1 font-semibold xl:text-base lg:text-sm text-xs">
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
                                        placeholder="Dropoff location"
                                        className="w-full xl:text-base lg:text-sm sm:text-xs text-[10px] lg:p-3 p-2 border border-gray-400 rounded-md outline-none"
                                    />
                                    {dropoffSuggestions.length > 0 && (
                                        <ul className="absolute z-[1000] bg-white text-black border w-full shadow-md max-h-100 overflow-y-auto">
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
                                    <FaRegDotCircle className="absolute xl:size-4 lg:size-3 sm:size-2.5 size-3 lg:right-3 lg:top-4 sm:right-2 sm:top-3 top-2.5 right-2 text-gray-400" />
                                </div>
                            </motion.div>

                            {/* waypoints */}
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className=""
                            >
                                <label className="block sm:mb-3 mb-2 ml-1 font-semibold xl:text-base lg:text-sm text-xs">
                                    Waypoint location
                                </label>
                                
                                {/* Enter waypoints text and button */}
                                <div className="flex gap-2">
                                    {/* Enter waypoints text */}
                                    <div 
                                        onClick={() => setShowWaypoints(!showWaypoints)}
                                        className="w-full flex justify-between cursor-pointer xl:text-base lg:text-sm sm:text-xs text-[10px] lg:p-3 p-2 border border-gray-400 rounded-md outline-none"
                                    >
                                        <span className="text-white/50"> Waypoint location</span>
                                        <div className="flex items-center ">
                                            {showWaypoints ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>

                                    {/* Add Waypoint Button */}
                                    <div
                                        className="p-2 lg:w-[55px] w-[35px] cursor-pointer bg-gray-700 rounded-md hover:bg-gray-600"
                                        onClick={addWaypoint}
                                    >
                                        <FaPlus className="lg:size-7 xl:pt-1" />
                                    </div>
                                </div>
                                
                                {/* Waypoints Dropdown */}
                                {showWaypoints && (
                                    <div className={`relative w-full bg-gray-900 ${waypoints.length === 0 ? "" : "p-2 mt-2" } rounded-md  shadow-lg z-10`}>
                                        {waypoints.map((waypoint, index) => (
                                            <div key={index} className={`flex items-center gap-2 ${index > 0 ? "mt-2" : "mt-0"} `}>
                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    onFocus={() => setActiveWaypointIndex(index) }
                                                    value={waypoint}
                                                    onChange={(e) => {
                                                        handleWaypointChange(activeWaypointIndex, e.target.value)
                                                        fetchSuggestions3(e.target.value, setWaypointsSuggestions);
                                                    }}
                                                    placeholder="Waypoint location"
                                                    className="w-full xl:text-base lg:text-sm sm:text-xs text-[10px] lg:p-3 p-2 border border-gray-400 rounded-md outline-none"
                                                />
                                                
                                                {waypointsSuggestions.length > 0 && (
                                                    <ul
                                                        ref={dropdownRef}
                                                        className="absolute top-full bg-white text-black border border-gray-300 shadow-lg max-h-40 overflow-y-auto z-[9999] rounded-md"
                                                    >
                                                        {waypointsSuggestions.map((suggestion) => (
                                                            <li
                                                                key={index}
                                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                                onClick={() => {
                                                                    handleWaypointChange(activeWaypointIndex, suggestion)
                                                                    setWaypointsSuggestions([]);
                                                                }}
                                                            >
                                                                {suggestion}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                
                                                {/* delete button */}
                                                <div
                                                    onClick={() => removeWaypoint(index)}
                                                    className="cursor-pointer text-red-500"
                                                >
                                                    <FaTrash />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Get route button and submit button for mobile */}
                        <motion.div className="flex justify-between sm:mt-0 mt-2">
                            <motion.div 
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-cyan-400 xl:mt-9 lg:mt-7 md:mt-8 sm:mt-6 mt-2 lg:text-base md:text-[11px] sm:text-[9px] text-xs cursor-pointer text-black xl:px-8 lg:px-5 px-2 font-semibold lg:my-1 sm:my-3 lg:pt-3 sm:py-2 py-1.5 sm:w-auto lg:h-12 md:h-8 sm:h-12 w-fit lg:translate-y-1 sm:-translate-y-0.5 rounded"    
                                onClick={getRoute}
                            >
                                Get Route
                            </motion.div>
                            
                            {/* Submit button for mobile */}
                            <motion.div 
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="sm:hidden visible bg-cyan-400 mt-2 text-xs cursor-pointer text-black px-2 font-semibold py-1.5 w-fit rounded"    
                                onClick={getRoute}
                            >
                                Submit
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* estimated distance/duration/price */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex items-end font-semibold lg:text-base sm:text-sm text-xs justify-between text-white mb-4"
                    >
                        <div>
                            <p className="text-[#787B7B]">
                                Estimated distance:
                            </p>
                            <p><strong>{distance}</strong></p>
                        </div>
                        <div>
                            <p className="text-[#787B7B]">
                                Estimated duration:
                            </p>
                            <p><strong>{duration}</strong></p>
                        </div>
                        <div>
                            <p className="text-[#787B7B]">
                                Estimated Price:
                            </p>
                            <p><strong>{price}</strong></p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Map Integration */}
                <motion.div 
                    className="w-full rounded-md overflow-hidden relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <MapContainer 
                        center={start} 
                        zoom={13}
                        scrollWheelZoom={false} 
                        touchZoom={true}
                        className="xl:h-[500px] lg:h-[400px] md:h-[350px] sm:h-[320px] h-[90vh] w-screen"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={start} />
                        <Marker position={end} />
                        <RoutingMachine start={start} end={end} />
                    </MapContainer>
                </motion.div>

                {/* submit button */}
                <motion.div className="sm:flex hidden justify-end mt-2">
                    <div 
                        className="bg-cyan-400 lg:text-base sm:text-sm text-xs cursor-pointer text-black lg:px-8 sm:px-3 px-2 font-semibold lg:py-2 sm:py-1.5 p-1 rounded"
                    >
                        Submit
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CabBooking;
