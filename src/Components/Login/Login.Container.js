import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Component from './Login.Component';
import { getIsCredentialVerified, getCallback, createSession } from '../../redux/reducer';

const mapStateToProps = createStructuredSelector({
  callback: getCallback,
  isCredentialVerified: getIsCredentialVerified,
});

const mapDispatchToProps = {
  createSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
