import React, { Component } from 'react';
import Rosary from '../Rosary/Rosary'
import MisteryDay from '../MisteryDay/MisteryDay'
import Prayer from '../Prayer/Prayer'
import AudioControls from '../AudioControls/AudioControls'


class PrayApp extends Component {
    constructor() {
        super();
        this.state = {
            prayer1: '',
            prayer2: '',
            today: '',
            misteries: 0,
            counter: 0,
            image: '',
            audio: false
        }
    }


    decadeIncreaseHandler = (prayer1, prayer2) => {
        let count = this.state.counter
        let mistery = this.state.misteries
        if(count < 5){
            count++
            mistery++
        }

        this.setState({
            prayer1: prayer1,
            prayer2: prayer2,
            counter: count,
            misteries: mistery
        })
    }

    prayerMisteryrHandler = (prayer1, prayer2, mistery) => {
        
        this.setState({
            prayer1: prayer1,
            prayer2: prayer2,
        })
    }

    componentDidMount () {
     const today = new Date().getDay()
        this.setState({today})
    }
    
    render() {
        
        const { audio, prayer1, prayer2, today, counter, misteries } = this.state
        return (
            <div>
                <article className="cf ph3 ph5-ns pv5">
                    <header className="fn fl-ns w-50-ns pr4-ns">
                        <Rosary counter={counter} decadeIncreaseHandler={this.decadeIncreaseHandler} prayerMisteryrHandler={this.prayerMisteryrHandler}/>
                        <AudioControls audio={audio} />
                    </header>
                    <div className="fn fl-ns w-50-ns">
                        <Prayer prayer1={prayer1} prayer2={prayer2}/>
                        <MisteryDay misteries={misteries} today={today} />
                    </div>
                </article>

            </div>
        )
    }

}

export default PrayApp;









                            // misteryToPray: {
                            //     today: '',
                            //     misteries: [
                            //         {
                            //             name: 'Glorious',
                            //             days: [1, 6],
                            //             mistery: ['annunciation', 'visitation', 'nativity', 'presentation', 'finding']
                            //         }, 
                            //         {
                            //             name: 'Sorrowful',
                            //             days: [2, 5],
                            //             mistery: ['agony', 'scourging', 'thorns', 'carrying', 'crucifixion']
                            //         }, 
                            //         {
                            //             name: 'Glorious',
                            //             days: [3, 7],
                            //             mistery: ['resurrection', 'ascension', 'holyspirit', 'assumption', 'coronation']
                            //         },
                            //         {
                            //             name: 'Light',
                            //             days: [4],
                            //             mistery: ['baptism', 'wedding', 'preaching', 'transfiguration', 'holyeucharist']
                            //         }
                            //     ],
                            // },