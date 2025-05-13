import React, { useState } from "react";
import "./App.css";

export default function App(){
  const [name1,setName1]=useState('');
  const [name2,setName2]=useState('');
  const [dice1,setDice1]=useState('1');
  const [dice2,setDice2]=useState('1');
  const [message, setMessage] = useState("");
  const [showGame, setShowGame] = useState(false);

  function handleStart(){
    if(name1 !=="" && name2 !==""){
      setShowGame(true);
    }
    else{
      alert("Please enter both names.");
    }
 }

function handleRoll() {
  const n1=Math.floor(Math.random()*6)+1;
  const n2=Math.floor(Math.random()*6)+1;
  setDice1(n1);
  setDice2(n2);

if(n1 > n2){
  setMessage(name1 + " wins! 🏆");
}  
else if(n1 < n2){
setMessage(name2 + " wins! 🏆");
}
else{
  setMessage("It's a draw 🤝");
}
} 

return(
  <div className="container">
{!showGame ?(
  <>
  <h2>Enter Player Names</h2>
  <input placeholder="Player 1" onChange={(e) =>setName1(e.target.value) }
  />

  <input
 placeholder="Player 2"
 onChange={(e) => setName2(e.target.value)}
 />
 <button onClick={handleStart}>Start Game</button>

  </>
) : (
<>
<h1>Dice Game</h1>
<h3>{name1} vs {name2}</h3>

<div className="dice-box">
<div className="dice-value">{dice1}</div>
<div className="dice-value">{dice2}</div>
</div>
<button onClick={handleRoll}>Roll Dice</button>
<p>{message}</p>
</>
)}
  </div>
)
}

