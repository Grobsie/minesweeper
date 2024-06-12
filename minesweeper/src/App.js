function NavigationPanel() {
  return (
    <>
      <div class="navigationpanel">
        <button className="square">easy</button>
        <button className="square">normal</button>
        <button className="square">hard</button>
      </div>
    </>
  )
}

function InfoPanel() {
  return (
    <>
      <div class="infopanel">
        Here you can play minesweeper, my first try at a React app. find the source code @ github.com/grobsie/minesweeper
      </div>
    </>
  );
}

function TilePanel() {
  const array = [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                ]
  const cellsToReturn = [];
  for (let i in array) {
    console.log(i + " is equal to 0: " + (i==0))
    cellsToReturn.push(Tile(i));
    if (i % 5 === 0 && i > 1) {
      cellsToReturn.push("<br></br");
    }
  };
  return (
    <>
    <div class="tilePanel">
      {cellsToReturn}
    </div>
    </>
  );  
}

function Tile(value) {
  return (
    <>
      <div class="tile">{value}</div>
    </>
  )
}
export default function Game() {
  return (
    <>
      <NavigationPanel />
      <InfoPanel />
      <TilePanel />

    
    </>
  );
}
