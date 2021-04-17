// import { curicullum } from '../../data/template1/template1Curicullum';
import { UPDATE_CURICULLUM_DATA, UPDATE_CURICULLUM_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1CuricullumReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CURICULLUM_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_CURICULLUM_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1CuricullumReducer;