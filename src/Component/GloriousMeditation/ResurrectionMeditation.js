import React from 'react';

const ResurrectionMeditation = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>The body of Jesus is placed in the tomb on the evening of Good Friday.</p>
        case 2:
            return <p>His soul descends into the realm of the dead to announce to the Just the tidings of their redemption.</p>
        case 3:
            return <p>Fearing the body of Jesus will be taken, the chief priests place guards at the tomb.</p>
        case 4:
            return <p>On the third day Jesus rises from the dead, glorious and immortal.</p>
        case 5:
            return <p>The earth quakes as the angel rolls back the stone, the guards flee in terror.</p>
        case 6:
            return <p>The holy women coming to anoint the body of Jesus are amazed and frightened to find the tomb open.</p>
        case 7:
            return <p>An angel calms their fears: “He is not here. He has risen as He said.”</p>
        case 8:
            return <p>Jesus appears to Mary Magdalen and Peter and two disciples on the way to Emmaus.</p>
        case 9:
            return <p>That evening He appears to the apostles behind locked doors: “Peace be unto you… do not be afraid.”</p>
        case 10:
            return <p>Jesus breathes on them and gives them the power to forgive sin.</p>
        default: return null
    }
}

export default ResurrectionMeditation;

