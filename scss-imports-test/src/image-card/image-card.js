import React, { Component } from 'react';
import './image-card.scss';

class HorizontalCard extends Component {
  render() {
    return (
      <div className="el-horizontal-image-card">
        <div className='el-image-wrapper'>
          <div className='image' width="288" height="160">
            <img src={this.props.src} alt='Horizontal card bg' />
          </div>
        </div>
        <div className="card-content">
          <div className="card-text-wrapper">
            <div className="card-text">
              <div className="card-title">{ this.props.title }</div>
            </div>
          </div>
        </div>
        <div className="scrim"></div>
      </div>
    );
  }
}

export default HorizontalCard;
