import Trophy from "../assets/trophy.png";
import Star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Win = () => {
	const navigate = useNavigate();

	const handleQuit = () => {
		navigate("/");
	};

	return (
		<main className="max-h-[100dvh]">
			<section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat pt-16">
				<div className="absolute right-0 top-0 w-full h-full bg-[#2D2D2D]/85 bg-left-top">
					<div className="flex flex-col justify-center items-center h-full text-white">
						<div className="flex flex-col justify-center items-center gap-10 p-4">
							<div>
								<img
									src={Trophy}
									alt="trophy icon"
									className="w-28 h-28 md:w-40 md:h-40 mx-auto"
								/>
								<h1 className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF2E00] to-[#FFD600] text-3xl font-yams-cherry [-webkit-text-stroke:1px_black;] [-moz-text-stroke:1px_black;]">
									Your rewards!
								</h1>
							</div>

							<div className="flex flex-col gap-10">
								<div className="flex flex-col gap-4">
									<div className="flex items-center gap-4 font-yams-cherry text-base tracking-wide">
										<img
											src={Star}
											alt="star icon"
											className="w-10 h-10"
										/>
										<div className="flex space-x-2">
											<span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF2E00] to-[#FFD600]">
												2
											</span>
											<p>Fondant supreme</p>
										</div>
									</div>
									<div className="flex items-center gap-4 font-yams-cherry text-base tracking-wide">
										<img
											src={Star}
											alt="star icon"
											className="w-10 h-10"
										/>
										<div className="flex space-x-2">
											<span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF2E00] to-[#FFD600]">
												1
											</span>
											<p>Cake Chocolat</p>
										</div>
									</div>
									<div className="flex items-center gap-4 font-yams-cherry text-base tracking-wide">
										<img
											src={Star}
											alt="star icon"
											className="w-10 h-10"
										/>
										<div className="flex space-x-2">
											<span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF2E00] to-[#FFD600]">
												3
											</span>
											<p>Brioche sucrée au chocolat</p>
										</div>
									</div>
								</div>

								<Button
									text={"QUIT"}
									bgColor={"bg-yams-blue"}
									hexColorShadow={"#38ACDE"}
									className={"w-3/4 mx-auto"}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Win;
