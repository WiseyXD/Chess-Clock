import { BiPauseCircle } from "react-icons/bi";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
export default function Body() {
	const [isPause, setIsPause] = useState(true);
	const [whiteMins, setWhiteMins] = useState(null);
	const [blackMins, setBlackMins] = useState(null);
	const [whiteSecs, setWhiteSecs] = useState(null);
	const [blackSecs, setBlackSecs] = useState(null);

	return (
		<div className="flex flex-col items-center gap-3 ">
			<h1>Timer</h1>
			<div className="border">
				<h2>White</h2>
				<h3>00:00:00</h3>
			</div>
			<div className="flex gap-3 justify-center items-center">
				<button onClick={() => setIsPause(!isPause)}>
					{isPause ? (
						<HiOutlinePlay size={25} />
					) : (
						<HiOutlinePause size={25} />
					)}
				</button>
				<GrPowerReset size={22} />
			</div>
			<div className="border">
				<h2>Black</h2>
				<h3>00:00:00</h3>
			</div>
		</div>
	);
}
