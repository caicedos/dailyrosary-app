import React from 'react';

const HolySpiritMeditation = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>The apostles are gathered in the upper room where Jesus had held the Last Supper.</p>
        case 2:
            return <p>They are persevering in prayer with Mary the Mother of Jesus.</p>
        case 3:
            return <p>A sound comes from heaven like the rush of a mighty wind, and it fills the whole house.</p>
        case 4:
            return <p>The Holy Spirit descends on each of them in the form of tongues of fire.</p>
        case 5:
            return <p>Filled with the Gifts of the Holy Spirit, they are enlightened and strengthened to spread the Gospel.</p>
        case 6:
            return <p>Having lost all fear of the Jewish leaders, the apostles boldly preach Christ crucified.</p>
        case 7:
            return <p>The multitudes are confounded because every man hears them speak in his own tongue.</p>
        case 8:
            return <p>The Holy Spirit comes upon the Infant Church never to leave it.</p>
        case 9:
            return <p>That first day Peter goes forth to preach and baptizes three thousand.</p>
        case 10:
            return <p>The feast of Pentecost is the birthday of the Church, for on that day it begins to grow.</p>
        default: return null
    }
}

export default HolySpiritMeditation;