import React from 'react';

const Scourging = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            return <p>Jesus is taken before the High Priest where He is falsely accused, buffeted and insulted.</p>
        case 2:
            return <p>The Jewish leaders take Jesus before Pilate, for only he can impose the death penalty.</p>
        case 3:
            return <p>The robber, Barabbas, is preferred to Jesus.</p>
        case 4:
            return <p>Pilate can “find no cause in Him”, yet to appease the Jews, he orders Jesus to be scourged.</p>
        case 5:
            return <p>The scourge is made of leather thongs to which are attached small sharp bones.</p>
        case 6:
            return <p>Jesus is bound to a pillar and cruelly scourged until His whole body is covered with deep wounds.</p>
        case 7:
            return <p>The Lamb of God offers His suffering for the sins of mankind.</p>
        case 8:
            return <p>Jesus suffers so much in His sacred flesh to satisfy, especially, for sins of the flesh.</p>
        case 9:
            return <p>The prophecy of Isaiah is fulfilled: “He was wounded for our iniquities, He was bruised for our sins.”</p>
        case 10:
            return <p>Father, by the merits of Jesus in this painful scourging, have mercy on us and on the whole world.</p>
        default: return null

    }
}

export default Scourging;