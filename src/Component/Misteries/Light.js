import React from 'react';

const Glorious = ({ mistery }) => {

    switch (mistery) {
        case 1:
            return (
                <div>
                    <h1>The Baptism in the River Jordan (Matthew 3:13–16)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1> The Wedding Feast at Cana (John 2:1–11)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>The Preaching of the coming of the Kingdom of God (Mark 1:14–15)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 4:
            return (
                <div>
                    <h1>The Transfiguration (Matthew 17:1–8)</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        here goes the prayer or mistery description!!
                    </p>
                </div>
            )
        case 5:
            return (
                <div>
                    <h1>The Institution of the Holy Eucharist (Matthew 26).</h1>
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