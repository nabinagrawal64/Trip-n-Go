/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {MapContainer,Marker,TileLayer,useMap,} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// const API_KEY_GOOGLE = "AIzaSyDLKAZoyY16HjFXgv3N7lZ_H-tM4CVJ9eo";
const API_KEY_GOOGLE = "AIzaSyDLKAZoyY16HjFXgv3N7lZ_H-tM4CVJ9eo  ";
const API_KEY_OLA = "PBAcSepBB2mZNagmG7i1MMCpeXeZqqzRE2RiVdAg";
const API_KEY_GO_MAPS = 'AlzaSy_J30dfJViJOGlNUaxzzbIqQY3H18AcW1w'

const CabBooking = () => {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [waypoints, setWaypoints] = useState("");

    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
    const [waypointsSuggestions, setWaypointsSuggestions] = useState([]);

    const [pickupCoords, setPickupCoords] = useState("");
    const [dropoffCoords, setDropoffCoords] = useState("");
    const [waypointsCoords, setWaypointsCoords] = useState([]);

    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [price, setPrice] = useState(null);

    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [middle, setMiddle] = useState("");

    let start = [20.472833,85.890161]; 
    let end = [20.281103,85.816885]; 

    const fetchSuggestions = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
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
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
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

    const fetchSuggestions3 = async (input, setSuggestions) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.predictions.map((place) => place.description));
            if (data.predictions.length > 0) {
                const firstLocation = data.predictions[0].geometry.location;
                const way = `${firstLocation.lat},${firstLocation.lng}`;
                setMiddle(way);
                console.log(way); // Output: "20.92744,82.82344"
            } else {
                console.log("No location found");
            }
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    const getRoute = async () => {
        if (!origin) return;
        console.log("origin: " + origin);
        console.log("destination: " + destination);
        console.log("waypoints: " + middle);
        
        // const url = `https://api.olamaps.io/routing/v1/directions?origin=${origin}&destinations=${destination}&api_key=${API_KEY_OLA}`;
        const url_go_map = `https://maps.gomaps.pro/maps/api/directions/json?destination=${destination}&origin=${origin}&waypoints=${middle}&key=${API_KEY_GO_MAPS}`
        // const url_google = `https://maps.googleapis.com/maps/api/directions/json?origin=New+York,NY&destination=Los+Angeles,CA&mode=driving&key=${API_KEY_GOOGLE}`;
        console.log("url: ", url_go_map);
        try {
            const response = await fetch(url_go_map);
            console.log("data: ", response);
            const data = await response.json();
            if (data.routes) {
                const route = data.routes[0];
                if(route.legs[1]){
                    setDistance(route.legs[0].distance.text + route.legs[1].distance.text);
                    setDuration(route.legs[0].duration.text + route.legs[1].duration.text);
                    setPrice(parseInt((route.legs[0].distance.value + route.legs[1].distance.value) / 100) * 10); // ₹10 per km

                    console.log("route: ", route);

                    // Set pickup, waypoints & dropoff coordinates
                    setPickupCoords([route.legs[0].start_location.lat, route.legs[0].start_location.lng]);
                    setWaypointsCoords([route.legs[0].end_location.lat, route.legs[0].end_location.lng])
                    setDropoffCoords([route.legs[1].end_location.lat, route.legs[1].end_location.lng]);
                } else {
                    setDistance(route.legs[0].distance.text);
                    setDuration(route.legs[0].duration.text);
                    setPrice(parseInt((route.legs[0].distance.value) / 1000) * 10); // ₹10 per km

                    console.log("route: ", route);

                    // Set pickup & dropoff coordinates
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
                routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(pickupCoords[0], pickupCoords[1]),
                        L.latLng(waypointsCoords[0], waypointsCoords[1]),
                        L.latLng(dropoffCoords[0], dropoffCoords[1]),
                    ],
                    routeWhileDragging: true,
                }).addTo(map);
            } else {
                routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(pickupCoords[0], pickupCoords[1]),
                        L.latLng(dropoffCoords[0], dropoffCoords[1]),
                    ],
                    routeWhileDragging: true,
                }).addTo(map);
            }

            return () => map.removeControl(routingControl);
        }, [map]);

        return null;
    };  

    return (
        <div className="p-6 bg-gray-900 text-white">
            <div className="flex gap-4 mb-4">
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
                        className="p-2 border rounded w-full"
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
                </div>

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
                        placeholder="Enter dropoff location"
                        className="p-2 border rounded w-full"
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
                </div>

                <div className="relative">
                    <input
                        type="text"
                        value={waypoints}
                        onChange={(e) => {
                            setWaypoints(e.target.value);
                            fetchSuggestions3(
                                e.target.value,
                                setWaypointsSuggestions
                            );
                        }}
                        placeholder="Enter waypoints location"
                        className="p-2 border rounded w-full"
                    />
                    {waypointsSuggestions.length > 0 && (
                        <ul className="absolute bg-white text-black border w-full">
                            {waypointsSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        setWaypoints(suggestion);
                                        setWaypointsSuggestions([]);
                                    }}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button
                    onClick={getRoute}
                    className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
                >
                    Get Route
                </button>
            </div>

            <div className="flex justify-between">
                <p>
                    Estimated Distance: <strong>{distance}</strong>
                </p>
                <p>
                    Estimated Duration: <strong>{duration}</strong>
                </p>
                <p>
                    Estimated Price: <strong>₹{price}</strong>
                </p>
            </div>

            {/* Google Map Integration */}
            <MapContainer center={start} zoom={13} style={{ height: "500px", marginTop: "200px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={start} />
                <Marker position={end} />
                <RoutingMachine start={start} end={end} />
            </MapContainer>
        </div>
    );
};

export default CabBooking;
