import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TimerContext from "../Context";
export default function SetTimer() {
	const navigate = useNavigate();
	const { setWhiteMins, setBlackMins, setWhiteSecs, setBlackSecs } =
		useContext(TimerContext);
	function setTime() {
		navigate("/body");
	}

	return (
		<div className="min-h-screen flex flex-col gap-4 items-center justify-center">
			<h1 className="text-3xl font-semibold">Set Time</h1>
			<div className="flex gap-3">
				<h1 className="font-semibold">Player White</h1>
				{/* <input id="hours" type="number" placeholder="Hours" min="0" /> */}
				<input
					id="minutes"
					type="number"
					placeholder="Minutes"
					min="0"
					max="59"
					onChange={(e) => setWhiteMins(e.target.value)}
				/>
				<input
					id="seconds"
					type="number"
					placeholder="Seconds"
					min="0"
					max="59"
					onChange={(e) => setWhiteSecs(e.target.value)}
				/>
			</div>
			<div className="flex gap-3">
				<h1 className="font-semibold">Player Black</h1>
				{/* <input id="hours" type="number" placeholder="Hours" min="0" /> */}
				<input
					id="minutes"
					type="number"
					placeholder="Minutes"
					min="0"
					max="59"
					onChange={(e) => setBlackMins(e.target.value)}
				/>
				<input
					id="seconds"
					type="number"
					placeholder="Seconds"
					min="0"
					max="59"
					onChange={(e) => setBlackSecs(e.target.value)}
				/>
			</div>
			<div>
				<button
					onClick={setTime}
					className="bg-black text-white px-2 py-3 rounded-md"
				>
					Start Countdown
				</button>
			</div>
		</div>
	);
}
