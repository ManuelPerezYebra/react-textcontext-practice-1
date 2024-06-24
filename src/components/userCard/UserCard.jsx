import { StyledCard } from "./userCards.styles"

const UserCard =({name, age, mail, image, setUserActive})=>{
    return <StyledCard>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{age}</p>
            <button onClick={()=>setUserActive(name)}>Ativate User </button>
    </StyledCard>
}
export default UserCard

