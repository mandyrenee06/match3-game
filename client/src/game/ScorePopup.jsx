function ScorePopup({ score, x, y }) {
  return (
    <div
      className="score-popup"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      +{score}
    </div>
  );
}

export default ScorePopup;