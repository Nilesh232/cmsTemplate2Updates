// import { videoGallery } from '../../data/template1/template1VideoGallery';
import { UPDATE_VIDEO_DATA, UPDATE_VIDEO_TEMPLATE_DATA } from '../constants';

const initialState = {};

const template1VideoGalleryReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_VIDEO_DATA :
         return {
           ...state,
           [action.sectionName]: action.data
         }
      case UPDATE_VIDEO_TEMPLATE_DATA :
        return {
          ...state,
          ...action.data
        }
  default:
        return state;
    }
  };
  
  export default template1VideoGalleryReducer;