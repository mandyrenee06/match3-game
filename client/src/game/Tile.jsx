function Tile({ tile, selected, onClick }) {
  return (
    <div
      className={`tile ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {tile.type ?? ""}
    </div>
  );
}

export default Tile;