import React, { Component } from 'react';

class ImageCard extends Component {
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
        <style jsx>{`
          .el-horizontal-image-card {
            position: relative;
            display: block;
            border-radius: 2px;
            width: 28.8rem;
            height: 16rem;
          }
          
          .card-content {
            position: absolute;
            top: 1.6rem;
            bottom: 1.6rem;
            left: 1.6rem;
            right: 1.6rem;
            color: #fff;
            z-index: 2;
            display: flex;
            flex-direction: column;
          }
          
          .card-text-wrapper {
            flex-grow: 1;
            display: flex;
            align-items: flex-end;
          }
          
          .card-text {
            display: flex;
            align-items: center;
            width: 100%;
          }
          
          .card-title {
            flex-grow: 1;
            font-size: 1.6rem;
            line-height: 1.5;
            font-weight: 600;
          }
          
          .scrim {
            border-radius: 2px;
          }
          
          .el-image-wrapper {
            display: inline-block;
          }
          
          .el-image-wrapper  img {
            display: block;
          }

          .el-horizontal-image-card:hover {
            cursor: pointer;
          }

          .el-horizontal-image-card:hover .scrim {
            opacity: 0.5;
          }
      `}</style>
      </div>
    );
  }
}

export default ImageCard;