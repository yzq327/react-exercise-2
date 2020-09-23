import React, { Component } from 'react';
import Item from './item';

const telInfo = {
  iPhone: [
    { title: 'iPhone11', money: '5999' },
    { title: 'iPhoneXS', money: '5399' },
    { title: 'iPhoneSE', money: '3599' },
  ],
  huawei: [
    { title: 'HUAWEI P40 Pro+', money: '7999' },
    { title: 'HUAWEI Mate 30', money: '5000' },
    { title: 'HUAWEI nova 7', money: '4000' },
  ],
};

export default class Content extends Component {
  render() {
    return (
      <div className="myContent">
        <h3>iPhone</h3>
        <div className="arow">
          {telInfo.iPhone.map((res) => (
            <Item title={res.title} money={res.money} key={res.money} />
          ))}
        </div>
        <h3>HUAWEI</h3>
        <div className="arow">
          {telInfo.huawei.map((res) => (
            <Item title={res.title} money={res.money} key={res.money} />
          ))}
        </div>
      </div>
    );
  }
}
