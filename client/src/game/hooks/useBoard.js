import { useState } from "react";
import { generateBoard } from "../../utils/generateBoard";
import { swapTiles } from "../../utils/swapTiles";
import { isAdjacent } from "../../utils/isAdjacent";

function useBoard() {
  const [board, setBoard] = useState(() => generateBoard());
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const newBoard =
    swapTiles(board, selectedIndex, index);

  setBoard(newBoard);
  setSelectedIndex(null);
}

  return {
    board,
    selectedIndex,
    handleTileClick,
};
}

export default useBoard;