import React from 'react'
const  UserContextStore = React.createContext()

import { useState } from 'react'
export default function UserContext({ children }) {
    const [userState, setUserState] = useState({
        userInfor:  JSON.parse(localStorage.getItem("userInfor")) || {},// muốn lấy là phải parse về thành object
        userLogin:  JSON.parse(localStorage.getItem("userLogin")) || false
    })

    const handleUserLogin = ({ user }) => {
        setUserState({
            userInfor: user,
            userLogin:true
        })

        localStorage.setItem("userInfor",JSON.stringify(user))//moi lan lưu là phải lưu kiểu string
        localStorage.setItem("userLogin",JSON.stringify(true))
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