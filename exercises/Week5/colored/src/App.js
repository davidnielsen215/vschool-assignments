import React from 'react'
// import ReactDOM from 'react-dom'

import ColorBox from './ColorBox'


//seperate each item and in an array with commas.
//sperate each key and value of an object with commas.
//seperate each the key from the value with a colon.
function App() {
  return (
    <div className="App">
      <p>COLORS</p>
      <ColorBox  title="Blue" subtitle="this is a blue color" 
      information="Just like the ocean" backgroundColor="blue"/>

      <ColorBox title="Red" subtitle="this is a red color" 
      information="Just like blood" backgroundColor="red"/>

      <ColorBox title="Yellow" subtitle="this is a yellow color" 
      information="Just like lemonade" backgroundColor="yellow"/>
    </div>
  );

}

export default App;
