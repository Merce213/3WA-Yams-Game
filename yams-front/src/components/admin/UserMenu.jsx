import { Navigate, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../features/auth";

const UserMenu = () => {

    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="bg-white text-black shadow-lg rounded-lg absolute right-0 top-full mt-2 py-2 w-48">
            <div className="px-4 py-2">
                <button onClick={handleLogout} className="w-full text-left rounded-md p-1 hover:text-white hover:bg-yams-active-link">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default UserMenu;