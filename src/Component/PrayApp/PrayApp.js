import React from 'react';
import Cross from './cross.png'
import 'material-design-icons'
import VirginArt from './virginArt.jpg'


const PrayApp = () => {
    return (
        <div>
            <article className="cf ph3 ph5-ns pv5">
                <header className="fn fl-ns w-50-ns pr4-ns">
                    <h1 className="tc f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                        Holy Rosary
                    </h1>
                    <h2 className="tc f3 mid-gray lh-title">
                        <div className="ph0">
                            <div>This is a 5 Decades Rosary. To complete it, click and follow the numbers on the black beads. The last yellow bead will count the number of Decades you have completed. God Bless you.</div>
                            <div className="mt3 grow center w4">
                                <img src={Cross} alt='Holy Cross' />
                            </div>
                            <div className=''>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-yellow hover-bg-light-blue" href="#0">'</a>
                            </div>
                            <div>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">1</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">2</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">3</a>
                            </div>
                            <div className=''>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-yellow hover-bg-light-blue" href="#0">'</a>
                            </div>
                            <div>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">1</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">2</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">3</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">4</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">5</a>
                            </div>

                            <div>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">6</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">7</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">8</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">9</a>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray hover-bg-light-blue" href="#0">10</a>
                            </div>
                            <div className=''>
                                <a className="f7 grow no-underline br-pill ph3 pv2 mb2 dib black bg-yellow hover-bg-light-blue" href="#0">0</a>
                            </div>

                        </div>

                    </h2>
                    <div className='tc'>
                        <button className='center hover grow'><svg width="50" height="50" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
                        <button className='enter hover grow'><svg width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg></button>
                    </div>
                    
                </header>
                <div className="fn fl-ns w-50-ns">
                    <h1>Prayer Name</h1>
                    <p className="f3 lh-copy measure mt0-ns">
                        
                        Our Father, Who art in heaven,
                                Hallowed be Thy Name.
                                Thy Kingdom come.
                                Thy Will be done,
                                on earth as it is in Heaven.

                                Give us this day our daily bread.
                                And forgive us our trespasses,
                                as we forgive those who trespass against us.
                                And lead us not into temptation,
                                but deliver us from evil. Amen.
                    </p>
                    <p className="f5 lh-copy measure">
                        <img src={VirginArt} alt='art'/>
                    </p>
                </div>
            </article>

        </div>
    )
}

export default PrayApp;