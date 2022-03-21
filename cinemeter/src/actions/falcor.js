import { createAction } from 'redux-actions';

export const RETRIEVE_PATH = 'RETRIEVE_PATH';
export const RETRIEVE_VALUE = 'RETRIEVE_VALUE';

export const retrievePath = createAction('RETRIEVE_PATH',
async (falcor, path) => {
  const result = await falcor.get(path);

  return result;
});

export const retrieveValue = createAction('RETRIEVE_VALUE',
async (falcor, path) => {
  const result = await falcor.getValue(path);

  return result;
});
