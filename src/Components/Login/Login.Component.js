import React, {useEffect} from 'react';
import QRCode from 'react-qr-code';

const Login = ({
  createSession,
  callback,
  isCredentialVerified,
}) => {
  useEffect(() => { createSession() }, []);
  return (
    <React.Fragment>
      <QRCode value={callback} />
      <a className="App-link" href={callback} target="_blank" rel="noopener noreferrer">
        Login with DECODE app
      </a>
      <p>{callback}</p>
      <p>{isCredentialVerified ? 'Valid!' : 'Invalid'}</p>
    </React.Fragment>
  );
};

export default Login;
