import { useContext } from "react";
import { USERS } from "../../constants/users"
import UserCard from "../userCard/UserCard";
import { StyledMain } from "./main.styles";
import { UserContext } from "../../context/CounterContext";

const Main =()=>{
    const {setUserActive}= useContext(UserContext)
    return (
        <StyledMain>
            {USERS.map((user, index) => (
                <UserCard 
                    key={index}
                    name={user.name}
                    age={user.age}
                    mail={user.email}
                    image={user.image}
                    setUserActive={setUserActive}
                />
            ))}
        </StyledMain>
    );
};
export default Main