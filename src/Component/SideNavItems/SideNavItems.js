import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavItems.css'

const SideNavItems = ({ closeSidenav, signedinState }) => {
    return (
        <div>
            <h1 className='mt0 mb0 pa4 pl2'>DailyRosary</h1>
            <div className="flex flex-column">
                <Link className='black bt bb w-100 pa3 bg-animate hover-bg-light-blue hover-white no-underline' onClick={() => closeSidenav()} to="/mission" >Mission</Link>
                <Link className='black bb w-100 pa3 bg-animate hover-bg-light-blue hover-white no-underline' onClick={() => closeSidenav()} to="/pray-app" >PrayApp</Link>
                <Link className='black bb w-100 pa3 bg-animate hover-bg-light-blue hover-white no-underline' onClick={() => closeSidenav()} to="/videos" >Videos/Music</Link>
                {
                    signedinState ?
                        <Link className='black bb w-100 pa3 bg-animate hover-bg-light-blue hover-white no-underline' onClick={() => closeSidenav()} to="/profile" >Profile</Link>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default SideNavItems;