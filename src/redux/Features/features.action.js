import { featureTypes } from "./features.types"

export const setActiveMenu = (payload) => {
    return {
        type: featureTypes.SET_ACTIVE_MENU,
        payload
    }
}

export const setScreenSize = (payload) => {
    return {
        type: featureTypes.SET_SCREEN_SIZE,
        payload
    }
}

export const setShowSideMenu = (payload) => {
    return {
        type: featureTypes.SHOW_SIDE_MENU,
        payload
    }
}
