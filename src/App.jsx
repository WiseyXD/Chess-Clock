import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SetTimer from "./Components/SetTimer";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
} from "react-router-dom";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path="/body" element={<Body />} />
				<Route path="/" element={<SetTimer />} />
			</Routes>
		</>
	);
}

export default App;
