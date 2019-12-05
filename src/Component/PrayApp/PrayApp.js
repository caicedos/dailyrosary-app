import React, { Component } from 'react';
import Rosary from '../Rosary/Rosary'
import MisteryDay from '../MisteryDay/MisteryDay'
import Prayer from '../Prayer/Prayer'
import AudioControls from '../AudioControls/AudioControls'
import hailmaryAudio from './hailmaryAudio.wav';
import ourfatherAudio from './ourfatherAudio.wav';
import apostlescreedAudio from './apostlescreedAudio.wav';
import glorybeOurfatherAudio from './glorybeOurfatherAudio.wav';

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
            audio: false,
            prayerAudio: {},
            meditation: 0,
            toggel: false
        }
    }

    prayerCounter = (meditation) => {
        const { misteries } = this.state
        if (meditation === 10 && misteries === 5){
            this.props.prayerCount()
        }
    }

    audioPlay = () => {
        const { prayer1, prayer2 } = this.state
        if (prayer1 === 'hailmary') {
            return hailmaryAudio
        } else if (prayer1 === 'glorybe' && prayer2 === 'ourfather') {
            return glorybeOurfatherAudio
        } else if (prayer1 === 'ourfather') {
            return ourfatherAudio
        } else if (prayer1 === 'apostlescreed') {
            return apostlescreedAudio
        }
    }

    playControl = (command) => {
        const { prayerAudio } = this.state

        if (command === 'play') {
            const audio = new Audio(this.audioPlay())
            audio.play()
            this.setState({
                prayerAudio: audio
            })
        } else {
            prayerAudio.pause()
        }
    }

    decadeIncreaseHandler = (prayer1, prayer2) => {
        let count = this.state.counter
        let mistery = this.state.misteries
        if (count < 5) {
            count++
            mistery++
        }

        this.setState({
            prayer1,
            prayer2,
            counter: count,
            misteries: mistery,
            meditation: 0
        })
    }

    prayerMisteryrHandler = (prayer1, prayer2, meditation) => {
        this.setState({ prayer1, prayer2, meditation })
        this.prayerCounter(meditation)
    }

    toggelInstructions= () => {
        if(this.state.toggle){
            this.setState({ toggle: false})    
        } else {
            this.setState({ toggle: true})
        }
    }

    componentDidMount() {
        const today = new Date().getDay()
        this.setState({ today })
    }

    render() {
        const { toggle, meditation, audio, prayer1, prayer2, today, counter, misteries } = this.state

        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Holy Rosary</h1>
                <article className="cf ph3 ph5-ns pv5">
                    <header className="fn fl-ns w-50-ns pr4-ns">
                        <Rosary toggle={toggle} toggelInstructions={this.toggelInstructions} today={today} counter={counter} decadeIncreaseHandler={this.decadeIncreaseHandler} prayerMisteryrHandler={this.prayerMisteryrHandler} />
                        <AudioControls audio={audio} playControl={this.playControl} />
                    </header>
                    <div className="fn fl-ns w-50-ns">
                        <Prayer prayer1={prayer1} prayer2={prayer2} />
                        <MisteryDay meditation={meditation} misteries={misteries} today={today} />
                    </div>
                </article>
            </div>
        )
    }
}

export default PrayApp;