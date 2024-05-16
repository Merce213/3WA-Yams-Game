import Button from "../components/Button";
import Die1 from "../assets/die1.png";
import Die2 from "../assets/die2.png";
import Die3 from "../assets/die3.png";
import Die4 from "../assets/die4.png";
import Die5 from "../assets/die5.png";
import Die6 from "../assets/die6.png";
import Trophy from "../assets/trophy.png";

const Game = () => {
	return (
		<main className="max-h-[100dvh]">
			<section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat pt-16">
				<div className="absolute right-0 top-0 w-full h-full bg-[#2D2D2D]/85">
					<div className="flex flex-col justify-center items-center h-[100dvh] pt-16 text-white">
						<div className="h-full w-full flex flex-col lg:flex-row items-center justify-between py-4 px-2">
							<div className="block lg:hidden space-x-4 text-nowrap">
								<button className="bg-[#353535] p-3 rounded-full border border-yams-yellow text-yams-yellow flex-shrink-0">
									Winning combinaisons
								</button>
								<button className="bg-[#353535] p-3 rounded-full border border-yams-yellow text-yams-yellow flex-shrink">
									Rewards left
								</button>
							</div>

							<div className="hidden lg:block bg-[#414141] h-[640px] flex-grow flex-shrink max-w-52 lg:max-w-64 border border-yams-yellow rounded-2xl">
								<div className="[border-radius:_50%_50%_0_0;] border-b border-yams-yellow p-2 text-center text-yams-yellow text-base font-yams-body bg-[#353535]">
									<p>Winning combinaisons</p>
								</div>

								<div className="flex flex-col gap-6 p-2">
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
									<div className="flex flex-col items-center">
										<p className="text-base font-yams-body">
											Four of a kind
										</p>
										<div className="flex gap-2 w-max">
											<img
												src={Die4}
												alt="die4"
												className="w-8 h-8"
											/>
											<img
												src={Die4}
												alt="die4"
												className="w-8 h-8"
											/>
											<img
												src={Die4}
												alt="die4"
												className="w-8 h-8"
											/>
											<img
												src={Die4}
												alt="die4"
												className="w-8 h-8"
											/>
										</div>
									</div>
									<div className="flex flex-col items-center">
										<p className="text-base font-yams-body">
											Long straight
										</p>
										<div className="flex gap-2 w-max">
											<img
												src={Die1}
												alt="die 1"
												className="w-8 h-8"
											/>
											<img
												src={Die2}
												alt="die 2"
												className="w-8 h-8"
											/>
											<img
												src={Die3}
												alt="die 3"
												className="w-8 h-8"
											/>
											<img
												src={Die4}
												alt="die 4"
												className="w-8 h-8"
											/>
											<img
												src={Die5}
												alt="die 5"
												className="w-8 h-8"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="pb-6 lg:pb-0 flex gap-3 flex-col lg:flex-grow-[3]">
								<div className="flex flex-col items-center justify-center gap-8 pb-8">
									{/* add a condition to display the trophy when the player win */}
									{/* <img
										src={Trophy}
										alt="trophy"
										className="w-40"
									/> */}
									<div className="flex gap-4">
										<img
											src={Die1}
											alt="die1"
											className="w-16 h-16"
										/>
										<img
											src={Die1}
											alt="die1"
											className="w-16 h-16"
										/>
										<img
											src={Die1}
											alt="die1"
											className="w-16 h-16"
										/>
										<img
											src={Die1}
											alt="die4"
											className="w-16 h-16"
										/>
										<img
											src={Die1}
											alt="die5"
											className="w-16 h-16"
										/>
									</div>
								</div>

								<div className="flex flex-col gap-20">
									{/* add a condition to display the button get reward when the player win */}
									{/* <Button
										text={"GET YOUR REWARDS!"}
										bgColor={"bg-yams-yellow"}
										styles={
											"[box-shadow:_0px_0px_15px_2px_#E8B502;] hover:[box-shadow:_0px_0px_15px_6px_#E8B502;] max-w-72 mx-auto w-60 md:w-full"
										}
									/> */}

									<div className="flex flex-col items-center gap-4">
										{/* add condition win */}
										{/* <span className="text-sm font-yams-body">
											Or if you wish you can reroll to
											attemp to get better rewards!
										</span> */}

										<Button
											text={"ROLL"}
											bgColor={"bg-yams-green"}
											styles={
												"[box-shadow:_0px_0px_15px_2px_#0AD48C;] hover:[box-shadow:_0px_0px_15px_6px_#0AD48C;] max-w-60 mx-auto w-60 md:w-full"
											}
										/>
									</div>
								</div>
								<p className="mx-auto font-yams-body text-base">
									<span className="text-yams-green">3</span>{" "}
									Rolls left
								</p>
							</div>

							<div className="hidden lg:block bg-[#414141] h-[640px] flex-grow flex-shrink-0 max-w-52 lg:max-w-64 border border-yams-yellow rounded-2xl">
								<div className="[border-radius:_50%_50%_0_0;] border-b border-yams-yellow p-2 text-center text-yams-yellow text-base font-yams-body bg-[#353535]">
									<p>Rewards left</p>
								</div>

								<div className="flex flex-col gap-6 p-2">
									<div className="flex flex-col justify-center gap-6 pt-10 font-yams-body text-sm">
										<div className="flex space-x-3">
											<span className="font-extrabold text-yams-yellow">
												1
											</span>
											<p className="font-semibold">
												Fondant supreme
											</p>
										</div>
										<div className="flex space-x-3">
											<span className="font-extrabold text-yams-yellow">
												3
											</span>
											<p className="font-semibold">
												Eclairs au chocolat
											</p>
										</div>
										<div className="flex space-x-3">
											<span className="font-extrabold text-yams-yellow">
												4
											</span>
											<p className="font-semibold">
												Cake framboise chocolat
											</p>
										</div>
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
