import { Map as iMap } from 'immutable';

import { RETRIEVE_PATH } from '../actions/falcor';

const initialState = iMap({});

export default function(state = initialState, action) {
  switch (action.type) {
  case RETRIEVE_PATH:
    return state.mergeDeep(action.payload.json);
  default:
    return state;
  }
}
