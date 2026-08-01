import { useState } from "react";
import { generateBoard } from "../../utils/generateBoard";
import { swapTiles } from "../../utils/swapTiles";
import { isAdjacent } from "../../utils/isAdjacent";
import { findMatches } from "../../utils/findMatches";
import { removeMatches } from "../../utils/removeMatches";
import { applyGravity } from "../../utils/applyGravity";
import { refillBoard } from "../../utils/refillBoard";

function useBoard() {
  const [board, setBoard] = useState(() => generateBoard());
  const [selectedIndex, setSelectedIndex] = useState(null);

function processMove(firstIndex, secondIndex) {
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

  // Keep processing until there are no more matches
  while (matches.length > 0 && cascadeCount < 20) {
    currentBoard = removeMatches(currentBoard, matches);

    currentBoard = applyGravity(currentBoard);

    currentBoard = refillBoard(currentBoard);

    matches = findMatches(currentBoard);

    cascadeCount++;
  }

  setBoard(currentBoard);

  return true;
}

  function handleTileClick(index) {

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
    handleTileClick,
};
}
export default useBoard;