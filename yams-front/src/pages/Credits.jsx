const Credits = () => {
    return (
        <main className="max-h-[100dvh] overflow-hidden">
            <section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat pt-16">
                <div className="absolute right-0 top-0 w-full h-full bg-[#2D2D2D]/85">
                    <div className="flex flex-col justify-center items-center h-screen pt-16 text-white">
                        <div className="flex flex-col justify-center items-center bg-gray-900 p-20">
                            <h1 className="text-4xl font-bold text-blue-400 mb-4">Credits</h1>
                            <p className="text-lg mt-4 mb-2">This project was created by the following developers:</p>
                            <ul className="text-base mb-8 pl-4 list-disc list-none text-center">
                                <li>GAME: <a className="text-blue-300 hover:text-blue-500" href="https://github.com/Merce213">Nassim B.</a> and <a className="text-blue-300 hover:text-blue-500" href="https://github.com/BlackHyrr">Jérôme B.</a></li>
                                <li>API: <a className="text-blue-300 hover:text-blue-500" href="https://github.com/Antoine07">Antoine L.</a></li>
                            </ul>
                            <p className="text-lg mt-10 mb-2">Assets used:</p>
                            <ul className="text-base mb-8 pl-4 list-disc list-none text-center">
                                <li><a href="https://azilla.itch.io/simple-buttons-gui-kit" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-500">Trophee</a></li>
                                <li><a href="https://penzilla.itch.io/vector-icon-pack" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-500">Skull</a></li>
                                <li><a href="https://www.pngall.com/dice-png/download/3073" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-500">Dice</a></li>
                                <li><a href="https://www.pngall.com/ribbon-banner-png/download/132001" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-500">Ribbon Banner</a></li>
                                <li>The background image was generated with <a href="https://creator.nightcafe.studio/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-500">Nightcafe Studio</a></li>
                            </ul>
                            <p className="text-lg mt-10 mb-2">Github repository:</p>
                            <p><a className="text-blue-300 hover:text-blue-500" href="https://github.com/Merce213/3WA-Yams-Game">Github Link</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Credits;