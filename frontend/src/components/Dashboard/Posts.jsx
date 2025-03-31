import { useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import ImageModal from "./ImageModal";

const posts = [
    {
        id: 1,
        image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
        username: "john_doe",
        location: "New York, USA",
        caption: "A beautiful ride through the city streets! 🚗✨",
        likes: 120,
        comments: [
            { user: "speedster_99", text: "That looks amazing! 🔥" },
            { user: "auto_lover", text: "Where was this taken? 😍" },
        ],
    },
    {
        id: 2,
        image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png",
        username: "emma_wanderlust",
        location: "Grand Canyon, USA",
        caption: "Exploring the beauty of nature. 🌄💚",
        likes: 300,
        comments: [
            { user: "traveler_jay", text: "Breathtaking view! 🌟" },
            { user: "adventure_queen", text: "Wish I was there! 😭" },
        ],
    },
    {
        id: 3,
        image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png",
        username: "mike_in_urban",
        location: "Tokyo, Japan",
        caption: "The neon vibes of Tokyo at night. 🌃✨",
        likes: 240,
        comments: [
            { user: "tokyo_explorer", text: "Best city ever! 🚀" },
            { user: "photo_fanatic", text: "Love this shot! 📷" },
        ],
    },
    {
        id: 4,
        image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-4.png",
        username: "foodie_lover",
        location: "Paris, France",
        caption: "The most delicious croissant I've ever had! 🥐🇫🇷",
        likes: 180,
        comments: [
            { user: "chef_mario", text: "Looks tasty! 😋" },
            { user: "baker_queen", text: "Croissants are life! 🥰" },
        ],
    },
    {
        id: 5,
        image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
        username: "tech_guru",
        location: "Silicon Valley, USA",
        caption: "New innovations coming soon... 🤖🚀",
        likes: 410,
        comments: [
            { user: "startup_enthusiast", text: "Can't wait for this! 🔥" },
            { user: "ai_nerd", text: "The future is now! 🚀" },
        ],
    },
    {
        id: 6,
        image: "https://carento-demo.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
        username: "fitness_freak",
        location: "Los Angeles, USA",
        caption: "Training hard every day! 💪🔥",
        likes: 230,
        comments: [
            { user: "gym_rat", text: "Respect! Keep going! 💯" },
            { user: "athlete_mode", text: "Beast mode! 🏋️‍♂️" },
        ],
    },
];

const Posts = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="text-white min-h-screen sm:p-6 p-4 lg:pl-[290px] sm:pl-[230px]">
            <h2 className="xl:text-3xl lg:text-2xl text-xl mb-5 sm:text-left text-center font-bold">Posts</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
                {posts.map((post) => (
                    <div key={post.id} className="relative group">
                        {/* Car Image */}
                        <img
                            src={post.image}
                            alt={post.name}
                            className="w-full rounded-lg cursor-pointer transition-all duration-300"
                        />

                        {/* Overlay Effect */}
                        <div
                            onClick={() => setSelectedPost(post)}
                            className="absolute inset-0 cursor-pointer bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center"
                        >
                            <div className="flex space-x-4 text-white">
                                {/* Like Button */}
                                <button className="flex items-center space-x-2">
                                    <FaHeart className="text-red-500 text-lg" />
                                    <span>{post.likes || 0}</span>
                                </button>

                                {/* Comment Icon (Static count for now) */}
                                <div className="flex items-center space-x-2">
                                    <FaComment className="text-blue-400 text-lg" />
                                    <span>{post.comments.length}</span>
                                </div>
                            </div>
                        </div>

                        {/* Modal */}
                        {selectedPost && <ImageModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
