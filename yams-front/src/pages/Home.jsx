const Home = () => {
	return (
		<main>
			<section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat overflow-hidden">
				<div className="absolute right-0 top-0 w-full h-full md:w-2/4 bg-[#3F3F3F]/85 bg-left-top">
					<div className="container p-3 flex flex-col pt-16 items-center gap-12 justify-center h-2/3">
						<h1 className="text-white font-yams-title text-6xl">
							Yams
						</h1>

						<h2 className="text-white font-yams-body font-bold text-lg">
							Welcome to Yam&apos;s!
						</h2>

						<div className="w-full max-w-lg">
							<p className="text-white font-yams-body">
								Embark on a delectable journey as you step into
								the world of a pastry shop. Your mission? Craft
								a winning strategy in a game of Yams infused
								with sweet rewards. Roll the dice, strategize
								your moves, and aim for three tantalizing
								treats!
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<button className="flex h-12 animate-background-shine delay-1000 items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#38ACDE,45%,#B1E0FE,55%,#38ACDE)] bg-[length:200%_100%] px-12 py-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
								Start the game !
							</button>

							<p className="cursor-pointer text-white text-center font-yams-body md:absolute md:bottom-0 md:right-0 md:p-4 hover:scale-105 hover:underline hover:underline-offset-2 transition-all duration-200">
								Credits
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
