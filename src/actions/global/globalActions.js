export const globalConstants = {
    CHANGE_AUTHETICATION_PAGE:'CHANGE_AUTHETICATION_PAGE'
}

export const changeAuthPage = payload => ({
    type:globalConstants.CHANGE_AUTHETICATION_PAGE,
    payload
})