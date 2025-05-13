import React,{useState} from 'react';
import "./App.css";


export default function App() {
  const [mood,setMood]=useState("");

  const handleMood = (emoji) =>{
    setMood(emoji);
}
  const moodText={
    '😀':'Happy',
    '😐': 'Neutral',
    '😢': 'Sad',
    '😠': 'Angry',
    '😴': 'Tired',
    '😍': 'Loved',
    '🤩': 'Excited',
    '😒': 'Bored',
    '😎': 'Confident'    
  };
  return(
    <div className='app'>
      <h1>How are you feeling today?</h1>
      <div className="emoji-options">
        <button onClick={() => handleMood('😀')}>😀 </button>
        <button onClick={() => handleMood('😐')}>😐</button>
        <button onClick={() => handleMood('😢')}>😢</button>
        <button onClick={() => handleMood('😠')}>😠</button>
        <button onClick={() => handleMood('😴')}>😴</button>
        <button onClick={() => handleMood('😍')}>😍</button>
        <button onClick={() => handleMood('🤩')}>🤩</button>
        <button onClick={() => handleMood('😒')}>😒</button>
        <button onClick={() => handleMood('😎')}>😎</button>
      </div>
      {mood &&(
        <p>You’re feeling <strong>{moodText[mood]}</strong> {mood}</p>
      )

      }
    </div>
  )

}

