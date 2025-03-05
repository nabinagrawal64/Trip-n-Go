/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#2a0410] p-6 rounded-lg w-[400px] shadow-lg border border-[#6b1b2d]">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-white text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <FiX size={20} />
                    </button>
                </div>

                {/* Message */}
                <p className="text-gray-300 text-sm mt-2">{message}</p>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        className="px-4 py-2 text-gray-300 bg-transparent border border-gray-500 rounded-md hover:border-white"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-black bg-[#ff6473] rounded-md hover:bg-[#e05462]"
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
