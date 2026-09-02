import swapSound from "../assets/sounds/swap.mp3";
import matchSound from "../assets/sounds/match.mp3";
import bombSound from "../assets/sounds/bomb.mp3";
import lineSound from "../assets/sounds/line.mp3";
import winSound from "../assets/sounds/win.mp3";
import gameOverSound from "../assets/sounds/gameover.mp3";

const sounds = {
  swap: new Audio(swapSound),
  match: new Audio(matchSound),
  bomb: new Audio(bombSound),
  line: new Audio(lineSound),
  win: new Audio(winSound),
  gameover: new Audio(gameOverSound),
};

export function playSound(name) {
  const sound = sounds[name];

  if (!sound) {
    return;
  }

  sound.currentTime = 0;

  sound.play().catch(() => {
    // Browser may block audio until user interaction.
  });
}