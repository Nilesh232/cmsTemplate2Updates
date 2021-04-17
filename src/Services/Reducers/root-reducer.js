import { combineReducers } from "redux";
import authReducer from "./Auth-reducer";
import template1AdmissionProcessReducer from "./Template1AddmissionProcess-reducer";
import template1ContactReducer from "./Template1Contact-reducer";
import template1CuricullumReducer from "./Template1Curricullum-reduer";
import template1EventsReducer from "./Template1Events-reducer";
import template1FacilityReducer from "./Template1Facility-reducer";
import template1HomeReducer from "./Template1Home-reducer";
import template1NewsReducer from "./Template1News-reducer";
import template1RulesReducer from "./Template1Rules-reducer";
import template1TeachingReducer from "./Template1Teaching-reducer";
import template1HeaderReducer from "./Template1Header-reducer";
import template1NavbarReducer from "./Template1Navbar-reducer";
import screenReducer from "./Screen-reducer";
import template1CommitteeReducer from "./Template1Committe-reducer";
import template1MissionReducer from "./Template1Mission-reducer";
import template1PrincipalMessageReducer from "./Template1PrincipalMessage-reducer";
import template1TeacherReducer from "./Template1Teacher-reducer";
import template1StrengthReducer from "./Template1Strength-reducer";
import template1VideoGalleryReducer from "./Template1VideoGallery-reducer";
import template1FooterReducer from "./Template1Footer-reducer";
import templateSelectedReducer from "./TemplateSelected-reducer";

export const rootReducer = combineReducers({
  /**Application wide reducers */
  authR: authReducer,
  templateSelectedR: templateSelectedReducer,
  screenR: screenReducer,

  /**Template1 reducers */
  template1HeaderR: template1HeaderReducer,
  template1NavbarR: template1NavbarReducer,
  template1HomeR: template1HomeReducer,
  template1ContactR: template1ContactReducer,
  template1FacilityR: template1FacilityReducer,
  template1NewsR: template1NewsReducer,
  template1EventsR: template1EventsReducer,
  template1AdmissionProcessR: template1AdmissionProcessReducer,
  template1TeachingR: template1TeachingReducer,
  template1RulesR: template1RulesReducer,
  template1CuricullumR: template1CuricullumReducer,
  template1CommitteeR: template1CommitteeReducer,
  template1MissionR: template1MissionReducer,
  template1PrincipalMessageR: template1PrincipalMessageReducer,
  template1TeacherR: template1TeacherReducer,
  template1StrengthR: template1StrengthReducer,
  template1VideoGalleryR: template1VideoGalleryReducer,
  template1FooterR: template1FooterReducer,

  /**Template2 reducers */


});