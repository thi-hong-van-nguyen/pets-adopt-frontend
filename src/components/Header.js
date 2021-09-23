import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='header'>
                <div className='logo-slogan-container'>
                    <div><img id='logo' src='logopaw.PNG' alt='paw' /></div>

                    <div id='slogan'>
                        <span id='slogan-1'>From</span>
                        <span id='slogan-2'>One</span>
                        <span id='slogan-3'>Home</span>
                        <span id='slogan-4'>To</span>
                        <span id='slogan-5'>Another</span>
                    </div>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dogs'>Dogs</Link></li>
                        <li><Link to='/cats'>Cats</Link></li>
                        <li><Link to='/others'>Others</Link></li>
                        <li><Link to='/how-it-works'>How it works</Link></li>
                    </ul>
                </div>
                <div className='login-logout-menu'>
                    <ul>
                        <li id='login'><Link to='/login'>Log in</Link></li>
                        <li id='signup'><Link to='/signup'>Sign up</Link></li>
                       {/* <li id='logout'><Link to='/logout'>Log out</Link></li>
                       <li id='login-as'>Logged in as ________</li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}