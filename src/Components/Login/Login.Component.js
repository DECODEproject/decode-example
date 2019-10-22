import React from 'react';
import QRCode from 'react-qr-code';

const Login = ({
  createSession,
  sessionId,
  isCredentialValidated,
}) => (
  <React.Fragment>
    <QRCode value="KK" />
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Login with DECODE app
    </a>
    <p>Session id: {sessionId}, {isCredentialValidated ? 'Valid!' : 'Invalid'}</p>
  </React.Fragment>
);

export default Login;
