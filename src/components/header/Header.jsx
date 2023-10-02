import React from 'react'
import { useState } from 'react'

export default function Header() {

    const [header, setHeader] = useState(false);
    const headerPosition = () => {
        if (window.scrollY >= 350) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    window.addEventListener('scroll', headerPosition)

    const hoverColor = (e) => {
        e.target.style.color = '#ff4a52'
    }
    const normalColor = (e) => {
        e.target.style.color = '#aab1b7'
    }

    const [navBar, setNavBar] = useState(false);
    const toggleMenuBar = () => {
        setNavBar(!navBar)
    }

    navBar ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

    return (
        <header className={header ? 'header-sec active' : 'header-sec'}>
            <div className='header-left'>
                <div className='header-left-logo-area'>
                    <a href="#">
                        <img src="assets/headerAssets/logo.webp" alt="Travelo Logo" />
                    </a>
                </div>
                <i id='header-more-menu' class="fa-solid fa-bars-staggered" onClick={toggleMenuBar} style={{ color: '#ff4a52' }}></i>
                <nav className="nav-bar"></nav>
                <nav className='header-nav-bar'>
                    <ul className='header-nav-bar-links-area'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className='header-mid'>

                <div className='header-m--l'>
                    <i id='header-m--l-icon' class="fa-solid fa-phone" style={{ color: '#ff4a52' }}></i>
                    <p id='header-m--l-mob'>10(256)-928 256</p>
                </div>

                <div className='header-m--r'>
                    <div className='header-m--r-social-links-area'>
                        <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-instagram" style={{ color: '#aab1b7' }}></i></a>

                        <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-linkedin-in" style={{ color: '#aab1b7' }}></i></a>

                        <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-facebook-f" style={{ color: '#aab1b7' }}></i></a>

                        <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-google-plus-g" style={{ color: '#aab1b7' }}></i></a>
                    </div>
                </div>

            </div>

            <div className='header-right'>
                <a href="#">
                    <i class="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
                </a>
            </div>

            <div className={`menu-bar-hidden ${navBar ? 'show' : ''}`}>
                <div className='menu-bar-hidden-top'>
                    <a className='menu-bar-hidden-logo' href="#">
                        <img src="assets/headerAssets/logo.webp" alt="Travelo Logo" />
                    </a>
                    <div className='nav-bar-hidden-close-icon'>
                        <i id='header-nav-bar-ham' class="fa-solid fa-xmark" onClick={toggleMenuBar} style={{ color: '#ff4a52' }}></i>
                    </div>
                </div>
                <nav className='nav-bar-hidden'>
                    <ul className='header-nav-bar-links-area'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <a className='menu-bar-hidden-search' href="#">
                    <i class="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
                </a>
                <div className='header-m--r-social-links-area'>
                    <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-instagram" style={{ color: '#aab1b7' }}></i></a>

                    <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-linkedin-in" style={{ color: '#aab1b7' }}></i></a>

                    <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-facebook-f" style={{ color: '#aab1b7' }}></i></a>

                    <a className='header-m--r-social-before' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-google-plus-g" style={{ color: '#aab1b7' }}></i></a>
                </div>
                <div className='header-m--l-hidden'>
                    <i id='header-m--l-icon' class="fa-solid fa-phone" style={{ color: '#ff4a52' }}></i>
                    <p id='header-m--l-mob'>10(256)-928 256</p>
                </div>
            </div>

        </header>
    )
}