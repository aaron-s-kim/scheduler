import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); // array stack

  // Adds new mode to history arr, if replace=true, replace prev mode with new mode
  //  ex. (1) Form > (2) saving Status > (3) Error; 'back' will skip Status and go to Form
  const transition = (newMode, replace = false) => {
    setHistory(prev => {
      if (replace) return [newMode, ...prev.slice(1)]; // adds newMode to front of prev arr, removes 1st item of prev arr
      return [newMode, ...prev]; // adds newMode to front of arr
    });
  }
  
  // Sets mode to prev item in history arr
  const back = () => {    
    setHistory(prev => {
      if (history.length <= 1) return prev; // Back limit: no prev mode if already at initial
      return prev.slice(1);
    });
  };

  const mode = history[0]; // selects first item of arr

  return { mode, transition, back };
}
