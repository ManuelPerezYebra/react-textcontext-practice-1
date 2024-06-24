import { useContext } from "react";
import { ActiveUserContainer, StyledHeader } from "./header.styles"
import { UserContext } from "../../context/CounterContext";

const Header =()=>{
    const  {userActive, setUserActive} = useContext(UserContext)

    let activeUser = userActive
    if (activeUser === '') {
      activeUser = 'No hay usuarios activos';
    }else{
        activeUser = `Usuario Activo: ${userActive}`
    }
    return <StyledHeader>
        <h1>Users Control</h1>
        <ActiveUserContainer>
            <p>{activeUser}</p>
       { userActive && <button onClick={()=>setUserActive('')}>Log Out</button>}
        </ActiveUserContainer>
        
    </StyledHeader>
}

export default Header