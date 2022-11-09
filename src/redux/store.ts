import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";


let rootReducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,

})

//types
export type AppStoreType = ReturnType<typeof rootReducers>


export const store = createStore(rootReducers)

// @ts-ignore
window.store = store