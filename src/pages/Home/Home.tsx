import styles from './Home.module.scss'

import DropGame from '@/components/DropGame/DropGame'
import User from '@/components/User/User'
import Farming from '@/components/Farming/Farming'


const Home = () => {
  return (
    <div className={styles.main}>
      <User/>
      <DropGame/>
      <Farming/>
    </div>
  )
}

export default Home
