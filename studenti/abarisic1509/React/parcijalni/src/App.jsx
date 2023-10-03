import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<UserDetails />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
