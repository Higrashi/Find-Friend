import React from 'react';
import {Link} from 'react-router-dom';
import {useWindowDimensions} from '../window-hook/window-dimension-hook';
import SideNav from '../side-nav/side-nav.component';
import './header.styles.css';

const Header = () => {

    const {width} = useWindowDimensions();

    return (
        <header className={width > 1000 ? 'header' : 'mobileHeader'}>

                {
                    width < 600 ? 
                    <SideNav /> :
                        <div className='navBox'>
                        <Link to='/' className='navLink'>Home</Link>
                        <Link to='/all' className='navLink'>All</Link>
                        <Link to='/cats-page' className='navLink'>Cats</Link>
                        <Link to='/dogs-page' className='navLink'>Dogs</Link>
                        {/* <Link to='/animals/cat' className='navLink'>Cats</Link>
                         <Link to='/animals/dog' className='navLink'>Dogs</Link> */}
                    </div>
                }

                
            

            
        </header>
    )
}

export default Header;