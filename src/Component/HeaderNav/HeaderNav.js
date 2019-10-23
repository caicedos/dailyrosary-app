import React from 'react';
import SigninButton from '../SigninButton/SigninButton';
import RegisterButton from '../RegisterButton/RegisterButton';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import SideNavItems from '../SideNavItems/SideNavItems';
import './HeaderNav.css'

const HeaderNav = ({ openSidenav, sidenavState, closeSidenav, signedinState, signinHandler}) => {
    return (
        <div className='container'>
            <nav className="flex justify-between bb b--white-10">
                <MenuIcon onClick={() => openSidenav()} className="link white-70 hover-white no-underline flex items-center pa3" />
                <SideNav
                    showNav={sidenavState}
                    onHideNav={() => closeSidenav()}
                    navStyle={{
                        maxWidth: '250px',
                        background: '#E8FDF5'
                    }}
                >
                <SideNavItems closeSidenav={closeSidenav} signedinState={signedinState}/>
                </SideNav>

                <div className="flex-grow pa3 flex items-center">
                    <SigninButton signedinState={signedinState} signinHandler={signinHandler}/>
                    <RegisterButton signedinState={signedinState} signinHandler={signinHandler}/>
                </div>
            </nav>
        </div>

    )
}
export default HeaderNav;