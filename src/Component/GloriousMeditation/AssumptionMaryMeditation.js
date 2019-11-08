import React from 'react';

const AssumptionMaryMeditation = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            switch(today){
                case 0: return <p>After the apostles have dispersed, the Blessed Mother goes to live with John, the beloved disciple.</p>
                
                default: return null
            }
        case 2:
                switch(today){
                case 0: return <p>Mary lives many years on earth after the death of Christ.</p>
                
                default: return null
                }
            
        case 3:
                switch(today){
                    case 0: return <p>She is a source of comfort, consolation and strength to the apostles.</p>
                    
                    default: return null
                }
        case 4:
                switch(today){
                    case 0: return <p>As she had nourished the infant Jesus, so she nourishes spiritually the infant Church.</p>
                    
                    default: return null
                }
        case 5:
                switch(today){
                    case 0: return <p>Mary dies, not of bodily infirmity, but is wholly overcome in a rapture of divine love.</p>
                    
                    default: return null
                }
        case 6:
                switch(today){
                    case 0: return <p>Her body as well as her soul is taken up into heaven.</p>
                    
                    default: return null
                }
        case 7:
                switch(today){
                    case 0: return <p>After her burial the apostles go to the tomb and find only fragrant lilies.</p>
                    
                    default: return null
                }
        case 8:
                switch(today){
                    case 0: return <p>Jesus does not permit the sinless body of His Mother to decay in the grave.</p>
                    
                    default: return null
                }
        case 9:
                switch(today){
                    case 0: return <p>Corruption of the body is an effect of original sin from which Mary is totally exempted.</p>
                    
                    default: return null
                }
        case 10:
                switch(today){
                    case 0: return <p>The bodies of all mankind, at the last judgment, will be brought back and united again to the soul.</p>
                    
                    default: return null
                }
        default: return null

    }
}

export default AssumptionMaryMeditation;