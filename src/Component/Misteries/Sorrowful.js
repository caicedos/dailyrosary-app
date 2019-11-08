import React from 'react';
import CarryingCross from '../SorrowfulMeditation/CarryingCross';
import CrowningThorns from '../SorrowfulMeditation/CrowningThorns';
import Crucifixion from '../SorrowfulMeditation/Crucifixion';
import JesusAgony from '../SorrowfulMeditation/JesusAgony';
import Scourging from '../SorrowfulMeditation/Scourging';


const Sorrowful = ({ misteries, meditation, today }) => {
    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Agony of Jesus in the Garden (Matthew 26:36–56)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <JesusAgony meditation={meditation}/>
                    </div>
                    
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>The Scourging at the Pillar (Matthew 27:26)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Scourging meditation={meditation}/>
                    </div>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1> The Crowning with Thorns (Matthew 27:27–31)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <CrowningThorns meditation={meditation}/>
                    </div>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Carrying of the Cross (Matthew 27:32)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <CarryingCross meditation={meditation}/>
                    </div>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Crucifixion (Matthew 27:33–56)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Crucifixion meditation={meditation}/>
                    </div>
                </div>
            )
        default:
            return null
    }
}

export default Sorrowful;