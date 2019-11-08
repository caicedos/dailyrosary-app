import React from 'react';

const Preaching = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>“Repent, for the kingdom of God is at hand.”</p>
        case 2:
            return <p>“My kingdom is not of this world.”</p>
        case 3:
            return <p>“Unless a man be born again of water and the Spirit, he cannot enter the kingdom of heaven.”</p>
        case 4:
            return <p>Whoever does not accept the kingdom of God as a little child will not enter into it.”</p>
        case 5:
            return <p>“I have come to call sinners, not the just.”</p>
        case 6:
            return <p>“Love your enemies, pray for those who persecute you.”</p>
        case 7:
            return <p>“Blessed are the poor in spirit, for theirs is the kingdom of heaven.”</p>
        case 8:
            return <p>Blessed are they who hunger and thirst for justice, for they shall be satisfied.”</p>
        case 9:
            return <p>“Blessed are they who suffer persecution for justice’ sake, for theirs is the kingdom of heaven.”</p>
        case 10:
            return <p>“You are Peter, and upon this rock I will build My church… I will give you the keys of the kingdom of heaven.”</p>
        default: return null
    }
}

export default Preaching;