import React from 'react';

const JesusAgony = ({ meditation }) => {
    console.log('aqui', meditation)
    switch (meditation) {
        case 1:
            return <p>Jesus comes with his disciples to Gethsemani: “Stay here, while I go yonder and pray.”</p>
        case 2:
            return <p>Entering the garden with Peter, James, and John, Jesus prays, “My soul is sorrowful unto death.”</p>
        case 3:
            return <p>Jesus sees the sins of all mankind, whose guilt He has taken upon Himself.</p>
        case 4:
            return <p>He sees the wrath of the Father which His sufferings must appease.</p>
        case 5:
            return <p>So great is his anguish that His sweat becomes as drops of blood falling to the ground.</p>
        case 6:
            return <p>An angel appears to Him from heaven to strengthen Him.</p>
        case 7:
            return <p>“Father, if it be possible, let this cup pass from Me; yet, not My will but Yours be done.”</p>
        case 8:
            return <p>Finding the disciples asleep: “Could you not watch one hour with me?”</p>
        case 9:
            return <p>Jesus is betrayed by Judas, cruelly bound and led away.</p>
        case 10:
            return <p>Father, by the merits of the agony of Jesus in the Garden, have mercy on us and on the whole world.</p>
        default: return null

    }
}

export default JesusAgony;