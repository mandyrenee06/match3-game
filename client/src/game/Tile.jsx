function Tile({ tile, selected, onClick }) {
  return (
    <div
      className={`tile ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {tile.special === "bomb"
        ? "💣"
        : tile.special === "line"
          ? "⚡"
          : tile.type ?? ""}
    </div>
  );
}

export default Tile;