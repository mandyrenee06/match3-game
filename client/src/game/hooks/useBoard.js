import { useState } from "react";
import { generateBoard } from "../../utils/generateBoard";
import { swapTiles } from "../../utils/swapTiles";
import { isAdjacent } from "../../utils/isAdjacent";
import { findMatches } from "../../utils/findMatches";
import { removeMatches } from "../../utils/removeMatches";
import { applyGravity } from "../../utils/applyGravity";
import { refillBoard } from "../../utils/refillBoard";
import { calculateScore } from "../../utils/calculateScore";
import { activateSpecialTile } from "../../utils/activateSpecialTile";
import { activateLineTile } from "../../utils/activateLineTile";
import { levels } from "../../config/levels";
import { hasPossibleMove } from "../../utils/hasPossibleMove";

function useBoard() {
  const [board, setBoard] = useState(() => generateBoard());
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);

  const [currentLevel, setCurrentLevel] = useState(1);

  const levelConfig = levels[currentLevel - 1];

  const [movesLeft, setMovesLeft] = useState(levelConfig.moves);
  const [targetScore, setTargetScore] = useState(levelConfig.targetScore);

  const [gameStatus, setGameStatus] = useState("playing");

function loadLevel(levelNumber) {
  const config = levels[levelNumber - 1];

  if (!config) {
    return false;
  }

  setCurrentLevel(levelNumber);
  setBoard(generateBoard());
  setSelectedIndex(null);
  setScore(0);
  setMovesLeft(config.moves);
  setTargetScore(config.targetScore);
  setGameStatus("playing");

  return true;
}

function processMove(firstIndex, secondIndex) {

  if (gameStatus !== "playing") {
    return false;
  }

  if (movesLeft <= 0) {
    return false;
  }

  const swappedBoard = swapTiles(board, firstIndex, secondIndex);

  // Check if either swapped tile is a bomb
  const firstTile = swappedBoard[firstIndex];
  const secondTile = swappedBoard[secondIndex];

  const bombActivated =
    firstTile.special === "bomb" ||
    secondTile.special === "bomb";

  const lineActivated =
    firstTile.special === "line" ||
    secondTile.special === "line";

  const specialActivated = bombActivated || lineActivated;

  let currentBoard = swappedBoard;

  let specialScore = 0;

  if (firstTile.special === "bomb") {
    const result = activateSpecialTile(currentBoard, firstIndex);

    currentBoard = result.board;
    specialScore += calculateScore(result.clearedIndexes);
  }

  if (secondTile.special === "bomb") {
    const result = activateSpecialTile(currentBoard, secondIndex);

    currentBoard = result.board;
    specialScore += calculateScore(result.clearedIndexes);
  }

  if (firstTile.special === "line") {
    const result = activateLineTile(currentBoard, firstIndex);

    currentBoard = result.board;
    specialScore += calculateScore(result.clearedIndexes);
  }

  if (secondTile.special === "line") {
    const result = activateLineTile(currentBoard, secondIndex);

    currentBoard = result.board;
    specialScore += calculateScore(result.clearedIndexes);
  }

  let matches = findMatches(currentBoard);

  // Reject invalid moves only if there was
  // no normal match AND no special tile activation
  if (matches.length === 0 && !specialActivated) {
    console.log("Invalid move");
    return false;
  }

  // Safety counter to prevent infinite loops
  let cascadeCount = 0;
  let totalPoints = specialScore;

  // If a bomb was activated, the bomb already created
  // empty spaces, so gravity and refill must happen first.
  if (specialActivated) {
    currentBoard = applyGravity(currentBoard);
    currentBoard = refillBoard(currentBoard);

    matches = findMatches(currentBoard);
  }

  // Continue processing normal matches and cascades
  while (matches.length > 0 && cascadeCount < 20) {
    const points = calculateScore(matches);

    totalPoints += points;

    currentBoard = removeMatches(currentBoard, matches);

    currentBoard = applyGravity(currentBoard);

    currentBoard = refillBoard(currentBoard);

    matches = findMatches(currentBoard);

    cascadeCount++;
  }

  if (!hasPossibleMove(currentBoard)) {
    console.log("No possible moves. Generating a new board.");
    currentBoard = generateBoard();
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
    loadLevel(currentLevel);
  }

  function nextLevel() {
    return loadLevel(currentLevel + 1);
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
    loadLevel,
};
}
export default useBoard;