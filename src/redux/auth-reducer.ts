
const initialState ={}

export type AuthActionType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: any = initialState, action: AuthActionType): any => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = () => {
    return {type: 'SET-USER-DATA', payload: {}} as const
}