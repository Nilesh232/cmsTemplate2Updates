import { footer } from '../../data/template1/template1Footer';
import { UPDATE_FOOTER_DATA, UPDATE_FOOTER_TEMPLATE_DATA } from '../constants';

const initialState = footer;

const template1FooterReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_FOOTER_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_FOOTER_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1FooterReducer;