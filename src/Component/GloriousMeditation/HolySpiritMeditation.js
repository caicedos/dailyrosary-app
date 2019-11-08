import React from 'react';

const HolySpiritMeditation = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            switch(today){
                case 0: return <p>The apostles are gathered in the upper room where Jesus had held the Last Supper.</p>
                
                default: return null
            }
        case 2:
                switch(today){
                case 0: return <p>They are persevering in prayer with Mary the Mother of Jesus.</p>
                
                default: return null
                }
            
        case 3:
                switch(today){
                    case 0: return <p>A sound comes from heaven like the rush of a mighty wind, and it fills the whole house.</p>
                    
                    default: return null
                }
        case 4:
                switch(today){
                    case 0: return <p>The Holy Spirit descends on each of them in the form of tongues of fire.</p>
                    
                    default: return null
                }
        case 5:
                switch(today){
                    case 0: return <p>Filled with the Gifts of the Holy Spirit, they are enlightened and strengthened to spread the Gospel.</p>
                    
                    default: return null
                }
        case 6:
                switch(today){
                    case 0: return <p>Having lost all fear of the Jewish leaders, the apostles boldly preach Christ crucified.</p>
                    
                    default: return null
                }
        case 7:
                switch(today){
                    case 0: return <p>The multitudes are confounded because every man hears them speak in his own tongue.</p>
                    
                    default: return null
                }
        case 8:
                switch(today){
                    case 0: return <p>The Holy Spirit comes upon the Infant Church never to leave it.</p>
                    
                    default: return null
                }
        case 9:
                switch(today){
                    case 0: return <p>That first day Peter goes forth to preach and baptizes three thousand.</p>
                    
                    default: return null
                }
        case 10:
                switch(today){
                    case 0: return <p>The feast of Pentecost is the birthday of the Church, for on that day it begins to grow.</p>
                    
                    default: return null
                }
        default: return null

    }
}

export default HolySpiritMeditation;