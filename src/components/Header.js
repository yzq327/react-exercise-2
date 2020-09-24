import React, { Component } from 'react';
import trolley from '../assets/trolley.jpg';
import '../styles/Hearder.scss';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div className="myHead">
        <h1>Store</h1>
        <div className="headRight">
          <img src={trolley} className="myImg" alt="trolley" />
          <span className="badge ">{this.props.count} </span>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  count: PropTypes.func,
};

export default Header;
