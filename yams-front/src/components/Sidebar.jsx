import { NavLink } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

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
						<SpeedIcon color="" />
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
						<FormatListBulletedIcon color="" />
						<span className="hidden lg:block">Pastries</span>
					</NavLink>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
