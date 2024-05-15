import Skull from "../assets/skull.png";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
	const navigate = useNavigate();

	const handleQuit = () => {
		navigate("/");
	};

	const handleTryAgain = () => {
		navigate("/game");
	};

	return (
		<main className="max-h-[100dvh]">
			<section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat pt-16">
				<div className="absolute right-0 top-0 w-full h-full bg-[#2D2D2D]/85 bg-left-top">
					<div className="flex flex-col justify-center items-center h-full text-white">
						<div className="flex flex-col justify-center items-center gap-10 p-4">
							<div>
								<img
									src={Skull}
									alt="skull icon"
									className="w-28 h-28 md:w-40 md:h-40 mx-auto"
								/>
								<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8d7d7] to-[#979797] text-2xl font-yams-gameover [-webkit-text-stroke:1px_black;] [-moz-text-stroke:1px_black;]">
									Game Over!
								</h1>
							</div>

							<div className="inline-flex flex-col gap-8">
								<p className="font-yams-body text-base">
									There are still many rewards left,
									don&apos;t give up!
								</p>

								<div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
									<button
										onClick={handleQuit}
										className="uppercase p-4 rounded-2xl bg-yams-blue flex-grow font-yams-body font-extrabold [box-shadow:_0px_0px_15px_2px_#38ACDE;] hover:[box-shadow:_0px_0px_15px_6px_#38ACDE;] transition-all duration-200"
									>
										QUIT
									</button>
									<button
										onClick={handleTryAgain}
										className="uppercase p-4 rounded-2xl bg-yams-green flex-grow font-yams-body font-extrabold [box-shadow:_0px_0px_15px_2px_#0AD48C;] hover:[box-shadow:_0px_0px_15px_6px_#0AD48C;] transition-all duration-200"
									>
										TRY AGAIN?
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default GameOver;
