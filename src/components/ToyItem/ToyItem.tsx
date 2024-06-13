import { useEffect, useRef, useState } from 'react'
import { create } from 'zustand'
import carImg from '../../../public/toy2.png'

import styles from './toyItem.module.scss'

export const useStore = create((set) => ({
    bears: 0,
    inc: () => set((state) => ({bears: state.bears + 3}))
}))

const ToyItem = () => {
    const divRef = useRef<HTMLDivElement | null>(null)
    // top
    const [x, setX] = useState(-10);
    // left
    const [y, setY] = useState(0);
    // click or No
    const [click, setClick] = useState(false)

    const stateBears = useStore((state) => state.bears)
    const increasePopulation = useStore((state) => state.inc)


    // скорость
    const speed = 5

    // рандомное появление
    useEffect(() => {
        const generateRandomY = () => {
            const randomNumber = Math.floor(Math.random() * 90);
            setY(randomNumber)
            // console.log(randomNumber, 'y')
        }
        generateRandomY()
    }, []) 

    // движение по диагонали
    useEffect(() => {
        const timer = setInterval(() => {
            setX((prev) => prev + 2)
        }, speed);

        return () => {
            clearInterval(timer);
        };
    }, [divRef])

    useEffect(() => {
        console.log(stateBears)
    }, [stateBears])



    const handleClick = () => {
        setClick(true)
    }

    useEffect(() => {
        if (click == true) {
            divRef.current?.classList.add('hidden')
            increasePopulation
        }
    }, [click])


    if (x === 3000) {
        return 
    }


    return (
        <div 
            ref={divRef} 
            className={styles.item} 
            onClick={handleClick}
            style={{
                top: `${x}%`,
                left: `${y}%`,
            }}
        >
            <img onClick={increasePopulation} src={carImg} alt="car" />
        </div>
    )
}

export default ToyItem
