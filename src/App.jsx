import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SetTimer from "./Components/SetTimer";
import { Route, Routes } from "react-router-dom";
import TimerContext from "./Context";
function App() {
	// WSL Added
	const [whiteMins, setWhiteMins] = useState(null);
	const [blackMins, setBlackMins] = useState(null);
	const [whiteSecs, setWhiteSecs] = useState(null);
	const [blackSecs, setBlackSecs] = useState(null);

	return (
		<>
			<TimerContext.Provider
				value={{
					setWhiteMins,
					setBlackMins,
					setWhiteSecs,
					setBlackSecs,
					whiteMins,
					blackMins,
					whiteSecs,
					blackSecs,
				}}
			>
				<Routes>
					<Route path="/body" element={<Body />} />
					<Route path="/" element={<SetTimer />} />
				</Routes>
			</TimerContext.Provider>
		</>
	);
}

export default App;
