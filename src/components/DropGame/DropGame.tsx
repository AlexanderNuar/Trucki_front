import styles from './dropGame.module.scss'


import { Link } from '../Link/Link'

const DropGame = () => {
  return (
    <div className={styles.game}>

        <div className={styles.item}>
            <h3>Drop Game</h3>
            <Link
                to={`/game`}
                className={`${styles.link} ${
                location.pathname === '/friends' && styles.activeLink
                }`}
            >
                Play
            </Link>
        </div>
    </div>
  )
}

export default DropGame
