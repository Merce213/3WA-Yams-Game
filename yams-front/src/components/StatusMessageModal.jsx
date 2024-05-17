import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const StatusMessageModal = ({ message, type, visible, onClose }) => {
    useEffect(() => {
        let timer;
        if (message && visible) {
            timer = setTimeout(() => {
                if (visible) {
                    onClose();
                }
            }, 2000);
        }
    
        return () => clearTimeout(timer);
    }, [message, visible, onClose]);

    return (
        <div className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center ${visible && 'animate-slide-down'}`}>
            <div className="bg-white rounded shadow-2xl p-8 m-4 max-w-xs max-h-full text-center min-w-[300px]">
                <FontAwesomeIcon
                    icon={type === 'error' ? faTimesCircle : faCheckCircle}
                    className={`mb-4 text-3xl ${type === 'error' ? 'text-red-500' : 'text-green-500'}`}
                />
                <h2 className={`text-2xl font-semibold mb-4 ${type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                    {type === 'error' ? 'Sorry :(' : 'Success!'}
                </h2>
                <p className="text-gray-700 font-semibold">{message}</p>
                <div className="mt-8">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
export default StatusMessageModal;