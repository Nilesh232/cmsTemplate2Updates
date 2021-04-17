// import { rules } from '../../data/template1/template1Rules';
import { UPDATE_RULES_DATA, UPDATE_RULES_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1RulesReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_RULES_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_RULES_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1RulesReducer;