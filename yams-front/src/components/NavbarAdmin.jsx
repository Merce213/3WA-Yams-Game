import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import UserMenu from "./admin/UserMenu";

const NavbarAdmin = ({user}) => {

	const [showUserMenu, setShowUserMenu] = useState(false);
	
    const handleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

	return (
        <header className="bg-yams-purple text-white fixed top-0 z-50 w-full">
            <nav className="flex items-center justify-between px-4 py-2">
                <NavLink to="/" className="font-yams-title text-xl lg:ps-16">
                    Yams
                </NavLink>
                <div className="flex items-center gap-2">
                    <span>{user.email}</span>
                    <button onClick={handleUserMenu}>
                        <FontAwesomeIcon icon={faCircleUser} className="w-6 h-6" />
                    </button>
                    {showUserMenu && <UserMenu />}
                </div>
            </nav>
        </header>
    );
};

export default NavbarAdmin;
