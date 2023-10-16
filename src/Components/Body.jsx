import { BiPauseCircle } from "react-icons/bi";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
import { useState, useContext, useEffect, useRef } from "react";
import TimerContext from "../Context";
import { useNavigate } from "react-router-dom";
export default function Body() {
	const { whiteMins, blackMins, whiteSecs, blackSecs } =
		useContext(TimerContext);
	const navigate = useNavigate();
	const [isPause, setIsPause] = useState(true);
	const [whiteTurn, setWhiteTurn] = useState(true);
	const whiteTotal = whiteMins * 60 + whiteSecs;
	const blackTotal = blackMins * 60 + blackSecs;

	const [whiteTime, setWhiteTime] = useState(whiteTotal);
	const [blackTime, setBlackTime] = useState(blackTotal);
	const [winText, setWinText] = useState(null);

	const whiteTimeRef = useRef(null);
	const blackTimeRef = useRef(null);
	useEffect(() => {
		const interval = setInterval(() => {
			if (whiteTime > 0 && blackTime > 0) {
				if (whiteTurn) {
					setWhiteTime(whiteTime - 1);
					// console.log("whiteTime" + whiteTime);
				} else {
					setBlackTime(blackTime - 1);
					// console.log("blackTime" + blackTime);
				}
			} else {
				clearInterval(interval);
				if (whiteTime === 0) {
					setWinText("Black Won on time");
				} else {
					setWinText("White Won on time");
				}
			}
		}, 1000);
	}, [whiteTurn, blackTime, whiteTime, winText]);

	function handleReset() {
		navigate("/");
	}

	// useEffect(() => {
	// 	let requestId;
	// 	let lastTimestamp = 0;

	// 	const updateTimer = (timestamp) => {
	// 		if (!isPause) {
	// 			if (whiteTime > 0 && blackTime > 0) {
	// 				if (whiteTurn) {
	// 					if (timestamp - lastTimestamp >= 1000) {
	// 						setWhiteTime(whiteTime - 1);
	// 						lastTimestamp = timestamp;
	// 					}
	// 				} else {
	// 					if (timestamp - lastTimestamp >= 1000) {
	// 						setBlackTime(blackTime - 1);
	// 						lastTimestamp = timestamp;
	// 					}
	// 				}
	// 				requestId = requestAnimationFrame(updateTimer);
	// 			} else {
	// 				if (whiteTime === 0) {
	// 					setWinText("Black Won on time");
	// 				} else {
	// 					setWinText("White Won on time");
	// 				}
	// 			}
	// 		}
	// 	};

	// 	requestId = requestAnimationFrame(updateTimer);

	// 	return () => {
	// 		cancelAnimationFrame(requestId);
	// 	};
	// }, [whiteTurn, isPause, blackTime, whiteTime]);

	// useEffect(() => {
	// 	const whiteMinutes = Math.floor(whiteTime / 60);
	// 	const whiteSeconds = whiteTime % 60;
	// 	whiteTimeRef.current.textContent = `${whiteMinutes}:${whiteSeconds}`;

	// 	const blackMinutes = Math.floor(blackTime / 60);
	// 	const blackSeconds = blackTime % 60;
	// 	blackTimeRef.current.textContent = `${blackMinutes}:${blackSeconds}`;
	// }, [whiteTime, blackTime]);

	if (winText != null) {
		return (
			<>
				<h1>{winText}</h1>
				<button onClick={handleReset}>
					<GrPowerReset size={22} />
				</button>
			</>
		);
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-3 ">
			<h1 className="text-3xl font-semibold">Timer</h1>
			<div className="border" onClick={() => setWhiteTurn(!whiteTurn)}>
				<h2>White</h2>
				<h3>{whiteTime}</h3>
			</div>
			<div className="flex gap-3 justify-center items-center">
				<button onClick={() => setIsPause(!isPause)}>
					{isPause ? (
						<HiOutlinePlay size={25} />
					) : (
						<HiOutlinePause size={25} />
					)}
				</button>
				<button onClick={handleReset}>
					<GrPowerReset size={22} />
				</button>
			</div>
			<div className="border" onClick={() => setWhiteTurn(!whiteTurn)}>
				<h2>Black</h2>
				<h3>{blackTime}</h3>
			</div>
		</div>
		// Ari was here
	);
}
