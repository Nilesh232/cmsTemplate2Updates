// import { admissionProcess } from '../../data/template1/template1Committee';
import { UPDATE_COMMITTEE_DATA, UPDATE_COMMITTEE_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1CommitteeReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_COMMITTEE_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_COMMITTEE_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1CommitteeReducer;