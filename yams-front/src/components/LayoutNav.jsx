import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import NavbarAdmin from "./NavbarAdmin";
import Sidebar from "./Sidebar";
import { useCheckAuthQuery } from "../features/user";

const LayoutNav = ({ children }) => {
	const location = useLocation();
	const isAdmin = location.pathname.startsWith("/admin");
	const { data, error, isLoading } = useCheckAuthQuery();


	return isAdmin ? (
		<>
			<NavbarAdmin user={data}/>
			<main className="max-h-[100dvh]">
				<div className="h-[100dvh] flex">
					<Sidebar />
					{children}
				</div>
			</main>
		</>
	) : (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default LayoutNav;
