import NavBar from "./NavBar";

const LayoutNav = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default LayoutNav;
