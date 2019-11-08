import React from 'react';

const Transfiguration = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>Jesus took Peter, James and John up a high mountain to pray.</p>
        case 2:
            return <p>Jesus was transfigured before them.</p>
        case 3:
            return <p>“His face became as dazzling as the sun, his clothes as radiant as light.”</p>
        case 4:
            return <p>his was to fortify their faith to withstand the coming tragedy of the Passion.</p>
        case 5:
            return <p>Jesus foresaw the ‘scandal of the cross,’ and prepared them for it by this manifestation of His glory.</p>
        case 6:
            return <p>Moses and Elias (representing the Law and the prophets of the Old Testament) were conversing with Jesus about His Passion.</p>
        case 7:
            return <p>“Do not think I have come to destroy the Law or the Prophets… but to fulfill them.”</p>
        case 8:
            return <p>From a cloud came a voice: “This is my beloved Son, listen to Him.”</p>
        case 9:
            return <p>Jesus admonishes them not to tell the vision to anyone until the Son of Man rises from the dead.</p>
        case 10:
            return <p>We too will behold the transfigured Jesus on the Last Day.</p>
        default: return null
    }
}

export default Transfiguration;