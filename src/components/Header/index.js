import React from 'react';
import './style.scss'

import Logo from '../../assets/logo.svg'
// import { Container } from './styles';

export default function Header() {
  return (
      <div className="header">
        <img src={Logo} alt="Logo" />
      </div>
  );
}
