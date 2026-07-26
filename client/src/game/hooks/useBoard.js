import { useState } from "react";
import { generateBoard } from "../../utils/generateBoard";

function useBoard() {
  const [board, setBoard] = useState(() => generateBoard());

  const [selectedTile, setSelectedTile] = useState(null);

  return {
    board,
    setBoard,
    selectedTile,
    setSelectedTile,
  };
}

export default useBoard;