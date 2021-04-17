// import { events } from '../../data/template1/template1Event';
import { UPDATE_EVENTS_DATA, UPDATE_EVENTS_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1EventsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_EVENTS_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_EVENTS_TEMPLATE_DATA :
          return {
            ...state,
            ...action.data
          }
      default:
        return state;
    }
  };
  
  export default template1EventsReducer;