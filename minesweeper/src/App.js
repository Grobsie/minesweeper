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

function NavigationPanel({setBoard}) {

  //placeholder function to figure things out
  function generateGrid(gridsize, amountOfBombs) {

  }
  /*
  function generateGrid(gridsize, amountOfBombs) {
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
    //TODO: loop over array and start adding 1 to neighbouring tiles
    //TODO: add state change to tilepane so it is being updated
  }
  */
  return (
    <>
      <div className="navigationpanel">
        <button className="square" onClick={() => setBoard("board1")}>easy</button>
      </div>
    </>
  )
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

function TilePanel({board}) {
  const returnArray = [];
  let tempCellsInRow = [];
  for (let rowIndex in board) {
    for (let tileIndex in board[rowIndex]) {
      tempCellsInRow.push(Tile(board[rowIndex][tileIndex]));
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

function Tile(val) {
  //temporary set the usesate to value, later set to null to make it interactive again
  const [value, setValue] = useState(val);

  function handleLeftClick() {
    switch(val) {
      case "flag":
        break;
      case "B":
        break;
      default:
        setValue(val);
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
  const [board, setBoard] = useState([[0,0,0,0,0]]);

  return (
    <>
      <TitlePanel />
      <InfoPanel />
      <NavigationPanel setBoard={setBoard}/>
      <TimerPanel />
      <TilePanel board={board}/>
      <LeaderboardPane />
    </>
  );
}

export default Game;