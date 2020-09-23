import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgUrl from '../assets/product_image_placeholder.png';

export default class Item extends Component {
  render() {
    return (
      <div className="cardOne">
        <div className="cardTitle">{this.props.title}</div>
        <img src={imgUrl} className="productImg" />
        <div className=" myBottom">
          <span className="money">￥{this.props.money}</span>
          <button className="addBtn">add to cart</button>
        </div>
      </div>
    );
  }
}
Item.propTypes = {
  title: PropTypes.string,
  money: PropTypes.string,
};
