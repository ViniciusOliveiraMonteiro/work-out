import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCount } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCount();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCount();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.isActive}>
          <header>Ganhe {activeChallenge.amount} pontos de xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.failedBtn}
            onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
            type="button"
            className={styles.completedBtn}
            onClick={handleChallengeSucceeded}            
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </div>
  )
}