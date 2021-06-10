
import { globalConstants } from '../actions/global/globalActions'
const initialState = {
    api_url:'http://127.0.0.1:5000',

    authLayout:'login'

}

const globalReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case  globalConstants.CHANGE_AUTHETICATION_PAGE:
        return {
            ...state,
            authLayout:payload
        }

    default:
        return state;
    }
}

export default globalReducer
