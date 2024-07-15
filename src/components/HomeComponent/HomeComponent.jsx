// HomeComponent.js
import React from 'react';
import ProfilePic from '../../assets/pet-5728249_640.jpg';
import GradientButton from '../GradientButton/GradientButton';
import classes from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HomeComponent = () => {
  return (
    <div className={classes.homecontainer}>
      <div className={classes.imageWrapper}>
        <img className={classes.img} src={ProfilePic} alt="Profile" />
      </div>
      <div className={classes.textWrapper}>
        <h3>Hi, Myself</h3>
        <h2>Mohiddeen Vilak Mohammad</h2>
        <h3>I'm a Full Stack Developer</h3>
        <GradientButton name="Download CV" />
        <ul className={classes.ul}>
          <li><a href="https://www.instagram.com/moin_v.md/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.facebook.com/mohammad.mohiddeen.vilak/"><FontAwesomeIcon icon={faFacebook} /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
