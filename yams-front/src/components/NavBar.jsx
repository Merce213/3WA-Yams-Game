import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<header className="bg-[#373737] text-white fixed top-0 z-50 w-full">
			<nav className="flex container mx-auto items-center justify-between px-3 py-2">
				<NavLink to="/" className="font-yams-title text-xl">
					Yams
				</NavLink>
				<NavLink to="/credits" className="font-yams-body hover:underline hover:underline-offset-2 transition-all duration-200">
					Credits
				</NavLink>
			</nav>
		</header>
	);
};

export default NavBar;
