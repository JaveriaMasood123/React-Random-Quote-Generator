import { useState } from 'react';
import './App.css';
export default function App() {
const [quote, setQuote] = useState("Click the button for wisdom!");
const [bgColor, setBgColor] = useState("#f8f9fa");
const quotes = [
"Code is poetry.",
"Keep it simple, stupid.",
"React > Angular.",
"Vite is lightning fast! ⚡",
"The best way to predict the future is to invent it.",
"Simplicity is the ultimate sophistication."
];

const color=["pink" ,'purple','lightgreen','grey' ,'mehroon','brown','lightblue']
const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    // Generate a random pastel color
    const hue = Math.floor(Math.random() * color.length);
    setBgColor(color[hue]);
    };
    return (
    <div className="app-container" style={{ background: bgColor }}>
    <div className="quote-card">
    <h1 className="quote-text">"{quote}"</h1>
    <button
    className="inspire-button"
    onClick={generateQuote}
    >
    Inspire Me ✨
    </button>
    </div>
    <p className="footer-text">
    Click the button for more wisdom!
    </p>
    </div>
    );
}




// import { useState } from "react";
// import './App.css';
// export default function App(){
//     const [quote,setQuote] =useState("Click the button for wisdom!")
//     const [bgColor,setBgColor]=useState("#f8f9fa")
//     const quotes=[
// "Code is poetry.",
// "Keep it simple, stupid.",
// "React > Angular.",
// "Vite is lightning fast! ⚡",
// "The best way to predict the future is to invent it.",
// "Simplicity is the ultimate sophistication."]

// const generateQuote= ()=> {
//      const randomIndex=Math.floor(Math.random() * quotes.length);
//      setQuote(quotes[randomIndex]);

//      // Generate a random pastel color
//      const hue=Math.floor(Math.random() * 360);
//      setBgColor(`hsl(${hue},80%,90%)`);
// }
// return(
//     <div className="app-container" style={{backgroundColor:bgColor}}>
//     <div className="quote-card">
//     <h1 className="quote-text">{quote}</h1>
//     <button className="inspire-button" onClick={generateQuote}>Inspire Me ✨</button>
//     </div>
//     <p className="footer-text">Click the button for more wisdom!</p>
//     </div>
//     )

// }