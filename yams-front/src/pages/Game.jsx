import Button from "../components/Button";
import Die1 from "../assets/die1.png";
import Die2 from "../assets/die2.png";
import Die3 from "../assets/die3.png";
import Die4 from "../assets/die4.png";
import Die5 from "../assets/die5.png";
import Die6 from "../assets/die6.png";

const Game = () => {
	return (
		<main className="max-h-[100dvh]">
			<section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat pt-16">
				<div className="absolute right-0 top-0 w-full h-full bg-[#2D2D2D]/85">
					<div className="flex flex-col justify-center items-center h-[100dvh] pt-16 text-white">
						<div className="h-full w-full flex flex-col md:flex-row items-center justify-between py-4 px-2">
							<div className="block md:hidden space-x-4 text-nowrap">
								<button className="bg-[#353535] p-3 rounded-full border border-yarms-yellow text-yarms-yellow flex-shrink-0">
									Winning combinaisons
								</button>
								<button className="bg-[#353535] p-3 rounded-full border border-yarms-yellow text-yarms-yellow flex-shrink">
									Rewards left
								</button>
							</div>

							<div className="hidden md:block bg-[#414141] h-[640px] flex-grow flex-shrink max-w-52 lg:max-w-64 border border-yarms-yellow rounded-2xl">
								<div className="[border-radius:_50%_50%_0_0;] border-b border-yarms-yellow p-2 text-center text-yarms-yellow text-base font-yams-body bg-[#353535]">
									<p>Winning combinaisons</p>
								</div>

								<div className="flex flex-col gap-4 p-4">
									<div className="flex flex-col items-center pt-10">
										<p className="text-base font-yams-body">
											Yams
										</p>
										<div className="flex gap-2 w-max">
											<img
												src={Die6}
												alt="die6"
												className="w-8 h-8"
											/>
											<img
												src={Die6}
												alt="die6"
												className="w-8 h-8"
											/>
											<img
												src={Die6}
												alt="die6"
												className="w-8 h-8"
											/>
											<img
												src={Die6}
												alt="die6"
												className="w-8 h-8"
											/>
											<img
												src={Die6}
												alt="die6"
												className="w-8 h-8"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="pb-6 flex gap-3 flex-col md:flex-grow-[3]">
								<Button
									text={"ROLL"}
									bgColor={"bg-yams-green"}
									styles={
										"[box-shadow:_0px_0px_15px_2px_#0AD48C;] hover:[box-shadow:_0px_0px_15px_6px_#0AD48C;] max-w-60 mx-auto w-60 md:w-full"
									}
								/>
								<p className="mx-auto font-yams-body text-base">
									<span className="text-yams-green">3</span>{" "}
									Rolls left
								</p>
							</div>

							<div className="hidden md:block bg-[#414141] h-[640px] flex-grow flex-shrink-0 max-w-52 lg:max-w-64 border border-yarms-yellow rounded-2xl">
								<div className="h-full">
									<div className="[border-radius:_50%_50%_0_0;] border-b border-yarms-yellow p-2 text-center text-yarms-yellow text-base font-yams-body bg-[#353535]">
										<p>Rewards left</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Game;
