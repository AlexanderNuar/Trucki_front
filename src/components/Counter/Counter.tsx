import styles from './counter.module.scss'

import { useStore } from '../ToyItem/ToyItem'



const Counter = () => {

  const stateBears = useStore((state) => state.bears)
  
  return (
    <div className={styles.counter}>
        {stateBears}
    </div>
  )
}

export default Counter
