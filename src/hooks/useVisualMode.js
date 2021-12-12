import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] =  useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log('__start hook__');
  console.log('mode', mode);
  console.log('history', history);

  // When transition is called, we need to add the new mode to our history.
  // Add Default Parameter 'replace' argument
  //   When replace = true, set history to reflect we are replacing current mode.
  const transition = (mode, replace = false) => {
    const newHistory = [...history];
    if (replace) newHistory.pop();
    newHistory.push(mode);
    setHistory(newHistory);
    setMode(mode);
  }
  
  // When back is called, we should set the mode to the previous item in our history array.
  // Back Limit: should not return to previous mode if already at initial
  //  history array needs to have length >= 2.
  const back = () => {
    if (history.length < 2) return;
    history.pop(); // removes last item
    const lastItem = history[history.length - 1] // previous last item
    console.log('lastItem', lastItem);
    setMode(lastItem);
  };

  return { mode, transition, back };
}
