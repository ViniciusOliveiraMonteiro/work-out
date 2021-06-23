import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
  const { 
    minutes, 
    seconds, 
    finished, 
    active, 
    resetCount, 
    startCount 
  } = useContext(CountdownContext)
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { finished ? (
        <button
          disabled
          className={styles.countdownBtn}
        >
          Desafio encerrado
        </button>
      ) : (
        <>
          { active ? (
            <button 
              type="button" 
              className={`${styles.countdownBtn} ${styles.countdownBtnActive}`}
              onClick={resetCount}
            >
              Abandonar desafio
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownBtn}
              onClick={startCount}
            >
              Iniciar desafio
            </button>
          ) }
        </>
      ) }

      
      
    </div>
  );
}