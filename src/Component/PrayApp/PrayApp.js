import React from 'react';
import Rosary from '../Rosary/Rosary'
import Mistery from '../Mistery/Mistery'
import Prayer from '../Prayer/Prayer'
import AudioControls from '../AudioControls/AudioControls'


const PrayApp = () => {
    return (
        <div>
            <article className="cf ph3 ph5-ns pv5">
                <header className="fn fl-ns w-50-ns pr4-ns">
                    <Rosary />
                    <AudioControls />
                </header>
                <div className="fn fl-ns w-50-ns">
                    <Prayer />
                    <Mistery />
                </div>
            </article>

        </div>
    )
}

export default PrayApp;