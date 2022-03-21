import { createAction } from 'redux-actions';
import {
  ROUTER_STATE_CHANGE,
} from '../constants/actions';

export const routerStateChange = createAction(ROUTER_STATE_CHANGE,
  state => ({ state }));
