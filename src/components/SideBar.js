import React from 'react';
import './style.css';

const SideBar = () => {
    return (
        <div>
            <div className='wrapper'>
                <div className='logo'>
                    <a href="/general">
                        LOGO
                    </a>
                </div>

                <div className='list'>
                    <ul className="menu">
                        <li><a href="/general" className="menu-item">Trade</a></li>
                        <li><a href="/" className="menu-item">Earn</a></li>
                        <li><a href="/" className="menu-item">Win </a></li>
                        <li><a href="/career" className="menu-item">NFT</a></li>
                        <li><a href="/" className="menu-item">...</a></li>
                    </ul>
                </div>

                <div className='wallet'>
                    <a href="/" className="menu-item contact">Connect Wallet</a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
