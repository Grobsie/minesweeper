import { useState } from 'react';
/*
let grid = [
  ["B" , 1  ,  0  , 1  , 1  ],
  [ 1  , 1  ,  0  , 1  , "B"],
  [ 0  , 0  ,  0  , 1  , 1  ],
  [ 1  , 1  ,  2  , 2  , 2  ],
  [ 1  ,"B" ,  2  ,"B" ,"B" ],
   ];
*/
let grid;
GenerateGrid(5, 4);

function GenerateGrid(gridsize, amountOfBombs) {
  let bombLocations = [];
  for (let bomb = 0; bomb < amountOfBombs; bomb++) {
    let possibleBomb = Math.floor(Math.random() * (gridsize*gridsize));
    bombLocations.push(possibleBomb);
  }
  grid = [];
  for (let rowIndex = 0; rowIndex < gridsize; rowIndex++) {
    grid.push([]);
    
    for (let columnIndex = 0; columnIndex < gridsize; columnIndex++) {
      grid[rowIndex].push(12);
    } 
  }
  //console.log(grid);
}

function NavigationPanel() {
  return (
    <>
      <div className="navigationpanel">
        <button className="square" onClick={() => GenerateGrid(3, 5)}>easy</button>
        <button className="square" onClick={() => GenerateGrid(9, 5)}>normal</button>
        <button className="square" onClick={() => GenerateGrid(15, 5)}>hard</button>
      </div>
    </>
  )
}

function TitlePanel() {
  return (
    <>
      <div className="titlepanel">
        <h5>minesweeper</h5>
      </div>
    </>
  );
}

function InfoPanel() {
  return (
    <>
      <div className="infopanel">
        Here you can play minesweeper, my first try at a React app. find the source code <a href="https://github.com/Grobsie/minesweeper">@github</a>
      </div>
    </>
  );
}

function TimerPanel() {
  return (
    <>
      <div className="timerpanel">
        12m55s
      </div>
    </>
  );
}

function TilePanel() {
  const returnArray = [];
  let tempCellsInRow = [];
  for (let rowIndex in grid) {
    for (let tileIndex in grid[rowIndex]) {
      tempCellsInRow.push(Tile(grid[rowIndex][tileIndex]));
    }
    returnArray.push(Row(tempCellsInRow));
    tempCellsInRow = [];
  };
  //console.log(returnArray);
  return (
    <>
    <div className="tilepanel">
      {returnArray}
    </div>
    </>
  );  
}

function Row(cellsInRow) {
  return (
    <>
      <div className="row">{cellsInRow}</div>
    </>
  );
}

function Tile(value) {
  const [val, setValue] = useState(null);
  
  function handleLeftClick() {
    switch(val) {
      case null:
        setValue(value);
        break;
      case "flag":
        break;
      case "B":
        break;
      default:
        setValue(value);
    }
  }

  function handleRightClick(e) {
    e.preventDefault(); //prevent default context menu
    if (val === null) {
      setValue("flag");
    } else if (val === "flag") {
      setValue(null);
    }
    
  }

  return (
    <>
      <div className="tile" onClick={handleLeftClick} onContextMenu={handleRightClick}>{val}</div>
    </>
  );
}

function LeaderboardPane() {
  return (
    <>
      <div className="leaderbordpanel">
      Leaderbord
        <table>
          
        </table> 
      </div>
    </>
  );
}

export default function Game() {
  return (
    <>
      <TitlePanel />
      <InfoPanel />
      <NavigationPanel />
      <TimerPanel />
      <TilePanel />
      <LeaderboardPane />
    </>
  );
}
