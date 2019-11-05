import React from 'react';

const Glorious = ({ misteries }) => {

    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Resurrection (John 20:1–29)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>The Ascension (Luke 24:36–53)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Descent of the Holy Spirit (Acts 2:1–41)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Assumption of Mary</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Coronation of Mary in heaven</h1>
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