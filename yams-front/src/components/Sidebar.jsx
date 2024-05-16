import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh, faListUl } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	return (
		<aside className="lg:w-64 h-full bg-[#F9F9F9] border-r border-[#C7C7C7] flex-shrink flex-grow-0">
			<div className="h-full pt-28 p-4">
				<div className="flex flex-col items-center gap-5 w-full">
					<NavLink
						to="/admin"
						end
						title="Dashboard"
						className={({ isActive }) =>
							`w-full lg:ps-5 flex items-center gap-4 p-1 rounded-md ${
								isActive && "text-white bg-yams-active-link"
							}`
						}
					>
						<FontAwesomeIcon
							icon={faGaugeHigh}
							className="w-6 h-6"
						/>
						<span className="hidden lg:block">Dashboard</span>
					</NavLink>
					<NavLink
						to="/admin/pastries"
						title="Pastries"
						className={({ isActive }) =>
							`w-full lg:ps-5 flex items-center gap-4 p-1 rounded-md ${
								isActive && "text-white bg-yams-active-link"
							}`
						}
					>
						<FontAwesomeIcon icon={faListUl} className="w-6 h-6" />
						<span className="hidden lg:block">Pastries</span>
					</NavLink>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
