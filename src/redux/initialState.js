import {storage} from '@core/utils';
import {DEFAULT_STYLES, DEFAULT_TITLE} from '../constants';

const defaultState = {
  title: DEFAULT_TITLE,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: DEFAULT_STYLES,
};

const normalize = (state) => ({
  ...state,
  currentStyles: DEFAULT_STYLES,
  currentText: '',
});

export const initialState = storage('excel-state')
    ? normalize(storage('excel-state'))
    : defaultState;
