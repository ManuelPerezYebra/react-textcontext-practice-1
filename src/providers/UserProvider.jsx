import { useState } from "react"
import { UserContext } from "../context/CounterContext"

const UserProvider = ({children}) =>{
    const [userActive, setUserActive]=useState('')
    return(
        <UserContext.Provider value = {{userActive, setUserActive}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider