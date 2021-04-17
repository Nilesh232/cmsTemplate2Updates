import { FETCH_SELECTED_TEMPLATE, UPDATE_SELECTED_TEMPLATE } from '../constants';

const initialState = {
    templateSelected: 'template2'
};

const templateSelectedReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SELECTED_TEMPLATE :
        return {
          ...state,
          ...action.data
        }
      case FETCH_SELECTED_TEMPLATE :
        return state;
      default:
        return state;
    }
  };
  
  export default templateSelectedReducer;