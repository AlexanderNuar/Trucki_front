import styles from './user.module.scss'

import avatar from '../../../public/avatar.png'

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.image}>
        <img src={avatar} alt="logo" />
      </div>
      <h2>username</h2>
      <h1>300.000</h1>
    </div>
  )
}

export default User
