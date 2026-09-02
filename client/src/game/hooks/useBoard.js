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
import {
  addTransaction,
  TRANSACTION_TYPES,
} from "../../config/transactionHistory";
import { playSound } from "../../utils/soundManager";

function useBoard() {

  // --------------------------------
  // LOAD SAVED PLAYER PROGRESS
  // --------------------------------

  const savedGame = JSON.parse(
    localStorage.getItem("nehxifyGameProgress")
  );

  const savedHighestLevel =
    savedGame?.highestLevel || 1;

  const savedCoins =
    savedGame?.coinBalance !== undefined
      ? savedGame.coinBalance
      : 1000;

  // Make sure the saved level actually exists
  const startingLevel =
    Math.min(savedHighestLevel, levels.length);

  const startingLevelConfig =
    levels[startingLevel - 1];

  // --------------------------------
  // GAME STATE
  // --------------------------------

  const [board, setBoard] =
    useState(() => generateBoard());

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const [isAnimating, setIsAnimating] =
    useState(false);

  const [score, setScore] =
    useState(0);

  const [scorePopups, setScorePopups] =
  useState([]);

  const [currency, setCurrency] = 
    useState("KES");

  const [cashBalance, setCashBalance] = 
    useState(0);

  const [coinBalance, setCoinBalance] =
    useState(savedCoins);

  const [reward, setReward] = 
    useState(0);

  // This is the player's unlocked/highest level
  const [highestLevel, setHighestLevel] =
    useState(startingLevel);

  // This is the level currently being played
  const [currentLevel, setCurrentLevel] =
    useState(startingLevel);

  const [movesLeft, setMovesLeft] =
    useState(startingLevelConfig.moves);

  const [targetScore, setTargetScore] =
    useState(startingLevelConfig.targetScore);

  const [specialTilesActivated, setSpecialTilesActivated] =
    useState(0);

  const [tilesCleared, setTilesCleared] =
    useState(0);

  // IMPORTANT:
  // We start with "start" so the player
  // must pay 100 coins before playing.
  const [gameStatus, setGameStatus] =
    useState("start");

  // --------------------------------
  // SAVE PLAYER PROGRESS
  // --------------------------------

  function savePlayerProgress(
    level,
    coins
  ) {
    localStorage.setItem(
      "nehxifyGameProgress",
      JSON.stringify({
        highestLevel: level,
        coinBalance: coins,
      })
    );
  }

  // --------------------------------
  // START A FRESH ATTEMPT
  // --------------------------------

  function startLevel(levelNumber) {

    const config =
      levels[levelNumber - 1];

    if (!config) {
      return false;
    }

    setCurrentLevel(levelNumber);

    // NEW BOARD
    setBoard(generateBoard());

    // RESET ATTEMPT
    setSelectedIndex(null);
    setScore(0);
    setMovesLeft(config.moves);
    setTargetScore(config.targetScore);

    // RESET OBJECTIVE PROGRESS
    setSpecialTilesActivated(0);
    setTilesCleared(0);

    setGameStatus("playing");

    return true;
  }

  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  function showScorePopup(points, index) {
    console.log("SHOWING SCORE POPUP:", points, index);

    const row = Math.floor(index / 8);
    const col = index % 8;

    const popup = {
      id: Date.now() + Math.random(),
      score: points,
      x: col * 62 + 31,
      y: row * 62 + 31,
    };

    setScorePopups((previous) => [
      ...previous,
      popup,
    ]);

    setTimeout(() => {
      setScorePopups((previous) =>
        previous.filter(
          (item) => item.id !== popup.id
        )
      );
    }, 900);
  }
  // --------------------------------
  // PROCESS MOVE
  // --------------------------------

  async function processMove(firstIndex, secondIndex) {

    if (gameStatus !== "playing") {
      return false;
    }

    if (movesLeft <= 0) {
      return false;
    }

    if (isAnimating) {
      return false;
    }

    setIsAnimating(true);

    playSound("swap");

    const swappedBoard =
      swapTiles(
        board,
        firstIndex,
        secondIndex
      );

    const firstTile =
      swappedBoard[firstIndex];

    const secondTile =
      swappedBoard[secondIndex];

    const bombActivated =
      firstTile.special === "bomb" ||
      secondTile.special === "bomb";

    const lineActivated =
      firstTile.special === "line" ||
      secondTile.special === "line";

    const specialActivated =
      bombActivated || lineActivated;
    
    if (bombActivated) {
      playSound("bomb");
    }

    if (lineActivated) {
      playSound("line");
    }

    let currentBoard =
      swappedBoard;

    let specialScore = 0;

    let specialActivatedCount = 0;

    let clearedTilesThisMove = 0;

    let specialClearedIndexes = [];

    // --------------------------------
    // BOMB
    // --------------------------------

    if (firstTile.special === "bomb") {

      const result =
        activateSpecialTile(
          currentBoard,
          firstIndex
        );

      currentBoard = result.board;

      specialScore +=
        calculateScore(
          result.clearedIndexes
        );

      specialClearedIndexes.push(
        ...result.clearedIndexes
      );

      specialActivatedCount++;
    }

    if (secondTile.special === "bomb") {

      const result =
        activateSpecialTile(
          currentBoard,
          secondIndex
        );

      currentBoard = result.board;

      specialScore +=
        calculateScore(
          result.clearedIndexes
        );

      specialClearedIndexes.push(
        ...result.clearedIndexes
      );


      specialActivatedCount++;
    }

    // --------------------------------
    // LINE TILE
    // --------------------------------

    if (firstTile.special === "line") {

      const result =
        activateLineTile(
          currentBoard,
          firstIndex
        );

      currentBoard = result.board;

      specialScore +=
        calculateScore(
          result.clearedIndexes
        );

      specialClearedIndexes.push(
        ...result.clearedIndexes
      );


      specialActivatedCount++;
    }

    if (secondTile.special === "line") {

      const result =
        activateLineTile(
          currentBoard,
          secondIndex
        );

      currentBoard = result.board;

      specialScore +=
        calculateScore(
          result.clearedIndexes
        );

      specialClearedIndexes.push(
        ...result.clearedIndexes
      );


      specialActivatedCount++;
    }

    // --------------------------------
    // FIND MATCHES
    // --------------------------------

    let matches =
      findMatches(currentBoard);

    // Invalid move
    if (
      matches.length === 0 &&
      !specialActivated
    ) {
      console.log("Invalid move");
      setIsAnimating(false);
      return false;
    }

    let cascadeCount = 0;

    let totalPoints =
      specialScore;

    // --------------------------------
    // SPECIAL TILE ANIMATION
    // --------------------------------

    if (
      specialActivated &&
      specialClearedIndexes.length > 0
    ) {
      const uniqueIndexes = [
        ...new Set(
          specialClearedIndexes
        ),
      ];

      currentBoard =
        currentBoard.map(
          (tile, index) => {
            if (
              uniqueIndexes.includes(index)
            ) {
              return {
                ...tile,
                matched: true,
              };
            }

            return tile;
          }
        );

      setBoard(currentBoard);

      await wait(300);

      currentBoard =
        removeMatches(
          currentBoard,
          uniqueIndexes
        );

      setBoard(currentBoard);

      await wait(50);
    }

    // --------------------------------
    // SPECIAL TILE GRAVITY + REFILL
    // --------------------------------

    if (specialActivated) {
      currentBoard =
        applyGravity(currentBoard);

      currentBoard =
        currentBoard.map(
          (tile) => ({
            ...tile,
            gravityMoving:
              tile.type !== null,
          })
        );

      setBoard(currentBoard);

      await wait(250);

      const emptyPositions =
        currentBoard
          .map((tile, index) =>
            tile.type === null
              ? index
              : null
          )
          .filter(
            (index) =>
              index !== null
          );

      currentBoard =
        refillBoard(currentBoard);

      currentBoard =
        currentBoard.map(
          (tile, index) => ({
            ...tile,
            gravityMoving: false,
            newlySpawned:
              emptyPositions.includes(
                index
              ),
          })
        );

      setBoard(currentBoard);

      await wait(250);

      currentBoard =
        currentBoard.map(
          (tile) => ({
            ...tile,
            newlySpawned: false,
            gravityMoving: false,
          })
        );

      matches =
        findMatches(currentBoard);
    }

    // --------------------------------
    // CASCADES
    // --------------------------------

    while (
      matches.length > 0 &&
      cascadeCount < 20
    ) {
      const points =
        calculateScore(matches);

      playSound("match");

      totalPoints += points;

      if (points > 0 && matches.length > 0) {
        const popupIndex =
          matches[
            Math.floor(
              matches.length / 2
            )
          ];

        showScorePopup(
          points,
          popupIndex
        );
      }

      clearedTilesThisMove +=
        matches.length;

      // -------------------------
      // SHOW MATCH ANIMATION
      // -------------------------

      currentBoard = currentBoard.map(
        (tile, index) => {
          if (matches.includes(index)) {
            return {
              ...tile,
              matched: true,
            };
          }

          return tile;
        }
      );

      setBoard(currentBoard);

      // Give React time to render
      // the match animation.
      await new Promise((resolve) =>
        setTimeout(resolve, 300)
      );

      // -------------------------
      // REMOVE MATCHED TILES
      // -------------------------

      currentBoard =
        removeMatches(
          currentBoard,
          matches
        );

      // -------------------------
      // GRAVITY
      // -------------------------

      currentBoard =
        applyGravity(currentBoard);

      // Show the board after gravity
      currentBoard =
        currentBoard.map((tile) => ({
          ...tile,
          gravityMoving:
            tile.type !== null,
        }));

      setBoard(currentBoard);

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      );

      const emptyPositions = currentBoard
        .map((tile, index) =>
          tile.type === null ? index : null
        )
        .filter((index) => index !== null);

      // -------------------------
      // REFILL
      // -------------------------

      currentBoard =
        refillBoard(currentBoard);

      currentBoard =
        currentBoard.map((tile, index) => ({
          ...tile,
          gravityMoving: false,
          newlySpawned:
            emptyPositions.includes(index),
        }));

      setBoard(currentBoard);

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      );

      currentBoard =
        currentBoard.map((tile) => ({
          ...tile,
          newlySpawned: false,
          gravityMoving: false,
        }));

      // -------------------------
      // FIND NEXT CASCADE
      // -------------------------

      matches =
        findMatches(currentBoard);

      cascadeCount++;
    }

    // --------------------------------
    // NO POSSIBLE MOVE
    // --------------------------------

    if (!hasPossibleMove(currentBoard)) {

      console.log(
        "No possible moves. Generating new board."
      );

      currentBoard =
        generateBoard();
    }

    // --------------------------------
    // UPDATE STATE
    // --------------------------------

    const newScore =
      score + totalPoints;

    const newSpecialTilesActivated =
      specialTilesActivated +
      specialActivatedCount;

    const newTilesCleared =
      tilesCleared +
      clearedTilesThisMove;

    const remainingMoves =
      movesLeft - 1;

    // --------------------------------
    // CHECK OBJECTIVES
    // --------------------------------

    const currentObjectives =
      levels[currentLevel - 1].objectives;

    console.log("CURRENT LEVEL:", currentLevel);

    console.log(
      "CURRENT OBJECTIVES:",
      currentObjectives
    );

    console.log(
      "OBJECTIVE PROGRESS:",
      {
        score: newScore,
        specialTilesActivated: newSpecialTilesActivated,
        tilesCleared: newTilesCleared,
      }
    );

    const objectivesComplete =
      currentObjectives.every(
        (objective) => {

          if (objective.type === "score") {
            return (
              newScore >= objective.target
            );
          }

          if (objective.type === "special") {
            return (
              newSpecialTilesActivated >=
              objective.target
            );
          }

          if (objective.type === "clear") {
            return (
              newTilesCleared >=
              objective.target
            );
          }

          return false;
        }
      );

    // --------------------------------
    // DETERMINE GAME STATUS
    // --------------------------------

    let newStatus = "playing";
    let earnedReward = 0;

    if (objectivesComplete) {
      newStatus = "won";

      earnedReward =
        levels[currentLevel - 1].reward || 0;
        playSound("win");
    } else if (remainingMoves <= 0) {
      newStatus = "lost";
      playSound("gameover");
    }

    if (earnedReward > 0) {
      addTransaction({
        type: TRANSACTION_TYPES.GAME_REWARD,
        coins: earnedReward,
        status: "completed",
        description: `Level ${currentLevel} game reward`,
        metadata: {
          level: currentLevel,
        },
      });
    }

    // --------------------------------
    // APPLY STATE
    // --------------------------------
    
    const newCoinBalance =
      coinBalance + earnedReward;

    setScore(newScore);

    setMovesLeft(remainingMoves);

    setSpecialTilesActivated(
      newSpecialTilesActivated
    );

    setTilesCleared(
      newTilesCleared
    );

    setReward(earnedReward);

    setCoinBalance(newCoinBalance);

    setGameStatus(newStatus);

    setBoard(currentBoard);

    setIsAnimating(false);

    return true;
  }

  // --------------------------------
  // START GAME
  // --------------------------------

  function startGame() {

    if (coinBalance < 100) {

      alert(
        "You need at least 100 coins to play."
      );

      return false;
    }

    const newCoinBalance =
      coinBalance - 100;

    setCoinBalance(
      newCoinBalance
    );

    // Record game entry fee
  addTransaction({
    type: TRANSACTION_TYPES.GAME_ENTRY,
    coins: -100,
    status: "completed",
    description: `Level ${highestLevel} game entry fee`,
    metadata: {
      level: highestLevel,
      fee: 100,
    },
  });

    // IMPORTANT:
    // Start at the player's highest
    // unlocked level, NOT level 1.
    startLevel(highestLevel);

    // Save only persistent information
    savePlayerProgress(
      highestLevel,
      newCoinBalance
    );

    return true;
  }

  // --------------------------------
  // TRY AGAIN
  // --------------------------------

  function resetGame() {

    if (coinBalance < 100) {

      alert(
        "You don't have enough coins to try again."
      );

      return;
    }

    const newCoinBalance =
      coinBalance - 100;

    setCoinBalance(
      newCoinBalance
    );

    // Record retry game entry fee
    addTransaction({
      type: TRANSACTION_TYPES.GAME_ENTRY,
      coins: -100,
      status: "completed",
      description: `Level ${currentLevel} retry fee`,
      metadata: {
        level: currentLevel,
        fee: 100,
        retry: true,
      },
    });

    // Same level, completely fresh attempt
    startLevel(currentLevel);

    savePlayerProgress(
      highestLevel,
      newCoinBalance
    );
  }

  // --------------------------------
  // NEXT LEVEL
  // --------------------------------

  function nextLevel() {

    const nextLevelNumber =
      currentLevel + 1;

    if (
      nextLevelNumber >
      levels.length
    ) {

      console.log(
        "Congratulations! You completed all levels."
      );

      return false;
    }

    // Unlock next level
    setHighestLevel(
      nextLevelNumber
    );

    // Start next level fresh
    startLevel(
      nextLevelNumber
    );

    // Save the newly unlocked level
    savePlayerProgress(
      nextLevelNumber,
      coinBalance
    );

    return true;
  }

  // --------------------------------
  // EXIT GAME
  // --------------------------------

  function exitGame() {

    // IMPORTANT:
    // We DO NOT erase progress.
    // We only leave the game.

    setGameStatus("exit");

    savePlayerProgress(
      highestLevel,
      coinBalance
    );
  }

  // --------------------------------
  // TOP UP
  // --------------------------------

  function addCoinsToGameWallet(coins) {

    const amount = Number(coins);

    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    const newCoinBalance =
      coinBalance + amount;

    setCoinBalance(newCoinBalance);

    savePlayerProgress(
      highestLevel,
      newCoinBalance
    );
  }

  // --------------------------------
  // TILE CLICK
  // --------------------------------

  function handleTileClick(index) {

    console.log(
      "Tile clicked",
      gameStatus,
      movesLeft
    );

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

    if (
      !isAdjacent(
        selectedIndex,
        index
      )
    ) {

      setSelectedIndex(index);

      return;
    }

    processMove(
      selectedIndex,
      index
    );

    setSelectedIndex(null);
  }

// --------------------------------
// WITHDRAW COINS
// --------------------------------

function processWithdrawal(coins) {
  const amount = Number(coins);

  if (!Number.isFinite(amount) || amount <= 0) {
    return {
      success: false,
      message: "Invalid withdrawal amount.",
    };
  }

  if (amount > coinBalance) {
    return {
      success: false,
      message: "Insufficient coin balance.",
    };
  }

  const newCoinBalance = coinBalance - amount;

  setCoinBalance(newCoinBalance);

  // Keep the remaining balance saved
  savePlayerProgress(
    highestLevel,
    newCoinBalance
  );

  return {
    success: true,
    newCoinBalance,
  };
}

  // --------------------------------
  // RETURN
  // --------------------------------

  return {
    board,
    selectedIndex,
    score,
    scorePopups,
    movesLeft,
    currentLevel,
    highestLevel,
    targetScore,
    reward,
    specialTilesActivated,
    tilesCleared,
    objectives:
      levels[currentLevel - 1].objectives,
    gameStatus,
    cashBalance,
    coinBalance,
    addCoinsToGameWallet,
    handleTileClick,
    resetGame,
    startGame,
    nextLevel,
    exitGame,
    startLevel,
    processWithdrawal,
  };
}

export default useBoard;