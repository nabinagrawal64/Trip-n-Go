/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import {MapContainer,Marker,TileLayer,useMap,} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaLocationArrow, FaPlus, FaRegDotCircle, FaTrash } from "react-icons/fa";
import "./demo.css"
import { useNavigate } from "react-router";

// const API_KEY_GOOGLE = "AIzaSyDLKAZoyY16HjFXgv3N7lZ_H-tM4CVJ9eo";
const API_KEY_GOOGLE = "AIzaSyDLKAZoyY16HjFXgv3N7lZ_H-tM4CVJ9eo  ";
const API_KEY_OLA = "PBAcSepBB2mZNagmG7i1MMCpeXeZqqzRE2RiVdAg";
const API_KEY_GO_MAPS = 'AlzaSy_J30dfJViJOGlNUaxzzbIqQY3H18AcW1w'

const Confirmation = () => {
    const navigate = useNavigate();

    let start = [20.472833,85.890161]; 
    let end = [20.281103,85.816885]; 

    useEffect(() => {
        window.scrollTo(0, 0); // Page load hone ke turant baad top pe scroll karega
    }, []);

    // const RoutingMachine = () => {
    //     const map = useMap();

    //     useEffect(() => {
    //         if (!map) return;
    //         let routingControl 
            
    //         routingControl = L.Routing.control({
    //             waypoints: [
    //                 L.latLng(pickupCoords[0], pickupCoords[1]),
    //                 L.latLng(dropoffCoords[0], dropoffCoords[1]),
    //             ],
    //             routeWhileDragging: true,
    //             lineOptions: {
    //                 styles: [{ color: "cyan", weight: 4, opacity: 0.9 }],
    //             },
    //             draggableWaypoints: false,
    //         }).addTo(map);

    //         return () => map.removeControl(routingControl);
    //     }, [map]);

    //     return null;
    // };  

    return (
        <motion.div 
            className="bg-black text-white min-h-screen flex flex-col items-center p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        > 
            <motion.div className="sm:w-[87%] w-full">
                
                {/* estimated distance/duration/price */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-end font-semibold lg:text-base sm:text-sm text-[10px] justify-between text-white mb-4"
                >
                    <div>
                        <p className="text-[#787B7B]">
                            Estimated distance:
                        </p>
                        <p><strong>100 km</strong></p>
                    </div>
                    <div>
                        <p className="text-[#787B7B]">
                            Estimated duration:
                        </p>
                        <p><strong>2 hours 30 mins</strong></p>
                    </div>
                    <div>
                        <p className="text-[#787B7B]">
                            Estimated Price:
                        </p>
                        <p><strong>500 /-</strong></p>
                    </div>
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
                        className="lg:h-[200px] md:h-[150px] sm:h-[100px] h-[100px] w-screen"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={start} />
                        <Marker position={end} />
                        {/* <RoutingMachine start={start} end={end} /> */}
                    </MapContainer>
                </motion.div>

                {/* Items */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} 
                    className="flex flex-col gap-3 mt-5 px-2"
                >      
                    {/* location */}
                    <motion.div className="flex justify-between">
                        {/* pickup */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[180px] w-[120px]  "
                        >
                            <label className="block lg:mb-3 sm:mb-2 mb-1 ml-1 font-semibold xl:text-base lg:text-sm text-[10px]">
                                Pickup location
                            </label>
                            <div className="relative">
                                <p className="flex lg:text-sm sm:text-xs text-[10px] truncate items-center lg:gap-2 sm:gap-1 border lg:px-5 lg:py-3 sm:px-3 sm:py-2 px-2 py-1 rounded-lg">
                                    Paikmal, Bargarh, Odisha
                                </p>
                            </div>
                        </motion.div>

                        {/* dropoff */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[180px] w-[120px] "
                        >
                            <label className="block lg:mb-3 sm:mb-2 mb-1 ml-1 font-semibold xl:text-base lg:text-sm text-[10px]">
                                Dropoff location
                            </label>
                            <div className="relative">
                                <p className="flex lg:text-sm sm:text-xs text-[10px] truncate items-center lg:gap-2 sm:gap-1 border lg:px-5 lg:py-3 sm:px-3 sm:py-2 px-2 py-1 rounded-lg">
                                    IIIT Bhubaneswar, Bhubaneswar, Odisha
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    {/* Date */}
                    <motion.div className="flex justify-between">
                        {/* Start Date */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[180px] w-[120px]"
                        >
                            <label className="block lg:mb-3 sm:mb-2 mb-1 ml-1 font-semibold xl:text-base lg:text-sm text-[10px]">
                                Start Date
                            </label>
                            <div className="relative">
                                <p className="flex lg:text-sm sm:text-xs text-[10px] truncate items-center lg:gap-2 sm:gap-1 border lg:px-5 lg:py-3 sm:px-3 sm:py-2 px-2 py-1 rounded-lg">
                                    20/03/2025
                                </p>
                            </div>
                        </motion.div>

                        {/* End Date */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[180px] w-[120px]"
                        >
                            <label className="block lg:mb-3 sm:mb-2 mb-1  ml-1 font-semibold xl:text-base lg:text-sm text-[10px]">
                                End Date
                            </label>
                            <div className="relative">
                                <p className="flex lg:text-sm sm:text-xs text-[10px] truncate items-center lg:gap-2 sm:gap-1 border lg:px-5 lg:py-3 sm:px-3 sm:py-2 px-2 py-1 rounded-lg">
                                    30/03/2025
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Price and Number of Passengers */}
                    <motion.div className="flex justify-between">
                        {/* Price */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[180px] w-[120px]"
                        >
                            <label className="block lg:mb-3 sm:mb-2 mb-1  ml-1 font-semibold xl:text-base lg:text-sm text-[10px]">
                                Price
                            </label>
                            <div className="relative">
                                <p className="flex lg:text-sm sm:text-xs text-[10px] truncate items-center lg:gap-2 sm:gap-1 border lg:px-5 lg:py-3 sm:px-3 sm:py-2 px-2 py-1 rounded-lg">
                                    $ 500 /-
                                </p>
                            </div>
                        </motion.div>

                        {/* Number of Passengers */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[180px] w-[120px]"
                        >
                            <label className="block lg:mb-3 sm:mb-2 mb-1 ml-1 font-semibold xl:text-base lg:text-sm text-[10px]">
                                Number of Passengers
                            </label>
                            <div className="relative">
                                <p className="flex lg:text-sm sm:text-xs text-[10px] truncate items-center lg:gap-2 sm:gap-1 border lg:px-5 lg:py-3 sm:px-3 sm:py-2 px-2 py-1 rounded-lg">
                                    8
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* special request */}
                <motion.div className="mt-5 px-2">
                    <label className="block lg:mb-3 sm:mb-2 mb-1 ml-1 font-semibold xl:text-base lg:text-sm sm:text-xs text-[10px]">
                        Special Request
                    </label>
                    <textarea 
                        className="w-full lg:h-[150px] lg:text-sm sm:text-xs text-[10px] sm:h-[100px] h-[80px] border lg:p-3 sm:p-2 p-1 rounded-lg"
                        placeholder="Enter your special request"
                    />

                </motion.div>

                {/* submit button */}
                <motion.div 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex justify-end mt-2 px-2"
                    onClick={() => navigate("/booking/confirmation")}
                >
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

export default Confirmation;
