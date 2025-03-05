import { Heart, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
export default function ImageModal({ post, onClose }){
    if (!post) return null;
    console.log(post);
    // eslint-disable-next-line
    const modalRef = useRef(null);

    //eslint-disable-next-line
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/15 bg-opacity-80 flex items-center justify-center p-4">
            <div ref={modalRef} className="bg-white rounded-lg flex overflow-hidden lg:w-auto sm:w-5/6 lg:h-[50%] w-11/12 sm:h-96 h-44">
                {/* Left Side: Image */}
                <div className="sm:w-3/5 w-[55%]">
                    <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-fit"
                    />
                </div>

                {/* Right Side: Likes & Comments */}
                <div className="sm:w-2/5 w-[45%] lg:p-4 sm:p-3 p-2 flex flex-col text-black">
                    
                    <h2 className="font-bold sm:text-base text-xs">{post.username}</h2>
                    <p className="text-gray-500 sm:text-sm text-[10px]">{post.location}</p>
                    <p className="mt-2 sm:text-sm text-[8px]">{post.caption}</p>
                    <hr className="my-2" />

                    {/* Comments Section */}
                    <div className="flex-1 overflow-y-auto">
                        {post.comments.map((comment, index) => (
                            <p key={index} className="sm:text-base text-[10px]">
                                <b>{comment.user}</b> {comment.text}
                            </p>
                        ))}
                    </div>

                    {/* Like & Comment Actions */}
                    <div className="flex justify-evenly gap-1 sm:mt-2 mt-0.5">
                        <span className="flex sm:gap-2 gap-0.5 lg:text-base sm:text-sm text-[8px]"><Heart className="text-red-500 fill-red-600 xl:size-6 lg:size-5 sm:size-4 size-3" /> {post.likes} Likes</span>
                        <span className="flex sm:gap-2 gap-0.5 lg:text-base sm:text-sm text-[8px]"><MessageCircle className=" fill-gray-300 xl:size-6 lg:size-5 sm:size-4 size-3" /> {post.comments.length} Comments </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
