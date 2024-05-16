import { useEffect, useState } from "react";
import {Die1, Die2, Die3, Die4, Die5, Die6} from "../assets";
import { settings } from "../config/settings";
const diceImages = [Die1, Die2, Die3, Die4, Die5, Die6];

const Die = ({ die, startRolling, delay }) => {
    const [rolling, setRolling] = useState(false);
    const [currentDieImage, setCurrentDieImage] = useState(diceImages[die - 1]);

    useEffect(() => {
        if (startRolling) {
            setRolling(true);
            let intervalId = setInterval(() => {
                setCurrentDieImage(diceImages[Math.floor(Math.random() * diceImages.length)]);
            }, 100);

            setTimeout(() => {
                clearInterval(intervalId);
                setRolling(false);
                setCurrentDieImage(diceImages[die - 1]);
            }, settings.delayBeforeDiceStopMs + delay);

            return () => clearInterval(intervalId);
        }
    }, [startRolling, die, delay]);

    return (
        <div className={`dice`}>
            <img src={currentDieImage} alt={`Die`} className={`${rolling ? '' : 'animate-dice'}`} width={100} />
        </div>
    );
};

export default Die;