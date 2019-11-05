import React from 'react';
import Cross from './cross.png'

const Rosary = ({ prayerMisteryrHandler, decadeIncreaseHandler, counter }) => {
    return (
        <div>
            <h1 className="tc f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                Holy Rosary
            </h1>
            <h2 className="tc f3 mid-gray lh-title">
                <div className="ph0">
                    <div>This is a 5 Decades Rosary. To complete it, click and follow the numbers on the black beads. The second yellow bead will indicate the Decade you are praying. God Bless you.</div>
                    <div className="mt3 grow center w4">
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
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">1</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">2</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">3</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">4</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">5</a>
                    </div>
                    <div>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">6</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">7</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">8</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">9</a>
                        <a onClick={() => prayerMisteryrHandler('hailmary')} className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">10</a>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Rosary;