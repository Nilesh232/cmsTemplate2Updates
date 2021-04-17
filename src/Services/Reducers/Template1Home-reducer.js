// import { home } from '../../data/template1/template1Home'
import { UPDATE_DATA, UPDATE_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1HomeReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1HomeReducer;