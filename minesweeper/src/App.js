import { useState } from 'react';

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

function TitlePanel() {
  return (
    <>
      <div class="titlepanel">
        <h1>minesweeper</h1>
      </div>
    </>
  );
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

function TimerPanel() {
  return (
    <>
      <div class="timerpanel">
        12m55s
      </div>
    </>
  );
}

function TilePanel() {
  const array = [
               "B" , 1  ,  0  , 1  , 1  ,
                1  , 1  ,  0  , 1  ,"B" ,
                0  , 0  ,  0  , 1  , 1  ,
                1  , 1  ,  2  , 2  , 2  ,
                1  ,"B" ,  2  ,"B" ,"B" ,
                ]
  const returnArray = [];
  let tempCellsInRow = [];
  let counter = 0;
  let rowLength = Math.sqrt(array.length);
  for (let rows = 0; rows < rowLength; rows++) {
    for (let columns = 0; columns < rowLength; columns++) {
      tempCellsInRow.push(Tile(array[counter]));
      counter++;
    }
    returnArray.push(Row(tempCellsInRow));
    tempCellsInRow = [];
  };

  return (
    <>
    <div class="tilepanel">
      {returnArray}
    </div>
    </>
  );  
}

function Row(cellsInRow) {
  return (
    <>
      <div class="row">{cellsInRow}</div>
    </>
  );
}

function Tile(value) {
  const [val, setValue] = useState(null);
  
  function handleLeftClick() {
    if (val === null) {
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
      <div class="tile" onClick={handleLeftClick} onContextMenu={handleRightClick}>{val}</div>
    </>
  );
}

function LeaderboardPane() {
  return (
    <>
      <div class="leaderbordpanel">
        <table>
          <tr>
            <th>Leaderbord</th>
          </tr>
          <td>
            <th>Easy</th>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
          </td>
          <td>
          <th>Medium</th>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
          </td>
          <td>
          <th>Hard</th>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
              <tr>
                <td>winner1</td>
                <td>31s</td>
              </tr>
          </td>
        </table> 
      </div>
    </>
  );
}

export default function Game() {
  return (
    <>
      <TitlePanel />
      <NavigationPanel />
      <InfoPanel />
      <TimerPanel />
      <TilePanel />
      <LeaderboardPane />
    </>
  );
}
