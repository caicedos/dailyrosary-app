import React from 'react';

const Visitation = ({ meditation, today }) => {
    console.log('aqui', meditation)
    switch (meditation) {
        case 1:
            return <p>Mary’s cousin Elizabeth conceived a son in her old age… for nothing is impossible with God.</p>
        case 2:
            return <p>Charity prompts Mary to hasten to visit Elizabeth in the hour of her need.</p>
        case 3:
            return <p>The journey to Elizabeth’s home is about eighty miles requiring four or five days.</p>
        case 4:
            return <p>Though long and arduous, the journey is joyous, for Mary bears with her the Incarnate Word.</p>
        case 5:
            return <p>t Mary’s salutation, John the Baptist is sanctified in his mother’s womb.</p>
        case 6:
            return <p>Elizabeth exclaims: “Blessed are you among women, and blessed is the fruit of your womb.”</p>
        case 7:
            return <p>“How have I deserved that the mother of my Lord should come to me?”</p>
        case 8:
            return <p>“Blessed is she who believed that the Lord’s words to her would be fulfilled.”</p>
        case 9:
            return <p>Mary replies: “My soul proclaims the greatness of the Lord, and my spirit finds joy in God my Savior.”</p>
        case 10:
            return <p>Mary serves her cousin in all humility for three months until the birth of John the Baptist.</p>
        default: return null
    }
}

export default Visitation;