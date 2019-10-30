import React from 'react';

const Joyful = ({ misteries }) => {

    switch (misteries) {
        case 1:
            return (
                <div>
                    <h1>The Annunciation (Luke 1:26–38)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                    here goes the prayer or mistery description!!
                    </p>
                </div>
            )
            case 2:
                return (
                    <div>
                    <h1>The Visitation (Luke 1:39–56)</h1>
                    <p className="f3 lh-copy measure mt0-ns">

                    here goes the prayer or mistery description!!
                    </p>
                </div>
            )
            case 3:
                return (
                    <div>
                    <h1>The Nativity (Luke 2:1–21)</h1>
                    <p className="f3 lh-copy measure mt0-ns">

                    here goes the prayer or mistery description!!
                    </p>
                </div>
            )
            case 4:
                return (
                    <div>
                    <h1>The Presentation (Luke 2:22–38)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                    here goes the prayer or mistery description!!

                    </p>
                </div>
            )
            case 5:
                return (
                    <div>
                    <h1>The Finding of the Child Jesus in the Temple (Luke 2:41–52)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                    here goes the prayer or mistery description!!

                    </p>
                </div>
            )
        default:
            return null
    }

}

export default Joyful;