import { BiPauseCircle } from "react-icons/bi";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
import { useState, useContext } from "react";
import TimerContext from "../Context";
export default function Body() {
	const [isPause, setIsPause] = useState(true);
	const { whiteMins, blackMins, whiteSecs, blackSecs } =
		useContext(TimerContext);
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-3 ">
			<h1 className="text-3xl font-semibold">Timer</h1>
			<div className="border">
				<h2>White</h2>
				<h3>{whiteMins + " : " + whiteSecs}</h3>
			</div>
			<div className="flex gap-3 justify-center items-center">
				<button onClick={() => setIsPause(!isPause)}>
					{isPause ? (
						<HiOutlinePlay size={25} />
					) : (
						<HiOutlinePause size={25} />
					)}
				</button>
				<button>
					<GrPowerReset size={22} />
				</button>
			</div>
			<div className="border">
				<h2>Black</h2>
				<h3>{blackMins + " : " + blackSecs}</h3>
			</div>
		</div>
	);
}
