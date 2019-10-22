import React from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QRCode value="KK" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login with DECODE app
        </a>
      </header>
    </div>
  );
}

export default App;
