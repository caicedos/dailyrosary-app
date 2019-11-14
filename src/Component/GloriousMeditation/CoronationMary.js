import React from 'react';

const CoronationMary = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>As Mary enters heaven, the entire court of heaven greets with joy this masterpiece of God’s creation.</p>
        case 2:
            return <p>Mary is crowned by her divine Son as Queen of heaven and earth.</p>
        case 3:
            return <p>More than we can ever know the Hearts of Jesus and Mary overflow with joy at this reunion.</p>
        case 4:
            return <p>Only in heaven will we know the great majesty of that coronation, and the joy it gave to the angels and saints.</p>
        case 5:
            return <p>Even the angels, who by nature are greater than humans, hail Mary as their Queen.</p>
        case 6:
            return <p>Mary shares so fully in the glory of Christ because she shared so fully in His suffering.</p>
        case 7:
            return <p>Only in heaven will we see how central is the role of Mary in the divine plan of redemption.</p>
        case 8:
            return <p>The angels and saints longed for the coming of her whose heel crushes the head of the serpent.</p>
        case 9:
            return <p>Mary pleads our cause as a most powerful Queen and a most merciful and loving Mother.</p>
        case 10:
            return <p>A great sign appeared in heaven; a woman clothed with the sun, the moon under her feet, and on her head a crown of twelve stars.</p>
        default: return null
    }
}

export default CoronationMary;