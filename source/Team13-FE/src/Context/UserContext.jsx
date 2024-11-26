import React from 'react'
const UserContextStore = React.createContext()

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function UserContext({ children }) {
    const navigate = useNavigate()
    const [userState, setUserState] = useState({

        userInfor: JSON.parse(localStorage.getItem("userInfor")) || {},// muốn lấy là phải parse về thành object
        userLogin: JSON.parse(localStorage.getItem("userLogin")) || false

    })

    const handleUserLogin = ({ user }) => {
        setUserState({
            userInfor: user,
            userLogin: true
        })


        localStorage.setItem("userInfor", JSON.stringify(user))//moi lan lưu là phải lưu kiểu string
        localStorage.setItem("userLogin", JSON.stringify(true))

    }

    const handleUserLogout = () => {
        // Xóa thông tin người dùng khỏi localStorage
        localStorage.removeItem("userInfor");// Lưu đối tượng rỗng
        localStorage.setItem("userLogin", JSON.stringify(false)) // Lưu chuỗi "false"

        // Cập nhật trạng thái của ứng dụng
        setUserState({
            userInfor: {},        // Cập nhật state là đối tượng rỗng
            userLogin: false      // Cập nhật state là false
        });
        navigate("/")
    }
    return (
        <>
            <UserContextStore.Provider value={{ userState, setUserState, handleUserLogin, handleUserLogout }}>
                {children}
            </UserContextStore.Provider>
        </>
    )
}


export { UserContextStore }