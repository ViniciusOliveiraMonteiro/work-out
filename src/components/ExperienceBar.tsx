import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExp, expToLevelUp } = useContext(ChallengesContext)

  const porcentToLevelUp = Math.round((currentExp * 100)/expToLevelUp)

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: `${porcentToLevelUp}%` }}/>

        <span className={styles.currentExperience} style={{ left: `${porcentToLevelUp}%` }}>
          {currentExp}xp
        </span>
      </div>
      <span>{expToLevelUp}xp</span>
    </header>
  );
}