import Timer from '@/components/Timer/Timer'
import styles from './game.module.scss'
import Counter from '@/components/Counter/Counter'
import Toy from '@/components/Toy/Toy'
import { useEffect, useState } from 'react'
import { Link } from '@telegram-apps/telegram-ui'




const Game = () => {
  const [end, setEnd] = useState(false)

  const [counter, setCounter] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      import('../../components/ToyItem/ToyItem')
        .then(module => {
          setCounter(module.useStore.getState().bears);
          setEnd(true);
        })
        .catch(error => {
          console.error('Failed to import ToyItem module:', error);
        });
    }, 20000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  if (end) {

    return (
      <div>
        {counter && (
          <div>
            <p>Bears: {counter}</p>
            <Link href='/'>
              return to home page 
            </Link>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`${styles.page} gamePage`}>
      <div className={styles.top}>
        <Timer/>
        <Counter/>
      </div>
      <Toy/>
    </div>
  )
}

export default Game
