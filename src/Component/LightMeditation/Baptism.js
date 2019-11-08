import React from 'react';

const Baptism = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>John is baptizing in the Jordan proclaiming a baptism of repentance.</p>
        case 2:
            return <p>“I am the voice of one crying in the desert, make straight the way of the Lord.”</p>
        case 3:
            return <p>“One mightier than I is coming after me.”</p>
        case 4:
            return <p>“I have baptized you with water, He will baptize you with the Holy Spirit.”</p>
        case 5:
            return <p>Seeing Jesus, John exclaims: “Behold the Lamb of God.”</p>
        case 6:
            return <p>Against protests of his unworthiness, John baptizes Jesus in the Jordan.</p>
        case 7:
            return <p>After Jesus’ baptism a voice from Heaven: “This is my beloved Son in whom I am well pleased.”</p>
        case 8:
            return <p>The Spirit descends upon Jesus in the form of a dove.</p>
        case 9:
            return <p>In this heavenly manifestation is instituted the sacrament of baptism.</p>
        case 10:
            return <p>The divine Trinity is manifested: the voice of the Father is heard as the Spirit descends upon the Son.</p>
        default: return null
    }
}

export default Baptism;