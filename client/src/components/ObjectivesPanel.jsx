function ObjectivesPanel({
  objectives,
  score,
  specialTilesActivated,
  tilesCleared,
}) {
  // Get the player's current progress for each objective
  const getProgress = (objective) => {
    if (objective.type === "score") {
      return score;
    }

    if (objective.type === "special") {
      return specialTilesActivated;
    }

    if (objective.type === "clear") {
      return tilesCleared;
    }

    return 0;
  };

  // Get the correct icon for each objective
  const getIcon = (type) => {
    if (type === "score") {
      return "⭐";
    }

    if (type === "special") {
      return "💥";
    }

    if (type === "clear") {
      return "🧹";
    }

    return "🎯";
  };

  return (
    <div className="objectives-panel">
      <div className="objectives-title">
        🎯 Level Objectives
      </div>

      <div className="objectives-list">
        {objectives.map((objective, index) => {
          const progress = getProgress(objective);

          const completed =
            progress >= objective.target;

          const displayProgress =
            Math.min(progress, objective.target);

          return (
            <div
              key={`${objective.type}-${index}`}
              className={`objective-item ${
                completed ? "completed" : ""
              }`}
            >
              <div className="objective-info">

                <span className="objective-icon">
                  {getIcon(objective.type)}
                </span>

                <span className="objective-label">
                  {objective.label}
                </span>

                <span className="objective-check">
                  {completed ? "✅" : ""}
                </span>

              </div>

              <div className="objective-progress-row">

                <div className="objective-progress-bar">
                  <div
                    className="objective-progress-fill"
                    style={{
                      width: `${
                        (displayProgress /
                          objective.target) *
                        100
                      }%`,
                    }}
                  />
                </div>

                <span className="objective-progress-text">
                  {displayProgress.toLocaleString()} /{" "}
                  {objective.target.toLocaleString()}
                </span>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ObjectivesPanel;