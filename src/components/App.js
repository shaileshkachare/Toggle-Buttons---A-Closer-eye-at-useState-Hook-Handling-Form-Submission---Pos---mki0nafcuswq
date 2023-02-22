import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  

  
//   return (
//     <div className="App">
//       <button id="btn1" onClick={handleClick}>
//       {/* assign value for button 1 */}
//       </button>
//       <br />
//       <br />
//       <button id="btn2" onClick={handleClick}>
//         {/* assign value for button 2 */}
//       </button>
//     </div>
//   );
// }
const [value,setValue]=useState(false)
  
const handleClick=()=>{
  setValue(!value)
  
}
return (
  <div className="App">
    <button id="btn1" onClick={handleClick}>
    {value ? "ON" : "OFF"}
    </button>
    <br />
    <br />
    <button id="btn2" onClick={handleClick}>
      {value ? "OFF" : "ON"}
    </button>
  </div>
);
}


export default App;
