import React, { Component } from 'react';
import logo from '../image/logo.png';
import mode from '../image/dark-mode.png';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends Component {

    render() {
        const { handleDarkModeToggle, darkMode } = this.props;
        return (
            <>
                <nav className={`navbar py-3 navbar-expand-lg bg-body-tertiary fixed-top  ${darkMode ? 'dark-Mode' : 'Light-Mode'} `} >
                    <div className="container-fluid" style={{ width: '95%' }}>
                        <Link className={`navbar-brand ${darkMode ? 'text-white' : 'text-black'}`} to="/">
                            <img className="px-1" src={logo} alt="logo" width="50px" />
                            <span className='ms-2'>Flash News</span>
                        </Link>

                        <div className="dropdown">
                            <Link className="btn btn-secondary dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News Category
                            </Link>

                            <ul className="dropdown-menu ">
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/business">
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/entertainment">
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/health">
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/science">
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/sports">
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/technology">
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <input type="checkbox" className="btn-check" id="btn-check-2-outlined" autoComplete="off" onClick={handleDarkModeToggle} />
                            <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined"><img src={mode} alt='darkmode' /></label><br></br>
                        </div>
                    </div>
                </nav >

            </>
        );
    }
}
