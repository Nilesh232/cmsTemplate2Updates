// import { principalMessage } from '../../data/template1/template1Principal';
import { UPDATE_PRINCIPAL_MESSAGE_DATA, UPDATE_PRINCIPAL_MESSAGE_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1PrincipalMessageReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRINCIPAL_MESSAGE_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_PRINCIPAL_MESSAGE_TEMPLATE_DATA :
      return {
        ...state,
        ...action.data
      }
      default:
        return state;
    }
  };
  
  export default template1PrincipalMessageReducer;