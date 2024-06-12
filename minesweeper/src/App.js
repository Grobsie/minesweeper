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
        Here is some text
      </div>
    </>
  );
}

function MainPanel() {
  const array = [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                ]
  return (
    <>
      <div class="mainpanel">
        <h1>hello</h1>
      </div>
    </>
  );  
}

function Test() {
  const array = [
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                ]
  for 
  return (
    <>
      
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
      <MainPanel />
      <Test />

    
    </>
  );
}
