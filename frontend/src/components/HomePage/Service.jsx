export default function ServiceCard({service :{ image, title, properties }}){
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
                src={image}
                alt={title}
                className="w-full h-auto "
            />
            <div className="absolute lg:bottom-5 sm:bottom-3 bottom-3 bg-[#191919]/80 bg-opacity-60 text-white xl:p-4 lg:p-3 sm:p-2 px-1.5 py-2 lg:mx-3 mx-2 sm:mx-2 rounded-2xl w-[90%] flex justify-between items-center">
                <div>
                    <h3 className="text-xs sm:text-sm xl:text-base font-semibold">
                        {title}
                    </h3>
                    <p className="text-[10px] sm:text-xs xl:text-sm text-gray-400">
                        {properties}
                    </p>
                </div>
                <button type="text" className="sm:text-xs md:text-sm lg:text-base xl:text-lg ">➝</button>
            </div>
        </div>
    );
};
