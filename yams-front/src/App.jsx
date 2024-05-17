import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutNav from "./components/LayoutNav";
import Login from "./pages/Login";
import GameOver from "./pages/GameOver";
import Win from "./pages/Win";
import Game from "./pages/Game";
import Dashboard from "./pages/Dashboard";
import AdminPastries from "./pages/AdminPastries";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Credits from "./pages/Credits";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/game"
				element={
					<LayoutNav>
						<Game />
					</LayoutNav>
				}
			/>
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
			<Route
				path="/credits"
				element={
					<LayoutNav>
						<Credits/>
					</LayoutNav>
				}
			/>
			<Route path="/admin/*" element={<ProtectedRoutes />}>
				<Route path="dashboard" element={
					<LayoutNav>
					<Dashboard />
					</LayoutNav>
				}/>
				<Route path="pastries" element={
					<LayoutNav>
					<AdminPastries />
					</LayoutNav>
				}/>
			</Route>
		</Routes>
	);
};

export default App;
