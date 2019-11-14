import React from 'react';

const FindingJesusInTemple = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>When Jesus is twelve years old, He goes with His parents to Jerusalem for the feast of the Passover.</p>
        case 2:
            return <p>After the feast of the Passover, Joseph and Mary unknowingly set out for Nazareth without Jesus.</p>
        case 3:
            return <p>At the end of the first day’s journey they discover Jesus is missing.</p>
        case 4:
            return <p>His parents return immediately looking for Him.</p>
        case 5:
            return <p>This loss causes grief and anxiety beyond our understanding to the hearts of Mary and Joseph.</p>
        case 6:
            return <p>On the third day they find Jesus in the Temple among the Doctors who were astonished at His wisdom.</p>
        case 7:
            return <p>Mary: “Son, why have you done this to us? Your father and I have been searching for You in sorrow.”</p>
        case 8:
            return <p>Jesus: “Why did you search for Me? Did you not know that I must be about My Father’s business?”</p>
        case 9:
            return <p>Jesus goes down with them to Nazareth, and is subject to them.</p>
        case 10:
            return <p>Mary keeps all these things in her heart.</p>
        default: return null
    }
}

export default FindingJesusInTemple;