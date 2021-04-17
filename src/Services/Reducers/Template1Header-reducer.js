// import { header } from '../../data/template1/template1Header';
import { UPDATE_HEADER_DATA, UPDATE_HEADER_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_HEADER_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_HEADER_TEMPLATE_DATA :
          return {
            ...state,
            ...action.data
          }
      default:
        return state;
    }
  };
  
  export default template1HeaderReducer;