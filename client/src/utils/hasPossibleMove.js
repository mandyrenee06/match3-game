import { swapTiles } from "./swapTiles";
import { findMatches } from "./findMatches";

export function hasPossibleMove(board) {
  for (let i = 0; i < board.length; i++) {
    const neighbors = [];

    // Right
    if (i % 8 < 7) {
      neighbors.push(i + 1);
    }

    // Left
    if (i % 8 > 0) {
      neighbors.push(i - 1);
    }

    // Down
    if (i + 8 < board.length) {
      neighbors.push(i + 8);
    }

    // Up
    if (i - 8 >= 0) {
      neighbors.push(i - 8);
    }

    for (const neighbor of neighbors) {
      const swappedBoard = swapTiles(board, i, neighbor);

      const matches = findMatches(swappedBoard);

      if (matches.length > 0) {
        return true;
      }
    }
  }

  return false;
}