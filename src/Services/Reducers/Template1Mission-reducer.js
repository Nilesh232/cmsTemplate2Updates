// import { mission } from '../../data/template1/template1Mission'
import { UPDATE_MISSION_DATA, UPDATE_MISSION_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1MissionReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_MISSION_DATA :
        return {
            ...state,
            [action.sectionName]: action.data
          }
      case UPDATE_MISSION_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1MissionReducer;