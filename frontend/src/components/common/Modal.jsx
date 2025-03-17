/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-50 z-50">
            <div className="bg-[#2a0410] sm:p-6 p-4 rounded-lg xl:w-[500px] lg:w-[420px] sm:w-[350px] w-[300px] shadow-lg border border-[#6b1b2d]">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-white lg:text-lg sm:text-[17px] text-[15px] font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <FiX className="cursor-pointer lg:size-5 sm:size-4 size-3.5" />
                    </button>
                </div>

                {/* Message */}
                <p className="text-gray-300 lg:text-sm sm:text-xs text-[10px] lg:mt-2 mt-1">{message}</p>

                {/* Actions */}
                <div className="flex justify-end lg:text-base sm:text-sm text-xs lg:gap-3 gap-2 lg:mt-4 sm:mt-3 mt-2">
                    <button
                        className="lg:px-4 sm:px-3 px-2 lg:py-2 sm:py-1 py-0.5 cursor-pointer text-gray-300 bg-transparent border border-gray-500 rounded-md hover:border-white"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="lg:px-4 sm:px-3 px-2 lg:py-2 sm:py-1 py-0.5 cursor-pointer text-black bg-[#ff6473] rounded-md hover:bg-[#e05462]"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
