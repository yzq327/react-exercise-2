import React from 'react';
import trolley from '../assets/trolley.jpg';
import '../styles/Hearder.scss';

const Header = () => (
  <div className="myHead">
    <h1>Store</h1>
    <div className="headRight">
      <img src={trolley} className="myImg" alt="trolley" />
      <span className="badge ">1</span>
    </div>
  </div>
);

export default Header;
