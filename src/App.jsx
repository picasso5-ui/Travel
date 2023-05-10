import React, { useState,useContext } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { TestContext } from './Helpers/Contexts';

function App() {
  const [gameState,setGameState] = useState("menu");
  const[score,setScore] =useState(0)

  return(
    <div className="App">
        <h2>Quiz App</h2>
       <TestContext.Provider value={{gameState,setGameState,score,setScore}}>
          {gameState==="menu" && <MainMenu />}
          {gameState==="quiz" && <Quiz />}
          {gameState==="endScreen" && <EndScreen />}
        </TestContext.Provider>
    </div>
   
  )
}


export default App;