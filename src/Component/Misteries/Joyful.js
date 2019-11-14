import React from 'react';
import Annunciation from '../JoyfulMeditation/Annunciation';
import Visitation from '../JoyfulMeditation/Visitation';
import Nativity from '../JoyfulMeditation/Nativity';
import Presentation from '../JoyfulMeditation/Presentation';
import FindingJesusIntemple from '../JoyfulMeditation/FindingJesusInTemple'

const Joyful = ({ misteries, meditation }) => {
    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Annunciation (Luke 1:26–38)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Annunciation meditation={meditation}/>
                    </div>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>The Visitation (Luke 1:39–56)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Visitation meditation={meditation}/>
                    </div>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Nativity (Luke 2:1–21)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Nativity meditation={meditation}/>
                    </div>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Presentation (Luke 2:22–38)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <Presentation meditation={meditation}/>
                    </div>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Finding of the Child Jesus in the Temple (Luke 2:41–52)</h1>
                    <div className="f3 lh-copy measure mt0-ns">
                        <FindingJesusIntemple meditation={meditation}/>
                    </div>
                </div>
            )
        default:
            return null
    }
}

export default Joyful;