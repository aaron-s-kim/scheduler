import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] =  useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log('__start hook__');
  console.log('mode', mode);
  console.log('history', history);

  // When transition is called, we need to add the new mode to our history.
  const transition = (mode) => {
    const newHistory = [...history];
    newHistory.push(mode);
    setHistory(newHistory);
    setMode(mode);
  }
  
  // When back is called, we should set the mode to the previous item in our history array.
  const back = () => {
    history.pop(); // removes last item
    const lastItem = history[history.length - 1] // previous last item
    console.log('lastItem', lastItem);
    setMode(lastItem);
  };

  return { mode, transition, back };
}
