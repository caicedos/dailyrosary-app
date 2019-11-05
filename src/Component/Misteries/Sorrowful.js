import React from 'react';

const Glorious = ({ misteries }) => {
    console.log(misteries)
    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Agony of Jesus in the Garden (Matthew 26:36–56)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>The Scourging at the Pillar (Matthew 27:26)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1> The Crowning with Thorns (Matthew 27:27–31)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Carrying of the Cross (Matthew 27:32)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Crucifixion (Matthew 27:33–56)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        default:
            return null
    }
}

export default Glorious;