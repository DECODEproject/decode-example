const initialState = {
  sessionId: null,
  credentialValidated: null,
};

const ACTIONS = {
  CREATE_SESSION: 'CREATE_SESSION',
  VALIDATE_CREDENTIAL: 'VALIDATE_CREDENTIAL',
};

export const createSession = () => ({
  type: ACTIONS.CREATE_SESSION,
});

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.CREATE_SESSION:
      return {
        ...state,
        sessionId: 'kk'
      };
    default:
      return state;
  }
};
