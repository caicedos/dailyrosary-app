import React from 'react';

const Annunciation = ({ meditation, today }) => {
    console.log('aqui', meditation)
    switch (meditation) {
        case 1:
            return <p>The time for the Incarnation is at hand.</p>
        case 2:
            return <p>Of all women God prepared Mary from her conception to be the Mother of the Incarnate Word.</p>
        case 3:
            return <p>The Angel Gabriel announces: “Hail, full of grace! The Lord is with thee.”</p>
        case 4:
            return <p>Mary wonders at this salutation.</p>
        case 5:
            return <p>The Angel assures her: “Fear not . . . you shall conceive in your womb, and give birth to a Son.”</p>
        case 6:
            return <p>Mary is troubled for she has made a vow of virginity.</p>
        case 7:
            return <p>The Angel answers that she will conceive by the power of the Holy Spirit, and her Son will be called the Son of God.</p>
        case 8:
            return <p>The Incarnation awaits Mary’s consent.</p>
        case 9:
            return <p>Mary answers: “Behold the handmaid of the Lord. Be it done unto me according to your word.”</p>
        case 10:
            return <p>The Word was made flesh and dwelt among us.</p>
        default: return null
    }
}

export default Annunciation;