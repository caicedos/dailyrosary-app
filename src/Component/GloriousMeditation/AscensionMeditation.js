import React from 'react';

const AscensionMeditation = ({ meditation, today }) => {
    switch (meditation) {
        case 1:
            switch(today){
                case 0: return <p>Jesus remains on earth forty days after His Resurrection to prove He has truly risen from the dead.</p>
                
                default: return null
            }
        case 2:
                switch(today){
                case 0: return <p>He commissions the apostles to preach the gospel to every creature, and promises to be with them forever.</p>
                
                default: return null
                }
            
        case 3:
                switch(today){
                    case 0: return <p>He will not leave them orphans, but will send the Holy Spirit to enlighten and strengthen them.</p>
                    
                    default: return null
                }
        case 4:
                switch(today){
                    case 0: return <p>Jesus proceeds to Mt. Olivet accompanied by His Mother and the apostles and disciples.</p>
                    
                    default: return null
                }
        case 5:
                switch(today){
                    case 0: return <p>Extending His pierced hands over all in a last blessing, He ascends into heaven.</p>
                    
                    default: return null
                }
        case 6:
                switch(today){
                    case 0: return <p>As He ascends a cloud takes Him from their sight.</p>
                    
                    default: return null
                }
        case 7:
                switch(today){
                    case 0: return <p>Jesus ascends to take His place at the right hand of the Father.</p>
                    
                    default: return null
                }
        case 8:
                switch(today){
                    case 0: return <p>What jubilation there must be amid the angels of heaven at the triumphant entry of Jesus.</p>
                    
                    default: return null
                }
        case 9:
                switch(today){
                    case 0: return <p>The wounds in His glorified body are an endless plea before the Father on our behalf.</p>
                    
                    default: return null
                }
        case 10:
                switch(today){
                    case 0: return <p>The disciples leave Mt. Olivet and “return to Jerusalem with great joy.”</p>
                    
                    default: return null
                }
        default: return null

    }
}

export default AscensionMeditation;