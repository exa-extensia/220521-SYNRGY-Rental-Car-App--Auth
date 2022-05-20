import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import ProtectedRoute from "./common/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserLandingPage from "./pages/UserLandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Register />} />
					<Route path="login" element={<Login />} />

					<Route element={<ProtectedRoute />}>
						<Route path="admin" element={<AdminDashboard />} />
						<Route path="user" element={<UserLandingPage />} />
					</Route>

					<Route path="*" element={<div>ERROR - NO PAGE</div>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
