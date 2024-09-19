import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({x:0, y:0})
    const {x,y} = cords
    
    useEffect(() => {
        
        const mousemove = (e) => {
            const cordenadas = {x:e.x, y:e.y}
            
            setCords(cordenadas)
            
        }

        window.addEventListener('mousemove', mousemove)

    
    return () => {
        window.removeEventListener('mousemove', mousemove)
    }
    }, [])


    return (
    <>
    
    <h3>Correcto !!!</h3>
    <p>
        x: {x}  y: {y}
    </p>
    </>
  )
}
