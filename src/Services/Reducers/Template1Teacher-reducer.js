import { teacher } from '../../data/template1/template1Teacher';
import { UPDATE_TEACHER_DATA, UPDATE_TEACHER_TEMPLATE_DATA } from '../constants';

const initialState = teacher;

const template1TeacherReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TEACHER_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
        case UPDATE_TEACHER_TEMPLATE_DATA :
        return {
            ...state,
            ...action.data
        }
      default:
        return state;
    }
  };
  
  export default template1TeacherReducer;