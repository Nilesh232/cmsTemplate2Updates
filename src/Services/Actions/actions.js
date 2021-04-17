// import axios from 'axios';
import { UPDATE_DATA, DISPLAY_TOASTER, DISPLAY_MODAL, UPDATE_FACILITY_DATA, 
    UPDATE_ALUMNI_DATA, UPDATE_TEMPLATE_DATA, DISPLAY_SECTION_MODAL, 
    UPDATE_CONTACT_DATA, UPDATE_NEWS_DATA, UPDATE_EVENTS_DATA, UPDATE_ADMISSION_PROCESS_DATA,
    UPDATE_TEACHING_DATA, UPDATE_RULES_DATA, UPDATE_CURICULLUM_DATA, UPDATE_TEACHING_TEMPLATE_DATA, 
    AUTH_START, AUTH_SUCCESS, AUTH_FAIL, 
    AUTH_LOGOUT, AUTH_REDIRECT_PATH, UPDATE_RULES_TEMPLATE_DATA, UPDATE_NEWS_TEMPLATE_DATA, 
    UPDATE_EVENTS_TEMPLATE_DATA, UPDATE_FACILITY_TEMPLATE_DATA, UPDATE_CURICULLUM_TEMPLATE_DATA, 
    UPDATE_CONTACT_TEMPLATE_DATA, UPDATE_ADMISSION_PROCESS_TEMPLATE_DATA, UPDATE_HEADER_DATA, 
    UPDATE_HEADER_TEMPLATE_DATA, UPDATE_NAVBAR_DATA, UPDATE_NAVBAR_TEMPLATE_DATA, UPDATE_SCREEN_DATA, 
    UPDATE_COMMITTEE_DATA, UPDATE_MISSION_DATA, UPDATE_PRINCIPAL_MESSAGE_DATA, UPDATE_TEACHER_DATA, 
    UPDATE_COMMITTEE_TEMPLATE_DATA, UPDATE_MISSION_TEMPLATE_DATA, UPDATE_PRINCIPAL_MESSAGE_TEMPLATE_DATA, 
    UPDATE_TEACHER_TEMPLATE_DATA, UPDATE_STRENGTH_DATA, UPDATE_STRENGTH_TEMPLATE_DATA, UPDATE_VIDEO_DATA, 
    UPDATE_VIDEO_TEMPLATE_DATA, UPDATE_FOOTER_DATA, UPDATE_FOOTER_TEMPLATE_DATA, UPDATE_SELECTED_TEMPLATE, FETCH_SELECTED_TEMPLATE } from '../constants';


export const appTemplateSelected = (data) => {
    return {
        type: UPDATE_SELECTED_TEMPLATE,
        data: data
    }
}

export const appGetTemplateSelected = () => {
    return {
        type: FETCH_SELECTED_TEMPLATE
    }
}


export const updateData = (data, sectionName) => {
    return {
        type: UPDATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateContactData = (data, sectionName) => {
    return {
        type: UPDATE_CONTACT_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateFacilityData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_FACILITY_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateNewsData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_NEWS_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateEventsData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_EVENTS_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateAdmissionProcessData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_ADMISSION_PROCESS_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateRulesData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_RULES_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateTeachingData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_TEACHING_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateCuricullumData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_CURICULLUM_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateHeaderData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_HEADER_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateNavbarData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_NAVBAR_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateCommitteeData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_COMMITTEE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateMissionData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_MISSION_DATA,
        data: data,
        sectionName: sectionName
    }
}


export const updatePrincipalMessageData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_PRINCIPAL_MESSAGE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateTeacherData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_TEACHER_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateStrengthData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_STRENGTH_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateVideoData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_VIDEO_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateFooterData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_FOOTER_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateTemplateData = (data) => {
    return {
        type: UPDATE_TEMPLATE_DATA,
        data: data
    }
}

export const updateTeachingTemplateData = (data) => {
    return {
        type: UPDATE_TEACHING_TEMPLATE_DATA,
        data: data
    }
}

export const updateRulesTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_RULES_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateNewsTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_NEWS_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateEventsTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_EVENTS_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateFacilityTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_FACILITY_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateCuricullumTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_CURICULLUM_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateContactTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_CONTACT_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateAdmissionProcessTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_ADMISSION_PROCESS_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateHeaderTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_HEADER_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateNavbarTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_NAVBAR_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}


export const updateCommitteeTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_COMMITTEE_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateMissionTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_MISSION_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}


export const updatePrincipalMessageTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_PRINCIPAL_MESSAGE_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateTeacherTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_TEACHER_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateStrengthTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_STRENGTH_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateVideoTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_VIDEO_TEMPLATE_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const updateFooterTemplateData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_FOOTER_TEMPLATE_DATA   ,
        data: data,
        sectionName: sectionName
    }
}

export const updateScreenData = (data) => {
    console.log(data)
    return {
        type: UPDATE_SCREEN_DATA,
        data: data
    }
}


export const updateAlumniData = (data, sectionName) => {
    console.log(data, sectionName)
    return {
        type: UPDATE_ALUMNI_DATA,
        data: data,
        sectionName: sectionName
    }
}

export const showToaster = (value) => {
    return {
        type: DISPLAY_TOASTER,
        data: value
    }
}

export const showModal = (value, sectionName) => {
    return {
        type: DISPLAY_MODAL,
        data: value,
        sectionName: sectionName
    }
}

export const showSectionModal = (value, sectionName) => {
    return {
        type: DISPLAY_SECTION_MODAL,
        data: value,
        sectionName: sectionName
    }
}




/**Auth actions */

export const authStart = () => {
    return {
        type: AUTH_START
    }
}

export const authSuccess = (userId, userType, schoolName, templateSelected) => {
    return {
        type: AUTH_SUCCESS,
        userId: userId,
        userType: userType,
        schoolName: schoolName,
        templateSelected: templateSelected
    }
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationData');
    localStorage.removeItem('userID');
    return {
        type: AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime*1000)
    }
}

// export const auth = (email,password, schoolName) => {
//     return (dispatch) => {
//         dispatch(authStart())
//         const authData = {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         }
//         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[WEB_API_KEY]';
//         if(!isSignUp) {
//             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[WEB_API_KEY]'
//         }
//         axios.post(url, authData).then((response) => {
//             const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
//             localStorage.setItem('token', response.data.idToken);
//             localStorage.setItem('expirationDate', expirationDate);
//             localStorage.setItem('userId', response.data.localId);
//             dispatch(authSuccess(response.data.idToken, response.data.localId))
//             dispatch(checkAuthTimeout(response.data.expiresIn))
//         }).catch((error) => {
//             dispatch(authFail(error.response.data.error))
//         })
//     }
// }

export const authRedirectPath = (path) => {
    return {
        type: AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}