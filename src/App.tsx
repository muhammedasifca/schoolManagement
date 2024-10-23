import { useState } from "react";
import Start from "./components/Start";
import Home from "./components/Home";
import { subjectName } from "./utils/functions"
function App() {
  console.log(subjectName);
  const [isHome,setIsHome]=useState(true)
  const startButton=()=>{
    setIsHome(false)
  }
  
  return (
    <>
      {
        isHome?<Start click={()=>startButton()}></Start>:<Home/>
      }
    </>
  )
}

export default App  
