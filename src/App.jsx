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
	const [whiteMins, setWhiteMins] = useState(0);
	const [blackMins, setBlackMins] = useState(0);
	const [whiteSecs, setWhiteSecs] = useState(0);
	const [blackSecs, setBlackSecs] = useState(0);

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
