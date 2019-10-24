import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Component from './Login.Component';
import { getSessionId, getIsCredentialVerified, getDecodeAppUrl, createSession, checkSession } from '../../redux/reducer';

const mapStateToProps = createStructuredSelector({
  sessionId: getSessionId,
  decodeAppUrl: getDecodeAppUrl,
  isCredentialVerified: getIsCredentialVerified,
});

const mapDispatchToProps = {
  createSession,
  checkSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
