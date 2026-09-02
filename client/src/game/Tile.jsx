function Tile({ tile, selected, onClick }) {
  return (
    <div
      className={`tile ${
        selected ? "selected" : ""
      } ${tile.matched ? "matched" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <span className="tile-content">
        {tile.special === "bomb"
          ? "💣"
          : tile.special === "line"
            ? "⚡"
            : tile.type ?? ""}
      </span>
    </div>
  );
}

export default Tile;