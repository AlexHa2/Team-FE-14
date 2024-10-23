import React from 'react'
const  UserContextStore = React.createContext()

import { useState } from 'react'
export default function UserContext({ children }) {
    const [userState, setUserState] = useState({
        userInfor: {},
        userLogin:false
    })

    const handleUserLogin = ({ user }) => {
        setUserState({
            userInfor: user,
            userLogin:true
        })
    }

    const handleUserLogout = () => {
        setUserState({
            userInfor: {},
            userLogin:false
        })
    }
    return (
        <>
            <UserContextStore.Provider value={{ userState, setUserState, handleUserLogin, handleUserLogout }}>
                {children}
            </UserContextStore.Provider>
        </>
    )
}


export {UserContextStore}