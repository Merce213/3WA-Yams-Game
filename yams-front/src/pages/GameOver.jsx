import Skull from "../assets/skull.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
								<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8d7d7] to-[#979797] text-3xl font-yams-cherry [-webkit-text-stroke:1px_black;] [-moz-text-stroke:1px_black;]">
									Game Over!
								</h1>
							</div>

							<div className="inline-flex flex-col gap-8">
								<p className="font-yams-body text-base">
									There are still many rewards left,
									don&apos;t give up!
								</p>

								<div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
									<Button
										text={"QUIT"}
										bgColor={"bg-yams-blue"}
										styles={
											"[box-shadow:_0px_0px_15px_2px_#38ACDE;] hover:[box-shadow:_0px_0px_15px_6px_#38ACDE;] "
										}
										onClick={handleQuit}
									/>

									<Button
										text={"TRY AGAIN?"}
										bgColor={"bg-yams-green"}
										styles={
											"[box-shadow:_0px_0px_15px_2px_#0AD48C;] hover:[box-shadow:_0px_0px_15px_6px_#0AD48C;] "
										}
										onClick={handleTryAgain}
									/>
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
