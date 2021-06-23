import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Perfil.module.css';


export function Perfil() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.perfilContainer}>
      <img src="https://avatars.githubusercontent.com/u/43955926?s=460&u=700abaa2bc094e3c8f17b5cda7af1ff8e9bc6281&v=4" alt="Vinicius Monteito GitHub" />
      <div>
        <strong>Vinicius Monteiro</strong>
        <p>
          <img src="icons/level.svg" alt="icon level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}