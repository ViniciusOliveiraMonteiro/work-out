import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData{
  level: number;
  currentExp: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  expToLevelUp: number;
  levelUp: ()=> void;
  startNewChallenge: ()=> void;
  resetChallenge: ()=> void;
  completeChallenge: ()=> void;
}

interface ChallengesProviderProps{
  children: ReactNode;

}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const expToLevelUp = Math.pow(((level + 1) * 4), 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallenge = Math.floor(Math.random()*challenges.length);
    const challenge = challenges[randomChallenge];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio  🎉', {
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalExp = currentExp + amount;    
    
    if(finalExp >= expToLevelUp){
      finalExp = finalExp - expToLevelUp;
      levelUp();
    }

    setCurrentExp(finalExp);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);

  }

  return(
    <ChallengesContext.Provider 
    value={{
      level, 
      currentExp, 
      challengesCompleted, 
      activeChallenge,
      expToLevelUp,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

