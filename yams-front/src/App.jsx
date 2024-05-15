import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutNav from "./components/LayoutNav";
import Login from "./pages/Login";
import GameOver from "./pages/GameOver";
import Win from "./pages/Win";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route
				path="/win"
				element={
					<LayoutNav>
						<Win />
					</LayoutNav>
				}
			/>
			<Route
				path="/gameover"
				element={
					<LayoutNav>
						<GameOver />
					</LayoutNav>
				}
			/>
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
