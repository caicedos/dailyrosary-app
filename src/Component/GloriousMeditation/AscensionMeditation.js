import React from 'react';

const AscensionMeditation = ({ meditation }) => {
    switch (meditation) {
        case 1:
            return <p>Jesus remains on earth forty days after His Resurrection to prove He has truly risen from the dead.</p>
        case 2:
            return <p>He commissions the apostles to preach the gospel to every creature, and promises to be with them forever.</p>
        case 3:
            return <p>He will not leave them orphans, but will send the Holy Spirit to enlighten and strengthen them.</p>
        case 4:
            return <p>Jesus proceeds to Mt. Olivet accompanied by His Mother and the apostles and disciples.</p>
        case 5:
            return <p>Extending His pierced hands over all in a last blessing, He ascends into heaven.</p>
        case 6:
            return <p>As He ascends a cloud takes Him from their sight.</p>
        case 7:
            return <p>Jesus ascends to take His place at the right hand of the Father.</p>
        case 8:
            return <p>What jubilation there must be amid the angels of heaven at the triumphant entry of Jesus.</p>
        case 9:
            return <p>The wounds in His glorified body are an endless plea before the Father on our behalf.</p>
        case 10:
            return <p>The disciples leave Mt. Olivet and “return to Jerusalem with great joy.”</p>
        default: return null
    }
}

export default AscensionMeditation;