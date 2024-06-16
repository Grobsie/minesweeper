import { useState } from 'react';

let grid;

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
  //temporary set the usesate to value, later set to null to make it interactive again
  const [val, setValue] = useState(value);

  function handleLeftClick() {
    switch(val) {
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

function Game() {
  const [gameState, changeGame] = useState("");
  
  function GenerateGrid(gridsize, amountOfBombs) {
    //generate bomb locations
    let bombLocations = [];
    while (bombLocations.length < amountOfBombs) {
      let possibleBomb = Math.floor(Math.random() * (gridsize*gridsize));
      if (bombLocations.indexOf(possibleBomb) === -1) {
        bombLocations.push(possibleBomb);
      }
    }
    //create grid and add bombs to it
    grid = [];
    let gridCounter = 0;
    for (let rowIndex = 0; rowIndex < gridsize; rowIndex++) {
      grid.push([]);
      
      for (let columnIndex = 0; columnIndex < gridsize; columnIndex++) {
        if (bombLocations.includes(gridCounter)) {
          grid[rowIndex].push("B");
        } else {
          grid[rowIndex].push(0);
        }
        gridCounter++;
      }
    }
    changeGame(gridsize);
    //TODO: loop over array and start adding 1 to neighbouring tiles
    //TODO: add state change to tilepane so it is being updated
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

export default Game;