// import { screen } from '../../data/template1/template1Screen';
import { UPDATE_SCREEN_DATA } from '../constants';

const initialState = {};

const screenReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SCREEN_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default screenReducer;