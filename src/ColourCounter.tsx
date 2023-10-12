import { useState } from "react";
import "./index.css";

function ColorCounter() {
  const [buttonText, setButtonText] = useState("Blue and Red are Equal !!!");
  const [redCounter, setRedCounter] = useState(0);
  const [blueCount,setBlueCounter] = useState(0);





  
  
const handleRedButtonClick = (buttonName: string) =>{
    setRedCounter(redCounter + 1);
    
    setButtonText(buttonName + " was pressed!");
}
const redButton = <button type="button" onClick = {() => handleRedButtonClick("Red button")}>Red</button>



const handleBlueButtonClick = (buttonName: string) =>{
    setBlueCounter(blueCounter + 1);

    
    setButtonText(buttonName + " was pressed!");
}

const blueButton = <button type="button" onClick = {() => handleBlueButtonClick("Blue button")}>Blue</button>


const choice = (buttonName: string ,blueCounter: number ,redCounter: number )=>{
    if(redCounter == blueCounter){

        setButtonText("Blue and Red are Equal !!!")
    }
    else if(redCounter > blueCounter) {

        setButtonText("Red is bigger than blue")
    }

    else if(blueCounter > redCounter ) {
        setButtonText("Blue is bigger than ")
    }



}





 // ));
//<p>{buttonText}</p>
  return (
    <>
    <div className = "Big_div">
    <div className ="Red">
    {redCounter}
    {redButton}
    
    </div>
    <div className ="Blue">
    {blueCount}
    {blueButton}
    
    </div>
    </div>
    
    <br/>
    {buttonText}
    
    </>
  );
}

export default ColorCounter;