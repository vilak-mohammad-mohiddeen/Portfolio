import React, { useState } from 'react'
import classes from './header.module.css';

const HeaderComponent = () => {
    const [clicked,setClick]=useState(false);
    function handleMenu(e){
        e.preventDefault()
        setClick(true);
    }
    function handleClose(e){
        e.preventDefault()
        setClick(false);
    }
    return (

        <nav>
            <ul  className={`${classes.sidebar} ${clicked ? classes.open : ''}`}>
            <li><a onClick={handleClose} href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="">About</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
                
            </ul>
            <ul >
                <li><a href="">Mohiddeen</a></li>
                <li className={classes.hideOnMobile}><a href="">About</a></li>
                <li className={classes.hideOnMobile}><a href="">Experience</a></li>
                <li className={classes.hideOnMobile}><a href="">Project</a></li>
                <li className={classes.hideOnMobile}><a href="">Contact</a></li>
                <li className={classes.hideOnDesktop}><a onClick={handleMenu} href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
        </nav>

    )
}

export default HeaderComponent