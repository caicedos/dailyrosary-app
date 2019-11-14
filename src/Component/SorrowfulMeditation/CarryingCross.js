import React from 'react';

const CarryingCross = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>One condemned to death by crucifixion is forced to carry the cross to the place of execution.</p>
        case 2:
            return <p>The suffering of Jesus is intense as the cross is laid on His bruised and wounded back and shoulders.</p>
        case 3:
            return <p>Weak and exhausted from loss of blood, lack of food and rest, Jesus falls three times under the cross.</p>
        case 4:
            return <p>Jesus meets His afflicted Mother causing untold anguish in the Hearts of Son and Mother.</p>
        case 5:
            return <p>The countenance of Jesus is disfigured with blood and sweat, with dust and spittle.</p>
        case 6:
            return <p>Veronica wipes His face, leaving on her towel the image of His countenance.</p>
        case 7:
            return <p>Fearing that Jesus might die on the way, the soldiers force Simon of Cyrene to carry the cross behind Jesus.</p>
        case 8:
            return <p>Jesus speaks to weeping women: “Weep not for Me, but for yourselves and your children.”</p>
        case 9:
            return <p>“If anyone is to be My disciple, let him take up his cross and follow Me.”</p>
        case 10:
            return <p>Father, by the merits of this painful journey to Calvary, have mercy on us and on the whole world.</p>
        default: return null
    }
}

export default CarryingCross;