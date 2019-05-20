import React from 'react'
import ColorBox from './ColorBox'

//seperate each item and in an array with commas.
//sperate each key and value of an object with commas.
//seperate each the key from the value with a colon.
function App() {
  return (
    <div className="App">
      <p>COLORS</p>
      <ColorBox title="Title" subtitle="Here we are" 
      information="Info here" backgroundColor="blue"/>
    </div>
  );

}


export default App;
