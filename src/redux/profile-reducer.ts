
const initialState ={}

export type ProfileActionType = ReturnType<typeof setProfile>

export const profileReducer = (state: any = initialState, action: ProfileActionType): any => {
    switch (action.type) {
        case 'SET-PROFILE':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setProfile = () => {
    return {type: 'SET-PROFILE', payload: {}} as const
}