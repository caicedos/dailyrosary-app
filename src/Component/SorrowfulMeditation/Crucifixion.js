import React from 'react';

const Crucifixion = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            return <p>The hands and feet of Jesus are nailed to the cross in the presence of His afflicted Mother.</p>
        case 2:
            return <p>“Father, forgive them for they know not what they do.”</p>
        case 3:
            return <p>“This day you will be with Me in paradise.”</p>
        case 4:
            return <p>“Woman, behold your son. Son, behold your Mother.”</p>
        case 5:
            return <p>“My God, My God, why have You forsaken Me?”</p>
        case 6:
            return <p>“I thirst.”</p>
        case 7:
            return <p>“It is finished.”</p>
        case 8:
            return <p>“Father, into Your hands I commend My spirit.”</p>
        case 9:
            return <p>The side of Jesus is pierced with a lance. His body is taken down and placed in the arms of His Mother.</p>
        case 10:
            return <p>Father, by the merits of the crucifixion and death of Jesus, have mercy on us and on the whole world.</p>
        default: return null
    }
}

export default Crucifixion;