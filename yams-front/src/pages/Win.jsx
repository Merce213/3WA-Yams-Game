import Trophy from "../assets/trophy.png";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useGetWonPastriesQuery } from "../features/pastries";
import RewardsList from "../components/RewardsList";

const Win = () => {
	const navigate = useNavigate();
	const location = useLocation();
    const rewardsAmount = location.state?.rewardsAmount || 0;
    const { data: rewards, isError, isLoading } = useGetWonPastriesQuery(rewardsAmount);

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
									className="w-28 h-28 md:w-40 md:h-40 mx-auto aspect-auto"
								/>
								<h1 className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF2E00] to-[#FFD600] text-3xl font-yams-cherry [-webkit-text-stroke:1px_black;] [-moz-text-stroke:1px_black;]">
									Your rewards!
								</h1>
							</div>

							<div className="flex flex-col gap-10">
							{isLoading ? (
									<p>Loading...</p>
								) : (
									rewards && <RewardsList rewards={rewards} />
								)}
								<Button
									text={"QUIT"}
									bgColor={"bg-yams-blue"}
									styles={
										"[box-shadow:_0px_0px_15px_2px_#38ACDE;] hover:[box-shadow:_0px_0px_15px_6px_#38ACDE;] "
									}
									onClick={handleQuit}
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
