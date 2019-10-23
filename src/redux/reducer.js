import { prop } from 'ramda';
import { createSelector } from 'reselect';
import uuid from 'uuid/v4';

const backendUrl = 'http://localhost:3000/verify';

const initialState = {
  sessionId: null,
  credentialVerified: true,
};

const ACTIONS = {
  CREATE_SESSION: 'CREATE_SESSION',
  VALIDATE_CREDENTIAL: 'VALIDATE_CREDENTIAL',
};

export const createSession = () => ({
    type: ACTIONS.CREATE_SESSION,
});

export const getSessionId = prop('sessionId');

export const getCallback = createSelector(
  getSessionId,
  sessionId => `decodeapp://example?serviceId=${sessionId}&callback=${backendUrl}`
);

export const getIsCredentialVerified = prop('credentialVerified');

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.CREATE_SESSION:
      return {
        ...state,
        sessionId: uuid(),
      };
    default:
      return state;
  }
};
