import { useEffect, useState } from 'react'
import ToyItem from '../ToyItem/ToyItem';

// import styles from './toy.module.scss'



const Toy = () => {
  const [items, setItems] = useState<number>(0)

  
  useEffect(() => {
    const timer = setInterval(() => {
      setItems(prev => prev + 1)
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [items]);

  // console.log(items)

  return (
    Array.from(Array(items)).map((el, index) => {
      return (
        <>
          <ToyItem key={index}/>
        </>
      )
    })
    
    // <ToyItem/>
  )
}

export default Toy
