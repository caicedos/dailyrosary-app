import React from 'react';

const WeddingFeast = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>Jesus, His Mother and disciples were invited to a wedding in Cana.</p>
        case 2:
            return <p>During the wedding feast the wine ran short.</p>
        case 3:
            return <p>Mary turned to Jesus: “They have no wine.”</p>
        case 4:
            return <p>Jesus replied: “What would you have Me do? My hour has not yet come.”</p>
        case 5:
            return <p>Mary said to the waiters: “Do whatever He tells you.”</p>
        case 6:
            return <p>There were six stone water jars, each holding fifteen to twenty gallons.</p>
        case 7:
            return <p>Jesus bids the waiters to fill the jars with water, and then draw some out and take it to the chief steward.</p>
        case 8:
            return <p>The chief steward said to the groom: “Every man serves the good wine first… but you have saved the good wine until now.”</p>
        case 9:
            return <p>At Mary’s request, Jesus worked His first miracle.</p>
        case 10:
            return <p>By His presence, Christian marriage was raised to the dignity of a Sacrament.</p>
        default: return null
    }
}

export default WeddingFeast;