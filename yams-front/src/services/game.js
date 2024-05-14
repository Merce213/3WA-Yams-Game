import { combinaisons } from "../config/combinaisons";

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

export function rollDice(diceAmount) {
    let dice = [];
    for (let i = 1; i <= diceAmount; i++) dice.push(rollDie());
    return dice;
}

export function checkWinningCombination(diceResult) {
    for (const combination of combinaisons) {
        if (isWinningCombination(diceResult, combination.name)) {
            return {
                isWinning: true,
                combinationName: combination.name,
                rewardAmount: combination.rewardAmount
            };
        }
    }
    return { isWinning: false };
}

function isWinningCombination(diceResult, combinationName) {
    switch (combinationName) {
        case "Four of a Kind":
            return hasFourOfAKind(diceResult);
        case "Large Straight":
            return hasLargeStraight(diceResult);
        case "Yahtzee":
            return hasYahtzee(diceResult);
        default:
            return false;
    }
}

function hasFourOfAKind(diceResult) {
    const counts = {};
    for (const die of diceResult) {
        counts[die] = (counts[die] || 0) + 1;
        if (counts[die] >= 4) {
            return true;
        }
    }
    return false;
}

function hasLargeStraight(diceResult) {
    diceResult.sort((a, b) => a - b);
    for (let i = 0; i < diceResult.length - 1; i++) {
        if (diceResult[i] !== diceResult[i + 1] - 1) {
            return false;
        }
    }
    return true;
}

function hasYahtzee(diceResult) {
    return new Set(diceResult).size === 1;
}

export function isGameOver(roll) {
    if (roll == 0) return true;
}