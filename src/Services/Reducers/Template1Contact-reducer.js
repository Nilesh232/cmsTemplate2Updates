// import { contact } from '../../data/template1/template1Contact';
import { UPDATE_CONTACT_DATA, UPDATE_CONTACT_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1ContactReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CONTACT_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_CONTACT_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1ContactReducer;