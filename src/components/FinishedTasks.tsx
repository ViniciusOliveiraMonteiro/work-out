import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/FinishedTasks.module.css';

export function FinishedTasks(){
  const { challengesCompleted } = useContext(ChallengesContext);


  return(
    <div className={styles.finishedTaskContainer}>
      <span>Tarefas completas</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}