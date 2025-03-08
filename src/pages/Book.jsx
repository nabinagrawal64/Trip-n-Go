/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const API_KEY_OLA = "PBAcSepBB2mZNagmG7i1MMCpeXeZqqzRE2RiVdAg";
const API_KEY_GO_MAPS = 'AlzaSy_J30dfJViJOGlNUaxzzbIqQY3H18AcW1w';

const CabBooking = () => {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [pickupCoords, setPickupCoords] = useState(null);
    const [dropoffCoords, setDropoffCoords] = useState(null);
    const [waypoints, setWaypoints] = useState([]);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [price, setPrice] = useState(null);

    const fetchSuggestions = async (input, setLocation, setCoords) => {
        if (!input) return;
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${API_KEY_OLA}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.predictions.map((place) => place.description));
            if (data.predictions.length > 0) {
                const firstLocation = data.predictions[0].geometry.location;
                setCoords([firstLocation.lat, firstLocation.lng]);
            }
        } catch (error) {
            console.error("Error fetching autocomplete suggestions:", error);
        }
    };

    const getRoute = async () => {
        if (!pickupCoords || !dropoffCoords) return;
        const waypointsString = waypoints.map(wp => `${wp[0]},${wp[1]}`).join('|');
        const url = `https://maps.gomaps.pro/maps/api/directions/json?origin=${pickupCoords.join(',')}&destination=${dropoffCoords.join(',')}&waypoints=${waypointsString}&key=${API_KEY_GO_MAPS}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.routes.length > 0) {
                const route = data.routes[0];
                setDistance(route.legs[0].distance.text);
                setDuration(route.legs[0].duration.text);
                setPrice(parseInt(route.legs[0].distance.value / 1000) * 10);
            }
        } catch (error) {
            console.error("Error fetching route:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-900 text-white">
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    value={pickup}
                    onChange={(e) => {
                        setPickup(e.target.value);
                        fetchSuggestions(e.target.value, setPickup, setPickupCoords);
                    }}
                    placeholder="Enter pick up location"
                    className="p-2 border rounded w-full"
                />
                <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => {
                        setDropoff(e.target.value);
                        fetchSuggestions(e.target.value, setDropoff, setDropoffCoords);
                    }}
                    placeholder="Enter dropoff location"
                    className="p-2 border rounded w-full"
                />
                <input
                    type="text"
                    placeholder="Enter waypoint lat,lng"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const [lat, lng] = e.target.value.split(",").map(Number);
                            if (!isNaN(lat) && !isNaN(lng)) {
                                setWaypoints([...waypoints, [lat, lng]]);
                                e.target.value = "";
                            }
                        }
                    }}
                    className="p-2 border rounded w-full"
                />
                <button onClick={getRoute} className="bg-blue-500 text-white px-4 py-2 rounded">Get Route</button>
            </div>

            <div className="flex justify-between">
                <p>Estimated Distance: <strong>{distance}</strong></p>
                <p>Estimated Duration: <strong>{duration}</strong></p>
                <p>Estimated Price: <strong>₹{price}</strong></p>
            </div>

            <MapContainer center={[20.472833, 85.890161]} zoom={13} style={{ height: "500px", marginTop: "20px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {pickupCoords && <Marker position={pickupCoords} />}
                {dropoffCoords && <Marker position={dropoffCoords} />}
                {waypoints.map((wp, index) => <Marker key={index} position={wp} />)}
            </MapContainer>
        </div>
    );
};

export default CabBooking;
