import React from 'react';

const ResurrectionMeditation = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            switch(today){
                case 0: return <p>The body of Jesus is placed in the tomb on the evening of Good Friday.</p>
                
                default: return null
            }
        case 2:
                switch(today){
                case 0: return <p>His soul descends into the realm of the dead to announce to the Just the tidings of their redemption.</p>
                
                default: return null
                }
            
        case 3:
                switch(today){
                    case 0: return <p>Fearing the body of Jesus will be taken, the chief priests place guards at the tomb.</p>
                    
                    default: return null
                }
        case 4:
                switch(today){
                    case 0: return <p>On the third day Jesus rises from the dead, glorious and immortal.</p>
                    
                    default: return null
                }
        case 5:
                switch(today){
                    case 0: return <p>The earth quakes as the angel rolls back the stone, the guards flee in terror.</p>
                    
                    default: return null
                }
        case 6:
                switch(today){
                    case 0: return <p>The holy women coming to anoint the body of Jesus are amazed and frightened to find the tomb open.</p>
                    
                    default: return null
                }
        case 7:
                switch(today){
                    case 0: return <p>An angel calms their fears: “He is not here. He has risen as He said.”</p>
                    
                    default: return null
                }
        case 8:
                switch(today){
                    case 0: return <p>Jesus appears to Mary Magdalen and Peter and two disciples on the way to Emmaus.</p>
                    
                    default: return null
                }
        case 9:
                switch(today){
                    case 0: return <p>That evening He appears to the apostles behind locked doors: “Peace be unto you… do not be afraid.”</p>
                    
                    default: return null
                }
        case 10:
                switch(today){
                    case 0: return <p>Jesus breathes on them and gives them the power to forgive sin.</p>
                    
                    default: return null
                }
        default: return null

    }
}

export default ResurrectionMeditation;

