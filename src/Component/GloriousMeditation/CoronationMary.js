import React from 'react';

const CoronationMary = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            switch(today){
                case 0: return <p>As Mary enters heaven, the entire court of heaven greets with joy this masterpiece of God’s creation.</p>
                
                default: return null
            }
        case 2:
                switch(today){
                case 0: return <p>Mary is crowned by her divine Son as Queen of heaven and earth.</p>
                
                default: return null
                }
            
        case 3:
                switch(today){
                    case 0: return <p>More than we can ever know the Hearts of Jesus and Mary overflow with joy at this reunion.</p>
                    
                    default: return null
                }
        case 4:
                switch(today){
                    case 0: return <p>Only in heaven will we know the great majesty of that coronation, and the joy it gave to the angels and saints.</p>
                    
                    default: return null
                }
        case 5:
                switch(today){
                    case 0: return <p>Even the angels, who by nature are greater than humans, hail Mary as their Queen.</p>
                    
                    default: return null
                }
        case 6:
                switch(today){
                    case 0: return <p>Mary shares so fully in the glory of Christ because she shared so fully in His suffering.</p>
                    
                    default: return null
                }
        case 7:
                switch(today){
                    case 0: return <p>Only in heaven will we see how central is the role of Mary in the divine plan of redemption.</p>
                    
                    default: return null
                }
        case 8:
                switch(today){
                    case 0: return <p>The angels and saints longed for the coming of her whose heel crushes the head of the serpent.</p>
                    
                    default: return null
                }
        case 9:
                switch(today){
                    case 0: return <p>Mary pleads our cause as a most powerful Queen and a most merciful and loving Mother.</p>
                    
                    default: return null
                }
        case 10:
                switch(today){
                    case 0: return <p>A great sign appeared in heaven; a woman clothed with the sun, the moon under her feet, and on her head a crown of twelve stars.</p>
                    
                    default: return null
                }
        default: return null

    }
}

export default CoronationMary;