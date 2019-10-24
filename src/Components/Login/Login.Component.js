import React, { useEffect } from 'react';
import QRCode from 'react-qr-code';
import { compose, split, map } from 'ramda';
import useInterval from '../../lib/use-interval';

const Login = ({
  sessionId,
  createSession,
  decodeAppUrl,
  isCredentialVerified,
  checkSession,
}) => {
  useEffect(() => { createSession() }, []);
  useInterval(() => { checkSession(sessionId) }, 5000);
  return (
    <React.Fragment>
      <QRCode value={decodeAppUrl} />
      <a className="App-link" href={decodeAppUrl} target="_blank" rel="noopener noreferrer">
        Login with DECODE app
      </a>
      {
        compose(
          map(item => <span>{item}<br/></span>),
          split(/[\?&]/g),
        )(decodeAppUrl)
      }
      <h3>{isCredentialVerified ? 'Verified!' : 'Not verified'}</h3>
    </React.Fragment>
  );
};

export default Login;
