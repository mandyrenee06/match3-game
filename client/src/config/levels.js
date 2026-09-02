const createLevel = (level) => {
  let moves;
  let targetScore;
  let reward;
  let objectives;

  // =========================
  // DIFFICULTY / MOVES
  // =========================

  if (level <= 5) {
    // Introductory levels
    moves = 20 + Math.floor(level / 3) * 5;
  } else if (level <= 9) {
    // Score-focused levels
    moves = 30;
  } else if (level === 10) {
    // First major milestone
    moves = 35;
  } else if (level <= 14) {
    moves = 32;
  } else if (level === 15) {
    // Milestone level
    moves = 34;
  } else if (level <= 19) {
    moves = 34;
  } else if (level === 20) {
    // Major milestone
    moves = 40;
  } else if (level <= 24) {
    moves = 35;
  } else if (level === 25) {
    moves = 37;
  } else if (level <= 29) {
    moves = 36;
  } else if (level === 30) {
    moves = 42;
  } else if (level <= 34) {
    moves = 37;
  } else if (level === 35) {
    moves = 39;
  } else if (level <= 39) {
    moves = 38;
  } else if (level === 40) {
    moves = 44;
  } else if (level <= 44) {
    moves = 39;
  } else if (level === 45) {
    moves = 41;
  } else if (level <= 49) {
    moves = 40;
  } else {
    // Final level
    moves = 45;
  }

  // =========================
  // TARGET SCORE
  // =========================

  if (level === 1) {
    targetScore = 1000;
  } else if (level === 2) {
    targetScore = 2500;
  } else if (level === 3) {
    targetScore = 4000;
  } else if (level === 4) {
    targetScore = 3000;
  } else if (level === 5) {
    targetScore = 5000;
  } else if (level === 6) {
    targetScore = 6500;
  } else if (level === 7) {
    targetScore = 7000;
  } else if (level === 8) {
    targetScore = 7500;
  } else if (level === 9) {
    targetScore = 8000;
  } else if (level === 10) {
    targetScore = 9000;
  } else {
    // Gradual increase after Level 10
    targetScore = 9000 + (level - 10) * 750;
  }

  // =========================
  // REWARDS
  // =========================

  if (level <= 5) {
    // Early levels
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

  // =========================
  // OBJECTIVES
  // =========================

  const isMilestoneLevel = level % 5 === 0;

  if (isMilestoneLevel) {
    // -------------------------
    // MILESTONE LEVELS
    // 5, 10, 15, 20, ... 50
    // -------------------------

    const specialTarget =
      Math.min(2 + Math.floor(level / 10), 6);

    const clearTarget =
      40 + level;

    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
      {
        type: "special",
        target: specialTarget,
        label: `Activate ${specialTarget} special tiles`,
      },
      {
        type: "clear",
        target: clearTarget,
        label: `Clear ${clearTarget} tiles`,
      },
    ];
  } else {
    // -------------------------
    // NORMAL LEVELS
    // -------------------------

    objectives = [
      {
        type: "score",
        target: targetScore,
        label: `Reach ${targetScore.toLocaleString()} points`,
      },
    ];
  }

  // =========================
  // RETURN LEVEL
  // =========================

  return {
    level,
    targetScore,
    moves,
    reward,
    objectives,
  };
};

// =========================
// GENERATE 50 LEVELS
// =========================

export const levels = Array.from(
  { length: 50 },
  (_, index) => createLevel(index + 1)
);