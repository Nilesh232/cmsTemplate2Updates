// import { news } from '../../data/template1/template1News';
import { UPDATE_NEWS_DATA, UPDATE_NEWS_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1NewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NEWS_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_NEWS_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1NewsReducer;