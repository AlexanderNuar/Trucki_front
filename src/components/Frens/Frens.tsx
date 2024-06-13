import styles from './frens.module.scss'

import avatar from '../../../public/frens.png'

const Frens = () => {
  return (
    <div className={styles.page}>
        <div className={styles.img}>
            <img src={avatar} alt="" />
        </div>
        <p className={styles.task}>9 task available</p>

        <ul className={styles.list}>
            <li className={styles.list__item}>
                <div className={styles.list__top}>
                    <div className={styles.left}>
                        <p>
                        Invite 5 frens
                        </p>
                        <span>+120 TTС</span>
                    </div>
                    <div className={styles.right}>
                        <p>
                            <span>0</span>
                            /5
                        </p>
                    </div>
                </div>
                <div className={styles.list__bottom}>
                    <button className={styles.btn}>Claim</button>
                </div>
            </li>

            <li className={styles.list__item}>
                <div className={styles.list__top}>
                    <div className={styles.left}>
                        <p>
                        Invite 5 frens
                        </p>
                        <span>+120 TTС</span>
                    </div>
                    <div className={styles.right}>
                        <p>
                            <span>0</span>
                            /5
                        </p>
                    </div>
                </div>
                <div className={styles.list__bottom}>
                    <button className={styles.btn}>Start</button>
                </div>
            </li>
            <li className={styles.list__item}>
                <div className={styles.list__top}>
                    <div className={styles.left}>
                        <p>
                        Invite 5 frens
                        </p>
                        <span>+120 TTС</span>
                    </div>
                    <div className={styles.right}>
                        <p>
                            <span>0</span>
                            /5
                        </p>
                    </div>
                </div>
                <div className={styles.list__bottom}>
                    <button className={styles.btn}>Claim</button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Frens
