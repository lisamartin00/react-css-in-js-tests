import React, { Component } from 'react';
import './App.css';
import ImageCard from './image-card/image-card';
import styled from "styled-components";

const containerWidth = '1160px';

const Container = styled.div`
  margin: 40px auto;
  width: ${containerWidth};
  
  @media (max-width: 1160px) {
    width: 100%;
  }
}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
            <h1>styled components</h1>
            <div className="grid">
              <ImageCard src='https://picsum.photos/288/160?image=1080' title='Stop!  Collaborate, and listen.' />
              <ImageCard src='https://picsum.photos/288/160/?image=1081' title='Ice is back with my brand new invention.' />
              <ImageCard src='https://picsum.photos/288/160/?image=1082' title='Something grabs ahold of me tightly.' />
            </div>
          </Container>
      </div>
    );
  }
}

export default App;
