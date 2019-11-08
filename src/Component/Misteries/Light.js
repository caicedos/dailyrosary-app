import React from 'react';
import Baptism from '../LightMeditation/Baptism';
import WeddingFeast from '../LightMeditation/WeddingFeast';
import Preaching from '../LightMeditation/Preaching';
import Transfiguration from '../LightMeditation/Transfiguration';
import Eucharist from '../LightMeditation/Eucharist';


const Light = ({ misteries, meditation  }) => {

    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Baptism in the River Jordan (Matthew 3:13–16)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Baptism meditation={meditation}/>
                    </div>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1> The Wedding Feast at Cana (John 2:1–11)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <WeddingFeast meditation={meditation}/>
                    </div>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Preaching of the coming of the Kingdom of God (Mark 1:14–15)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Preaching meditation={meditation}/>
                    </div>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Transfiguration (Matthew 17:1–8)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Transfiguration meditation={meditation}/>
                    </div>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Institution of the Holy Eucharist (Matthew 26).</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Eucharist meditation={meditation}/>
                    </div>
                </div>
            )
        default:
            return null
    }
}

export default Light;