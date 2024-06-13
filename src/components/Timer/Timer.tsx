import { useEffect, useState } from 'react'
import styles from './timer.module.scss'

const Timer = () => {
  const [time, setTime] = useState(20)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => prev - 1)
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [time])

  return (
    <div className={styles.timer}>
      {time < 10 &&
      <span>
        00:0{time}
      </span>
      }
      {time >= 10 &&
      <span>
        00:{time}
      </span> 
      }
                      
    </div>
  )
}

export default Timer
