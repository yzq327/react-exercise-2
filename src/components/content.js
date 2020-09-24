import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgUrl from '../assets/product_image_placeholder.png';
//import Item from './item';
const URL = 'http://localhost:3000/procucts';

// const telInfo = {
//   iPhone: [
//     { title: 'iPhone11', money: '5999' },
//     { title: 'iPhoneXS', money: '5399' },
//     { title: 'iPhoneSE', money: '3599' },
//   ],
//   huawei: [
//     { title: 'HUAWEI P40 Pro+', money: '7999' },
//     { title: 'HUAWEI Mate 30', money: '5000' },
//     { title: 'HUAWEI nova 7', money: '4000' },
//   ],
// };

class Content extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { category: '', name: '', price: '' },
        { category: '', name: '', price: '' },
        { category: '', name: '', price: '' },
        { category: '', name: '', price: '' },
        { category: '', name: '', price: '' },
        { category: '', name: '', price: '' },
      ],
    };
  }
  componentDidMount() {
    async function fetchDate(url) {
      const result = await fetch(url).then((response) => response.json());
      return result;
    }
    fetchDate(URL)
      .then((result) => {
        this.setState({
          procucts: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="myContent">
        <h3>iPhone</h3>
        <div className="arow">
          <div className="cardOne">
            <p className="cardTitle">{this.state.products[0].name}</p>
            <img src={imgUrl} className="productImg"></img>
            <div className=" myBottom">
              <span className="money">￥{this.state.products[0].price}</span>
              <button className="addBtn" onClick={this.props.buy}>
                add to cart
              </button>
            </div>
          </div>
          <div className="cardOne">
            <p className="cardTitle">{this.state.products[1].name}</p>
            <img src={imgUrl} className="productImg"></img>
            <div className=" myBottom">
              <span className="money">￥{this.state.products[1].price}</span>
              <button className="addBtn" onClick={this.props.buy}>
                add to cart
              </button>
            </div>
          </div>
          <div className="cardOne">
            <p className="cardTitle">{this.state.products[2].name}</p>
            <img src={imgUrl} className="productImg"></img>
            <div className=" myBottom">
              <span className="money">￥{this.state.products[2].price}</span>
              <button className="addBtn" onClick={this.props.buy}>
                add to cart
              </button>
            </div>
          </div>
        </div>
        <h3>HUAWEI</h3>
        <div className="arow">
          <div className="cardOne">
            <p className="cardTitle">{this.state.products[3].name}</p>
            <img src={imgUrl} className="productImg"></img>
            <div className=" myBottom">
              <span className="money">￥{this.state.products[3].price}</span>
              <button className="addBtn" onClick={this.props.buy}>
                add to cart
              </button>
            </div>
          </div>
          <div className="cardOne">
            <p className="cardTitle">{this.state.products[4].name}</p>
            <img src={imgUrl} className="productImg"></img>
            <div className=" myBottom">
              <span className="money">￥{this.state.products[4].price}</span>
              <button className="addBtn" onClick={this.props.buy}>
                add to cart
              </button>
            </div>
          </div>
          <div className="cardOne">
            <p className="cardTitle">{this.state.products[5].name}</p>
            <img src={imgUrl} className="productImg"></img>
            <div className=" myBottom">
              <span className="money">￥{this.state.products[5].price}</span>
              <button className="addBtn" onClick={this.props.buy}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Content.propTypes = {
  buy: PropTypes.func,
};
export default Content;
