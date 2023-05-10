import { useContext } from "react";
import { TestContext } from "../Helpers/Contexts";


const MainMenu = () => {
  const {gameState,setGameState} = useContext(TestContext);

    return ( 
        <div className="menu">
        <h2>Hello,welcome!</h2>
          <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
        </div>
     );
}
 
export default MainMenu;