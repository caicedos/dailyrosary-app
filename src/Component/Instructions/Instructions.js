import React from 'react';
import './Instructions.css'

const Instructions = ({ toggle, toggelInstructions }) => {
    console.log(toggle)
    return(
        <div>
            <button onClick={()=> toggelInstructions()} className='accordion'>Instructions</button>
            {toggle ? <div className='bg-washed-red'>
            This is a 5 Decades Rosary. To complete it, click and follow the numbers on the black beads. The second yellow bead will indicate the Decade you are praying. God Bless you.
            </div>: null}
        </div>
    )     
}

export default Instructions;