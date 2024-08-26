import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/navbar.module.css';

const NavBar = ({ name }) => {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        setCurrentPage(name);
    }, [name]); 

    return (
        <nav className={styles.nav}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
            <div className="navlinks">
                <Link to='/' className={styles.link} style={{ backgroundColor: currentPage === 'home' ? 'white' : 'transparent', color: currentPage === 'home' ? 'black' : 'white' }}>Home</Link>
                <Link to='/games' className={styles.link} style={{ backgroundColor: currentPage === 'games' ? 'white' : 'transparent', color: currentPage === 'games' ? 'black' : 'white' }}>Games</Link>
                <Link to='/movies' className={styles.link} style={{ backgroundColor: currentPage === 'movies' ? 'white' : 'transparent', color: currentPage === 'movies' ? 'black' : 'white' }}>Movies</Link>
                <Link to='/foods' className={styles.link} style={{ backgroundColor: currentPage === 'foods' ? 'white' : 'transparent', color: currentPage === 'foods' ? 'black' : 'white' }}>Foods</Link>
                <Link to='/events' className={styles.link} style={{ backgroundColor: currentPage === 'events' ? 'white' : 'transparent', color: currentPage === 'events' ? 'black' : 'white' }}>Events</Link>
                <Link to='/support' className={styles.link} style={{ backgroundColor: currentPage === 'support' ? 'white' : 'transparent', color: currentPage === 'support' ? 'black' : 'white' }}>Support</Link>
                <Link to="/commomLoign" className={styles.link}><button type="button" className={styles.signIn} >Sign in</button></Link>
                <Link to="/register" className={styles.link}><button type="button" className={styles.register} >Register</button></Link>
            </div>
        </nav>
    );
}

export default NavBar;
