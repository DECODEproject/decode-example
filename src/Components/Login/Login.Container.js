import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Component from './Login.Component';
import { getSessionId, getIsCredentialValidated, createSession } from '../../redux/reducer';

const mapStateToProps = createStructuredSelector({
  sessionId: getSessionId,
  isCredentialValidated: getIsCredentialValidated,
});

const mapDispatchToProps = {
  createSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
