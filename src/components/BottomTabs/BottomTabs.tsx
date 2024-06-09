import { useLocation } from 'react-router-dom'
import { Link } from '../Link/Link'
import styles from './BottomTabs.module.css'

const BottomTabs = () => {
  const location = useLocation()

  return (
    <div className={styles.main}>
      <Link
        to={`/`}
        className={`${styles.btn} ${
          location.pathname === '/' && styles.activeBtn
        }`}
      >
        {/* {homeSvg} */}
        <div className={styles.btnTxt}>Home</div>
      </Link>
      <Link
        to={`/tasks`}
        className={`${styles.btn} ${
          location.pathname === '/tasks' && styles.activeBtn
        }`}
      >
        {/* {tasksSvg} */}
        <div className={styles.btnTxt}>Tasks</div>
      </Link>

      <Link
        to={`/friends`}
        className={`${styles.btn} ${
          location.pathname === '/friends' && styles.activeBtn
        }`}
      >
        {/* {friendsSvg} */}
        <div className={styles.btnTxt}>Frens</div>
      </Link>
    </div>
  )
}

export default BottomTabs
