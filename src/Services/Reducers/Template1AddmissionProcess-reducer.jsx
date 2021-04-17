// import { admissionProcess } from '../../data/template1/template1AdmissionProcess';
import { UPDATE_ADMISSION_PROCESS_DATA, UPDATE_ADMISSION_PROCESS_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1AdmissionProcessReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ADMISSION_PROCESS_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_ADMISSION_PROCESS_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1AdmissionProcessReducer;