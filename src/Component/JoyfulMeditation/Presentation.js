import React from 'react';

const Presentation = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>Observing the law of Moses they take Jesus to the temple to present Him to the Lord.</p>
        case 2:
            return <p>According to the Law the firstborn male child of every family should be consecrated to the Lord.</p>
        case 3:
            return <p>Mary offers her Son to the Father, then ransoms Him back at the price paid by the poor.</p>
        case 4:
            return <p>Jesus is not subject to the law of Moses, yet to teach obedience, submits to it.</p>
        case 5:
            return <p>Mary is not subject to the law of purification, yet in humility she submits to it.</p>
        case 6:
            return <p>God had revealed to Simeon that he would not see death until he had seen the Messiah.</p>
        case 7:
            return <p>Recognizing the Child, he prays: “Now you can dismiss your servant in peace. You have fulfilled your word.”</p>
        case 8:
            return <p>“This Child is destined to be the downfall and rise of many in Israel, a sign that will be opposed.”</p>
        case 9:
            return <p>And to Mary Simeon reveals: “And your own soul a sword shall pierce.”</p>
        case 10:
            return <p>After they fulfill all the Law requires they return to Nazareth.</p>
        default: return null
    }
}

export default Presentation;