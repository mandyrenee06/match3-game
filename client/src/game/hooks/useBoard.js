import { useState } from "react";
import { generateBoard } from "../../utils/generateBoard";
import { swapTiles } from "../../utils/swapTiles";
import { isAdjacent } from "../../utils/isAdjacent";
import { findMatches } from "../../utils/findMatches";
import { removeMatches } from "../../utils/removeMatches";

function useBoard() {
  const [board, setBoard] = useState(() => generateBoard());
  const [selectedIndex, setSelectedIndex] = useState(null);

function processMove(firstIndex, secondIndex) {
  const swappedBoard = swapTiles(board, firstIndex, secondIndex);

  const matches = findMatches(swappedBoard);

  if (matches.length === 0) {
    console.log("Invalid move");
    return false;
  }

  const clearedBoard = removeMatches(swappedBoard, matches);

  setBoard(clearedBoard);
  
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