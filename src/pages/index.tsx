import Head from 'next/head';

import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { FinishedTasks } from '../components/FinishedTasks';
import { Perfil } from '../components/Perfil';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountdownProvider } from './../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}> 

      <Head>
        <title>Home | WorkOut</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Perfil />
            <FinishedTasks />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      
    </div>
  );
}
