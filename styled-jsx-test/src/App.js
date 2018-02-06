import React, { Component } from 'react';
import ImageCard from './image-card/image-card';
import logo from './logo.svg';
import './App.css';
import css from 'styled-jsx/css'

class App extends Component {
  render() {
    const containerWidth = '1160px';
    return (
      <div className="App">
        <div className="container">
          <div className="grid">
            <ImageCard src='https://picsum.photos/288/160?image=1080' title='Stop!  Collaborate, and listen.' />
            <ImageCard src='https://picsum.photos/288/160/?image=1081' title='Ice is back with my brand new invention.' />
            <ImageCard src='https://picsum.photos/288/160/?image=1082' title='Something grabs ahold of me tightly.' />
          </div>
        </div>
        <style jsx>{`
          .container {
            margin: 40px auto;
            width: ${containerWidth};
          }
          .grid {
            display: grid;
            grid-template-columns: auto auto auto;
          }
          @media (max-width: 1160px) {
            .container {
              width: 100%;
            }
          }
        `}</style>
         <style jsx global>{`
            .scrim {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              opacity: 0.3;
              background-color: #000000;
              z-index: 1;
            }
        `}</style>
      </div>
    );
  }
}

export default App;
