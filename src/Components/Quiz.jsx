import React, { useState,useContext } from "react";
import { Questions } from "../Helpers/Store";
import { TestContext } from "../Helpers/Contexts";


const Quiz = () => {
  const {setScore,score,setGameState} =useContext(TestContext)
    const [currentQuestion,setCurrentQuestion] =useState(0);
    const[optionChosen,setOptionChosen]=useState("");

    const NextQuestion= () =>{
       if (Questions[currentQuestion].answer==optionChosen) {
           setScore(score +1)
       }
      
       setCurrentQuestion(currentQuestion + 1);
    }
  
    const prevQuest = ()=>{
        if (currentQuestion == 0) {
          alert('no previous question')
        }
        else{
          setCurrentQuestion(currentQuestion - 1)
        }
    }


    const FinishQuiz = () =>{
      if (Questions[currentQuestion].answer==optionChosen) {
        setScore(score +1)
    }
    setGameState("endScreen");
    }
    return ( 
        <div className="Quiz">
          <h1>{Questions[currentQuestion].prompt}</h1>
          <div className="options">
            <button onClick={()=>setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
          </div>
        {currentQuestion==Questions.length - 1 ?(
          <button onClick={FinishQuiz} className='Finishbtn'>Finish Quiz</button>
          ): ( <button onClick={NextQuestion} className='nextbtn'>Next Question</button>
          )}


        <button onClick={prevQuest} className="prevQuest">prev</button>
       
        
        </div>
     );
}
 
export default Quiz;