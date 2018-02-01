import React, { Component } from 'react';
import styled from "styled-components";

const HorizontalImageCard = styled.div`
  position: relative;
  display: block;
  border-radius: 2px;
  width: 28.8rem;
  height: 16rem;

  &:hover {
    cursor: pointer;
    ${CardScrim} {
      opacity: 0.5;
    }
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 1.6rem;
  bottom: 1.6rem;
  left: 1.6rem;
  right: 1.6rem;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

const CardTextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
`;

const CardText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const CardTitle = styled.div`
  flex-grow: 1;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 600;
`;

const Scrim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  background-color: #000000;
  z-index: 1;
`;

const CardScrim = Scrim.extend`
  border-radius: 2px;
`;

class HorizontalCard extends Component {
  render() {
    return (
      <HorizontalImageCard>
        <img src={this.props.src} alt='Horizontal card bg' />
        <CardContent>
          <CardTextWrapper>
            <CardText>
              <CardTitle>{ this.props.title }</CardTitle>
            </CardText>
          </CardTextWrapper>
        </CardContent>
        <CardScrim></CardScrim>
      </HorizontalImageCard>
    );
  }
}

export default HorizontalCard;
