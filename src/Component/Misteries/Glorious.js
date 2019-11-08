import React from 'react';
import ResurrectionMeditation from '../GloriousMeditation/ResurrectionMeditation';
import AscensionMeditation from '../GloriousMeditation/AscensionMeditation';
import HolySpiritMeditation from '../GloriousMeditation/HolySpiritMeditation';
import AssumptionMaryMeditation from '../GloriousMeditation/AssumptionMaryMeditation';
import CoronationMaryMeditation from '../GloriousMeditation/CoronationMary';

const Glorious = ({ misteries, meditation }) => {


    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Resurrection (John 20:1–29)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        <ResurrectionMeditation meditation={meditation}/>
                        
                    </p>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>The Ascension (Luke 24:36–53)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        <AscensionMeditation meditation={meditation}/>
                    </p>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Descent of the Holy Spirit (Acts 2:1–41)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        <HolySpiritMeditation meditation={meditation}/>
                    </p>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Assumption of Mary</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        <AssumptionMaryMeditation meditation={meditation}/>
                    </p>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Coronation of Mary in heaven</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        <CoronationMaryMeditation meditation={meditation}/>
                    </p>
                </div>
            )
        default:
            return null
    }
}

export default Glorious;