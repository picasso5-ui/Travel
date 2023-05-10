import React, { useState,useContext } from "react";
import { Questions } from "../Helpers/Store";
import { TestContext } from "../Helpers/Contexts";



const EndScreen = () => {

    const {score,setScore,setGameState} = useContext(TestContext);
    const RestartQuiz =() =>{
        setScore(0);
        setGameState("menu")
    }
    return ( 
        <div className="endScreen">
        <h2>Quiz Finished</h2>
        <h3>{score} / {Questions.length}</h3>
        <button onClick={RestartQuiz}>Restart Quiz</button>
        {score<=1 ? (
          <h4 style={{color:'crimson'}}>poor </h4>
        ) :(
            <h4 style={{color:'green'}}> Excellent</h4>
        )}
        </div>
     );
}
 
export default EndScreen;