import StandardSudoku from './Components/StandardSudoku'
import Arrow from './Components/Arrow'
import React, {useState} from 'react'

function App() {
  
  var [answer, setAnswer] = useState("");

  return (

    <div>

        {!(answer.toLowerCase().trim() === "classic" || answer.toLowerCase().trim() === "arrow") && 
          <h>Hello! Welcome to the Sudoku Solver!</h>}

        {!(answer.toLowerCase().trim() === "classic" || answer.toLowerCase().trim() === "arrow") && 
          <p>Which sukodu variant would you like to play?</p>}

        {!(answer.toLowerCase().trim() === "classic" || answer.toLowerCase().trim() === "arrow") && 
          <p>Options: Classic, Arrow...</p>}

        {!(answer.toLowerCase().trim() === "classic" || answer.toLowerCase().trim() === "arrow") && <input type="text" value={answer} onChange={(e) => {
            setAnswer(e.target.value);
        }}/>} 

        {answer.toLowerCase().trim() === "classic" && <StandardSudoku/>}
        {answer.toLowerCase().trim() === "arrow" && <Arrow/>}

    </div>

  );
}

export default App;