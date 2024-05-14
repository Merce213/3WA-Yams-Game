import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutNav from "./components/LayoutNav";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="*"
				element={
					<LayoutNav>
						<h1>Not Found</h1>
					</LayoutNav>
				}
			/>
		</Routes>
	);
};

export default App;
