import { useState } from "react";
import { generateBoard } from "../../utils/generateBoard";
import { swapTiles } from "../../utils/swapTiles";
import { isAdjacent } from "../../utils/isAdjacent";
import { findMatches } from "../../utils/findMatches";
import { removeMatches } from "../../utils/removeMatches";
import { applyGravity } from "../../utils/applyGravity";
import { refillBoard } from "../../utils/refillBoard";
import { calculateScore } from "../../utils/calculateScore";

function useBoard() {
  const [board, setBoard] = useState(() => generateBoard());
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [score, setScore] = useState(0);
  const [movesLeft, setMovesLeft] = useState(20);

  const [currentLevel, setCurrentLevel] = useState(1);
  const [targetScore, setTargetScore] = useState(5000);

  const [gameStatus, setGameStatus] = useState("playing");
  

function processMove(firstIndex, secondIndex) {

  if (gameStatus !== "playing") {
    return false;
  }

  if (movesLeft <= 0) {
    return false;
  }

  // Try the swap
  const swappedBoard = swapTiles(board, firstIndex, secondIndex);

  // Check if the swap created a match
  let matches = findMatches(swappedBoard);

  // Reject invalid moves
  if (matches.length === 0) {
    console.log("Invalid move");
    return false;
  }

  // Start with the swapped board
  let currentBoard = swappedBoard;

  // Safety counter to prevent infinite loops
  let cascadeCount = 0;

  let totalPoints = 0;

  // Keep processing until there are no more matches
  while (matches.length > 0 && cascadeCount < 20) {

    const points = calculateScore(matches);

    totalPoints += points;

    currentBoard = removeMatches(currentBoard, matches);

    currentBoard = applyGravity(currentBoard);

    currentBoard = refillBoard(currentBoard);

    matches = findMatches(currentBoard);

    cascadeCount++;
  }

  const newScore = score + totalPoints;

  const remainingMoves = movesLeft - 1;

  setScore(newScore);

  setMovesLeft(remainingMoves);

  if (newScore >= targetScore) {
    setGameStatus("won");
  } else if (remainingMoves === 0) {
    setGameStatus("lost");
  }

  setBoard(currentBoard);

  return true;
}

  function resetGame() {
    setBoard(generateBoard());
    setSelectedIndex(null);
    setScore(0);
    setMovesLeft(20);
    setGameStatus("playing");
  }

  function nextLevel() {
    setCurrentLevel((prev) => prev + 1);
    setTargetScore((prev) => prev + 2500);

    setBoard(generateBoard());
    setSelectedIndex(null);
    setScore(0);
    setMovesLeft(20);
    setGameStatus("playing");
  }

  function exitGame() {
  setGameStatus("exit");
  }

  function handleTileClick(index) {
    console.log("Tile clicked", gameStatus, movesLeft);

  if (gameStatus !== "playing") {
    return;
  }

  if (selectedIndex === null) {
    setSelectedIndex(index);
    return;
  }

  if (selectedIndex === index) {
    setSelectedIndex(null);
    return;
  }

  if (!isAdjacent(selectedIndex, index)) {
    setSelectedIndex(index);
    return;
  }

  processMove(selectedIndex, index);

  setSelectedIndex(null);
}

  return {
    board,
    selectedIndex,
    score,
    movesLeft,
    currentLevel,
    targetScore,
    gameStatus,
    handleTileClick,
    resetGame,
    nextLevel,
    exitGame,
};
}
export default useBoard;