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
  sharedData,
}) => {
  useEffect(() => { createSession() }, []);
  useInterval(() => { checkSession(sessionId) }, 5000);
  return (
    <React.Fragment>
      { isCredentialVerified ? null :
        <React.Fragment>
          <QRCode value={decodeAppUrl} />
          <a className="App-link" href={decodeAppUrl} target="_blank" rel="noopener noreferrer">
            Login with DECODE app
          </a>
          {
            compose(
              map(item => <span key={item}>{item}<br /></span>),
              split(/[?&]/g),
            )(decodeAppUrl)
          }
        </React.Fragment>
      }
      {isCredentialVerified ? <h4>Verified! You shared:</h4> : null}
      { map(({ attribute_id, value }) => <span key={attribute_id}>{`${attribute_id}: ${value}`}<br/></span>)(sharedData) }
    </React.Fragment>
  );
};

export default Login;
