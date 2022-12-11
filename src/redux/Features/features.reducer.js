import { featureTypes } from "./features.types"
const initialState = {
    activeMenu:true,
    screenSize: undefined,
    showSideMenu:true
}
export const featureReducer = (state=initialState, action) => {
    switch (action.type) {
        case featureTypes.SET_ACTIVE_MENU:
            return {
                ...state,
                activeMenu:action.payload
            }
        case featureTypes.SET_SCREEN_SIZE:
            return {
                ...state,
                screenSize: action.payload
            }
        case featureTypes.SHOW_SIDE_MENU:
            return {
                ...state,
                showSideMenu: action.payload
            }
        default:
            return state;
    }
}