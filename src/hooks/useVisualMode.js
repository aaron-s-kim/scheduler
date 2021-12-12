import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] =  useState(initial);
  
  const transition = (mode) => setMode(mode);
  console.log('mode', mode);

  return { mode, transition };
}
