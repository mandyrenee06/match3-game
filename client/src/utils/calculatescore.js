export function calculateScore(matches) {
  const matchedTiles = matches.length;

  switch (matchedTiles) {
    case 3:
      return 30;

    case 4:
      return 60;

    case 5:
      return 100;

    default:
      return matchedTiles * 25;
  }
}