import React from 'react';
import Cross from './cross.png'
import moment from 'moment'
import Instructions from '../Instructions/Instructions'

const Rosary = ({ toggle, toggelInstructions, prayerMisteryrHandler, decadeIncreaseHandler, counter, today }) => {
    const misteryTitle = () => {
        switch (today) {
            case 0:
                return 'Glorious Misteries'
            case 1:
                return 'Joyful Misteries'
            case 2:
                return 'Sorrowful Misteries'
            case 3:
                return 'Glorious Misteries'
            case 4:
                return 'Light Misteries'
            case 5:
                return 'Sorrowful Misteries'
            case 6:
                return 'Joyful Misteries'
            default:
                return null
        }
    }

    return (
        <div>
            <h1 className="tc f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                {misteryTitle()} <br />
                {moment().format('dddd, MMM Do')}
            </h1>
            <h2 className="tc f3 mid-gray lh-title">
                <div className="ph0">
                    <Instructions toggle={toggle} toggelInstructions={toggelInstructions} />
                    <div className="cross mt3 grow center w4">
                        <img onClick={() => prayerMisteryrHandler('apostlescreed')} src={Cross} alt='Holy Cross' />
                    </div>
                    <div className=''>
                        <a onClick={() => prayerMisteryrHandler('ourfather')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-yellow hover-bg-light-blue" href="#0">'</a>
                    </div>
                    <div>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">1</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">2</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">3</a>
                    </div>
                    <div className=''>
                        <a onClick={() => decadeIncreaseHandler('glorybe', 'ourfather')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib black bg-yellow hover-bg-light-blue" href="#0">{counter}</a>
                    </div>
                    <div>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 1)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">1</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 2)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">2</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 3)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">3</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 4)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">4</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 5)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">5</a>
                    </div>
                    <div>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 6)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">6</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 7)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">7</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 8)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">8</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 9)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">9</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary', '', 10)} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">10</a>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Rosary;