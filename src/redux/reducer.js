import 'dotenv/config';
import { prop } from 'ramda';
import { createSelector } from 'reselect';
import uuid from 'uuid/v4';
import fetch from 'node-fetch';

const backendUrl = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`;

const initialState = {
  sessionId: null,
  credentialVerified: false,
  sharedData: [],
};

const ACTIONS = {
  CREATE_SESSION: 'CREATE_SESSION',
  VALIDATE_CREDENTIAL: 'VALIDATE_CREDENTIAL',
  CHECK_SESSION_REQUEST: 'CHECK_SESSION_REQUEST',
  CHECK_SESSION_SUCCESS: 'CHECK_SESSION_SUCCESS',
  CHECK_SESSION_FAILURE: 'CHECK_SESSION_FAILURE',
};

export const checkSession = sessionId => async(dispatch) => {
  console.log('URL: ', `${backendUrl}/session/${sessionId}`);
  dispatch({
    type: ACTIONS.CHECK_SESSION_REQUEST,
  });
  try{
    const resp = await fetch(`${backendUrl}/session/${sessionId}`);
    const data = await resp.json();
    console.log('Data: ', data);
    const { sessionStatus, sharedData } = data;
    dispatch({
      type: ACTIONS.CHECK_SESSION_SUCCESS,
      sessionStatus,
      sharedData,
    });
  } catch (e) {
    dispatch({
      type: ACTIONS.CHECK_SESSION_FAILURE,
      e,
    });
  }
};

export const createSession = () => ({
    type: ACTIONS.CREATE_SESSION,
});

export const getSessionId = prop('sessionId');

export const getSharedData = prop('sharedData');

export const getDecodeAppUrl = createSelector(
  getSessionId,
  sessionId => `decodeapp://example?serviceId=${sessionId}&callback=${backendUrl}/verify`
);

export const getIsCredentialVerified = prop('credentialVerified');

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.CREATE_SESSION:
      return {
        ...state,
        sessionId: uuid(),
      };
    case ACTIONS.CHECK_SESSION_SUCCESS:
      console.log('Status: ', action.sessionStatus);
      return {
        ...state,
        credentialVerified: action.sessionStatus ? action.sessionStatus === 'valid' : false,
        sharedData: action.sharedData,
      };
    case ACTIONS.CHECK_SESSION_FAILURE:
      console.log('Error: ', action.e);
      return state;
    default:
      return state;
  }
};
