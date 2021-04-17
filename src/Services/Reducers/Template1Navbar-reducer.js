// import { navbar } from '../../data/template1/template1Nav';
import { UPDATE_NAVBAR_DATA, UPDATE_NAVBAR_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1NavbarReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NAVBAR_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_NAVBAR_TEMPLATE_DATA :
          return {
            ...state,
            ...action.data
          }
      default:
        return state;
    }
  };
  
  export default template1NavbarReducer;