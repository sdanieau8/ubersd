import React from "react";
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/home.svg';

import './homebutton.styles.scss';

const Homebutton = () => (
  <div className ='homebutton'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
  </div>
);

export default Homebutton;