import { strength } from '../../data/template1/template1Strength';
import { UPDATE_STRENGTH_DATA, UPDATE_STRENGTH_TEMPLATE_DATA } from '../constants';

const initialState = strength;

const template1StrengthReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_STRENGTH_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_STRENGTH_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1StrengthReducer;