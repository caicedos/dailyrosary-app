import React from 'react';
import './Instructions.css'

const Instructions = ({ toggle, toggelInstructions }) => {
    return(
        <div>
            <button onClick={()=> toggelInstructions()} className='accordion'>Instructions</button>
            {toggle ? <div className='bg-washed-red'>
            This is a five decade rosary. Start by clicking on the cross and pray the prayer on the right (desktop) or bottom (smart phone), follow this for the rest of the beads. Then, click on the yellow bead, followed by three black beads. On the next yellow bead there will be a number indicating on which decade you are on. After the yellow decade bead you will find ten numbered black beads where you will pray ten Hail Marys and meditate on the event in Jesus or Marys life. When the yellow decade bead marks the number five, you are on the last set of decades.
            </div>: null}
        </div>
    )     
}

export default Instructions;