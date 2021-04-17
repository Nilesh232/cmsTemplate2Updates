import { AUTH_FAIL, AUTH_LOGOUT, AUTH_REDIRECT_PATH, AUTH_START, AUTH_SUCCESS } from "../constants"

const initialState = {
    userId: null,
    error: null,
    loading: false,
    auth: false,
    userType: null,
    schoolName: null

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                error: null,
                loading: false,
                auth: true,
                userType: action.userType,
                schoolName: action.schoolName
            }
        case AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false,
                auth: false
            }
        // case AUTH_LOGOUT:
        //     return {
        //         ...state,
        //         token: null,
        //         userId: null,
        //         auth: false
        //     }
        // case AUTH_REDIRECT_PATH:
        //     return {
        //         ...state,
        //         authRedirectPath: action.path
        //     }
        default:
            return state;
    }
}

export default authReducer;