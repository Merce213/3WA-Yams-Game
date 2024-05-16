import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const NavbarAdmin = () => {
	return (
		<header className="bg-yams-purple text-white fixed top-0 z-50 w-full">
			<nav className="flex container mx-auto items-center justify-between px-3 py-2">
				<NavLink to="/" className="font-yams-title text-xl">
					Yams
				</NavLink>
				<div className="flex items-center gap-2">
					<span>alice@alice.fr</span>
					<FontAwesomeIcon icon={faCircleUser} className="w-6 h-6" />
				</div>
			</nav>
		</header>
	);
};

export default NavbarAdmin;
