import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountdownContextData {
  minutes: number,
  seconds: number,
  finished: boolean,
  active: boolean,
  startCount: ()=> void,
  resetCount: ()=> void,
}

interface CountdownContextProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children } : CountdownContextProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCount(){
    setActive(true); 
  }

  function resetCount(){
    clearTimeout(countdownTimeout);
    setActive(false);
    setFinished(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if(active && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if(active && time == 0){
      setFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [active, time])

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      finished,
      active,
      startCount,
      resetCount,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}