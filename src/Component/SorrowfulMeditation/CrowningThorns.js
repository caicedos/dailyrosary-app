import React from 'react';

const CrowningThorns = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            return <p>Pilate asks, “Are You a king?” Jesus answers: “I am a King, but My kingdom is not of this world.”</p>
        case 2:
            return <p>In the praetorium, the soldiers place an old purple robe on Jesus in mockery of His claim to be a king.</p>
        case 3:
            return <p>They fashion a crown out of thorns, and forcefully press it down upon His head.</p>
        case 4:
            return <p>In His bound hands they place a reed, as a sceptre, in mockery of His kingship.</p>
        case 5:
            return <p>Kneeling before Him in derision, they spit on Him, and cry out: “Hail, King of the Jews!”</p>
        case 6:
            return <p>Taking the reed from His hand they strike Him on the head, driving the thorns more deeply into His scalp.</p>
        case 7:
            return <p>Pilate brings Jesus before the people, hoping His pitiful sight will soften them: “Behold the man!”</p>
        case 8:
            return <p>Their response: “Crucify Him! Crucify Him!”</p>
        case 9:
            return <p>Our Blessed Lord submitted to this terrible humiliation to make reparation for our pride.</p>
        case 10:
            return <p>Father, by the merits of this painful humiliation, have mercy on us and on the whole world.</p>
        default: return null
    }
}

export default CrowningThorns;