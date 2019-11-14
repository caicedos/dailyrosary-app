import React from 'react';

const AssumptionMaryMeditation = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>After the apostles have dispersed, the Blessed Mother goes to live with John, the beloved disciple.</p>
        case 2:
            return <p>Mary lives many years on earth after the death of Christ.</p>
        case 3:
            return <p>She is a source of comfort, consolation and strength to the apostles.</p>
        case 4:
            return <p>As she had nourished the infant Jesus, so she nourishes spiritually the infant Church.</p>
        case 5:
            return <p>Mary dies, not of bodily infirmity, but is wholly overcome in a rapture of divine love.</p>
        case 6:
            return <p>Her body as well as her soul is taken up into heaven.</p>
        case 7:
            return <p>After her burial the apostles go to the tomb and find only fragrant lilies.</p>
        case 8:
            return <p>Jesus does not permit the sinless body of His Mother to decay in the grave.</p>
        case 9:
            return <p>Corruption of the body is an effect of original sin from which Mary is totally exempted.</p>
        case 10:
            return <p>The bodies of all mankind, at the last judgment, will be brought back and united again to the soul.</p>
        default: return null
    }
}

export default AssumptionMaryMeditation;