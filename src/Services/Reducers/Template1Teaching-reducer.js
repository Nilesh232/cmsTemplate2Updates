// import { teaching } from '../../data/template1/template1Teaching';
import { UPDATE_TEACHING_DATA, UPDATE_TEACHING_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1TeachingReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TEACHING_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_TEACHING_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
  default:
        return state;
    }
  };
  
  export default template1TeachingReducer;