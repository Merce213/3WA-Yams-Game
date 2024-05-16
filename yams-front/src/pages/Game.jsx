import Button from "../components/Button";
import {Die1, Die2, Die3, Die4, Die5, Die6, Trophy, StartMessage} from "../assets";
import { useEffect, useState } from "react";
import { checkWinningCombination, isGameOver, rollDice } from "../services/game";
import { useNavigate } from "react-router-dom";
import { useGetPastriesQuery } from "../features/pastries";
import { combinaisons } from "../config/combinaisons";
import Die from "../components/Die";
import { settings } from "../config/settings";

const Game = () => {
    const [dice, setDice] = useState([]);
    const diceImages = [Die1, Die2, Die3, Die4, Die5, Die6];
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { data: rewardsLeft, isError, isLoading, refetch } = useGetPastriesQuery();
    const [rollLeft, setRollLeft] = useState(settings.maxRolls);
    const navigate = useNavigate();
    const [rolling, setRolling] = useState(false);

    const handleRollDice = () => {
        if (rollLeft === 0 || rolling) return;
        setDice(rollDice(5));
        setRolling(true);
        setRollLeft(rollLeft - 1);
    };

    useEffect(() => {
        refetch();
        setTimeout(() => {
            setIsPageLoaded(true);
        }, 50);
        if (rolling) {
            setTimeout(() => {
                setRolling(false);
                if (!checkWinningCombination(dice).isWinning && isGameOver(rollLeft)) {
                    setTimeout(() => {
                        navigate("/gameover");
                    }, 1000);
                }
            }, settings.delayBeforeDiceStopMs + (settings.delayBetweenDiceStoppingMs * 5));
        }
    }, [rolling, dice, rollLeft]);

    const handleGetRewards = () => {
        navigate("/win", { state: { rewardsAmount: checkWinningCombination(dice).rewardAmount } });
    }

    return (
        <main className="max-h-[100dvh] overflow-hidden">
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

                            <div className={`hidden lg:block bg-[#414141] h-[640px] flex-grow flex-shrink max-w-52 lg:max-w-64 border border-yams-yellow rounded-2xl translated-left ${isPageLoaded ? 'slide-in' : ''}`}>
                                <div className="[border-radius:_50%_50%_0_0;] border-b border-yams-yellow p-2 text-center text-yams-yellow text-base font-yams-body bg-[#353535]">
                                    <p>Winning combinaisons</p>
                                </div>

                                <div className="flex flex-col gap-6 p-2 container-scroll">
                                    {combinaisons.map((combinaison, index) => (
                                        <div key={index} className="flex flex-col items-center pt-10">
                                            <p className="text-base font-yams-body">
                                                {combinaison.name}
                                            </p>
                                            <div className="flex gap-2 w-max">
                                                {combinaison.example.map((die, dieIndex) => (
                                                    <img
                                                        key={dieIndex}
                                                        src={diceImages[die - 1]}
                                                        alt={`Die ${die}`}
                                                        className="w-8 h-8"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pb-6 lg:pb-0 flex gap-3 flex-col lg:flex-grow-[3]">
                                <div className="flex flex-col items-center justify-center gap-8 pb-8">
                                    {(dice.length > 0 && checkWinningCombination(dice).isWinning && !rolling) && (
                                        <img
                                            src={Trophy}
                                            alt="trophy"
                                            className="w-40"
                                        />
                                    )}
                                    <div className="flex gap-4">
                                        {dice.length > 0 ? (
                                            dice.map((die, index) => <Die key={index} die={die} startRolling={rolling} delay={index * settings.delayBetweenDiceStoppingMs} />)
                                        ) : (
                                            <img
                                                src={StartMessage}
                                                alt="Roll the dice to start the game"
                                                className=""
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-20">
                                    {(dice.length > 0 && checkWinningCombination(dice).isWinning && !rolling) && (
                                        <Button
                                            text={"GET YOUR REWARDS!"}
                                            bgColor={"bg-yams-yellow"}
                                            onClick={handleGetRewards}
                                            styles={
                                                "[box-shadow:_0px_0px_15px_2px_#E8B502;] hover:[box-shadow:_0px_0px_15px_6px_#E8B502;] max-w-72 mx-auto w-60 md:w-full"
                                            }
                                        />
                                    )}

                                    <div className="flex flex-col items-center gap-4">
                                        {(
                                            dice.length > 0 
                                            && checkWinningCombination(dice).isWinning 
                                            && !rolling
                                            && !isGameOver(rollLeft)
                                        ) && (
                                            <span className="text-sm font-yams-body font-semibold">
                                                Or if you wish you can reroll to
                                                attemp to get better rewards!
                                            </span>
                                        )}

                                        <Button
                                            text={"ROLL"}
                                            bgColor={rollLeft === 0 || rolling ? "bg-yams-bg-disabled" : "bg-yams-green"}
                                            onClick={handleRollDice}
                                            styles={
                                                rollLeft === 0 || rolling
                                                    ? "max-w-60 mx-auto w-60 md:w-full text-yams-disabled cursor-default"
                                                    : "[box-shadow:_0px_0px_15px_2px_#0AD48C;] hover:[box-shadow:_0px_0px_15px_6px_#0AD48C;] max-w-60 mx-auto w-60 md:w-full"
                                            }
                                        />
                                    </div>
                                </div>
                                <p className="mx-auto font-yams-body text-base">
                                    <span className="text-yams-green">{rollLeft}</span>{" "}
                                    {rollLeft > 1 ? 'rolls left' : 'roll left'}
                                </p>
                            </div>

                            <div className={`hidden lg:block bg-[#414141] h-[640px] flex-grow flex-shrink max-w-52 lg:max-w-64 border border-yams-yellow rounded-2xl translated-right ${isPageLoaded ? 'slide-in' : ''}`}>
                                <div className="[border-radius:_50%_50%_0_0;] border-b border-yams-yellow p-2 text-center text-yams-yellow text-base font-yams-body bg-[#353535]">
                                    <p>Rewards left</p>
                                </div>

                                <div className="flex flex-col gap-6 p-2 container-scroll">
                                    <div className="flex flex-col justify-center gap-6 pt-8 font-yams-body text-sm">
                                        {(rewardsLeft && rewardsLeft.length > 0 ? rewardsLeft.map((reward, index) => (
                                            <div key={index} className="flex space-x-3">
                                                <span className="font-extrabold text-yams-yellow">
                                                    {reward.quantity}
                                                </span>
                                                <p className="font-semibold">
                                                    {reward.name}
                                                </p>
                                            </div>
                                        )) : null)}
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