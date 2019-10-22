import React, {useEffect} from 'react';
import QRCode from 'react-qr-code';

const Login = ({
  createSession,
  sessionId,
  isCredentialValidated,
}) => {
  useEffect(() => createSession(), []);
  return (
    <React.Fragment>
      <QRCode value="KK" />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Login with DECODE app
      </a>
      <p>Session id: {sessionId}, {isCredentialValidated ? 'Valid!' : 'Invalid'}</p>
    </React.Fragment>
  );
};

export default Login;
