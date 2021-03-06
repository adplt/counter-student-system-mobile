import {SHOW_SPINNER, HIDE_SPINNER} from '../actions/common.actions';

const spinner = (state = false, action) => {
  switch (action.type) {
  case SHOW_SPINNER:
    return true;
  case HIDE_SPINNER:
    return false;
  default:
    return state;
  }
};

export default spinner;
