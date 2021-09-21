import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Logo</div>
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
                    <li><Link to='/login'>Log in</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                    <li><Link to='/logout'>Log out</Link></li>
                </ul>
                <span>Logged in as ________</span>
            </div>
        </header>
    )
}
