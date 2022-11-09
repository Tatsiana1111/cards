import React from 'react';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Error404 from "../Error404/Error404";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Registry from "../Registry/Registry";
import NewPassword from "../Login/Password/NewPassword";
import PasswordRecovery from "../Login/Password/PasswordRecovery";

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={'/cards'} element={<Navigate to={'/'}/>}/>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/registry'} element={<Registry/>}/>
            <Route path={'/newPassword'} element={<NewPassword/>}/>
            <Route path={'/passwordRecovery'} element={<PasswordRecovery/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            <Route path={'/404'}
                   element={<Error404/>}/>
        </Routes>
    );
}
