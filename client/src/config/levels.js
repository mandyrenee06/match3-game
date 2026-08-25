const createLevel = (level) => {
  let moves;
  let targetScore;
  let reward;
  let objectives;

  // -------------------------
  // DIFFICULTY / MOVES
  // -------------------------

  if (level <= 5) {
    moves = 20 + Math.floor(level / 3) * 5;
  } else if (level <= 15) {
    moves = 25;
  } else if (level <= 30) {
    moves = 24;
  } else if (level <= 40) {
    moves = 23;
  } else {
    moves = 22;
  }

  // -------------------------
  // TARGET SCORE
  // -------------------------

  if (level === 1) {
    targetScore = 1000;
  } else if (level === 2) {
    targetScore = 1500;
  } else if (level === 3) {
    targetScore = 2000;
  } else if (level === 4) {
    targetScore = 5000;
  } else if (level === 5) {
    targetScore = 6000;
  } else {
    targetScore = 6000 + (level - 5) * 1000;
  }

  // -------------------------
  // REWARDS
  // -------------------------

   if (level <= 5) {
    // Early levels: small profits
    reward = 110 + level * 10;
  } else if (level <= 10) {
    // Levels 6–10
    reward = 170 + (level - 6) * 10;
  } else if (level <= 20) {
    // Levels 11–20
    reward = 220 + (level - 11) * 10;
  } else if (level <= 30) {
    // Levels 21–30
    reward = 320 + (level - 21) * 10;
  } else if (level <= 40) {
    // Levels 31–40
    reward = 420 + (level - 31) * 10;
  } else {
    // Levels 41–50
    reward = 520 + (level - 41) * 10;
  }

  // -------------------------
  // OBJECTIVES
  // -------------------------

  if (level <= 5) {
    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
    ];
  } else if (level <= 10) {
    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
      {
        type: "special",
        target: 2,
        label: "Activate 2 special tiles",
      },
    ];
  } else if (level <= 20) {
    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
      {
        type: "special",
        target: 3,
        label: "Activate 3 special tiles",
      },
      {
        type: "clear",
        target: 30 + level,
        label: `Clear ${30 + level} tiles`,
      },
    ];
  } else if (level <= 30) {
    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
      {
        type: "special",
        target: 4,
        label: "Activate 4 special tiles",
      },
      {
        type: "clear",
        target: 40 + level,
        label: `Clear ${40 + level} tiles`,
      },
    ];
  } else if (level <= 40) {
    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
      {
        type: "special",
        target: 5,
        label: "Activate 5 special tiles",
      },
      {
        type: "clear",
        target: 50 + level,
        label: `Clear ${50 + level} tiles`,
      },
    ];
  } else {
    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
      {
        type: "special",
        target: 6,
        label: "Activate 6 special tiles",
      },
      {
        type: "clear",
        target: 60 + level,
        label: `Clear ${60 + level} tiles`,
      },
    ];
  }

  return {
    level,
    targetScore,
    moves,
    reward,
    objectives,
  };
};

export const levels = Array.from(
  { length: 50 },
  (_, index) => createLevel(index + 1)
);