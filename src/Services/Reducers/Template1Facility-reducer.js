// import { facility } from '../../data/template1/template1Facility';
import { UPDATE_FACILITY_DATA, UPDATE_FACILITY_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1FacilityReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_FACILITY_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_FACILITY_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1FacilityReducer;