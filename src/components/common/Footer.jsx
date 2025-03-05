import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function Footer (){
    return (
        <div className="bg-black text-white px-12 md:px-20 lg:px-30 py-10">
            {/* Subscription Section */}
            <div className="text-center flex flex-col sm:flex-row gap-10 border-b justify-between border-gray-700 pb-8">
                <h2 className="lg:text-2xl xl:text-3xl md:text-[22px] sm:text-xl text-2xl xl:max-w-[600px] lg:max-w-[450px] md:max-w-[420px] sm:max-w-[280px]  flex text-left font-bold">
                    Subscribe to see secret deals prices
                    drop the moment you sign up!
                </h2>
                <div className="sm:mt-6 flex flex-row justify-center items-center gap-3">
                    <div className="flex items-center bg-gray-900 xl:px-4 md:px-3 px-2 xl:py-3 lg:py-2.5 sm:py-2 py-1 rounded-md w-full ">
                        <FaEnvelope className="text-gray-400 lg:mr-3 mr-2 " />
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="bg-transparent outline-none text-white w-full"
                        />
                    </div>
                    <button className="bg-[#00E1FF] cursor-pointer hover:bg-[#00e1ffb9] text-black font-semibold xl:px-5 lg:px-4 px-3 xl:py-3 md:py-2.5 py-2 text-sm lg:text-base rounded-md">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer Links & Contact */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-20 mt-10">
                {/* Contact Section */}
                <div>
                    <p className="flex items-center text-gray-200">
                        <FaMapMarkerAlt className="mr-2 size-5 text-blue-500" />
                        <span className="sm:text-sm font-extralight text-xs">Gothapatna Bhubaneswar, Odisha</span>
                    </p>
                    <p className="flex items-center text-gray-200 mt-3">
                        <FaClock className="mr-2 size-5 text-blue-500" />
                        <span className="sm:text-sm font-extralight text-xs">Hours: 8:00 - 17:00, Mon - Sat</span>
                    </p>
                    <p className="flex items-center text-gray-200 mt-3">
                        <FaEnvelope className="mr-2 text-blue-500" />
                        <span className="sm:text-sm line-clamp-2 font-extralight text-xs">support@carento.com</span>
                    </p>
                    <p className="flex items-center text-gray-00 mt-3">
                        <FaPhone className="mr-2 text-blue-500" />
                        <span className="sm:text-sm font-extralight text-xs">Need help? Call us</span>
                    </p>
                    <p className="text-blue-300 font-bold text-lg mt-1">
                        <span className="sm:text-sm font-semibold text-xs">+91 1234567890</span>
                    </p>
                </div>

                {/* Footer Links Sections */}
                {["Company", "Our Services", "Our Partners", "Support"].map(
                    (section) => (
                        <div key={section}>
                            <h3 className="font-semibold mb-2 text-white">
                                {section}
                            </h3>
                            <ul className="md:text-sm font-extralight text-xs space-y-1">
                                {[
                                    "About Us",
                                    "Our Awards",
                                    "Agencies",
                                    "Copyright Notices",
                                    "Terms of Use",
                                    "Privacy Notice",
                                    "Lost & Found",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="hover:text-gray-500 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                )}
            </div>

            <div className="text-left text-white mt-8 md:text-sm text-xs">
                ©2025 Trip n Go Inc. All rights reserved.
            </div>
        </div>
    );
};

