import React from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/back.svg';

import './backbutton.styles.scss';


const BackButton = () => {
  const navigate = useNavigate();
  return (
      <div className ='backbutton'>
        <Logo className='logo' onClick={() => navigate(-1)} />
      </div>
    );
};


export default BackButton;