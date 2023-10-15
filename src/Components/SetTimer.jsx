import { useNavigate } from "react-router-dom";
export default function SetTimer() {
	const navigate = useNavigate();
	function setTime() {
		navigate("/body");
	}

	return (
		<div className="min-h-screen flex flex-col gap-4 items-center justify-center">
			<div className="flex gap-3">
				<h1 className="font-semibold">Player 1</h1>
				{/* <input id="hours" type="number" placeholder="Hours" min="0" /> */}
				<input
					id="minutes"
					type="number"
					placeholder="Minutes"
					min="0"
					max="59"
				/>
				<input
					id="seconds"
					type="number"
					placeholder="Seconds"
					min="0"
					max="59"
				/>
			</div>
			<div className="flex gap-3">
				<h1 className="font-semibold">Player 2</h1>
				{/* <input id="hours" type="number" placeholder="Hours" min="0" /> */}
				<input
					id="minutes"
					type="number"
					placeholder="Minutes"
					min="0"
					max="59"
				/>
				<input
					id="seconds"
					type="number"
					placeholder="Seconds"
					min="0"
					max="59"
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
