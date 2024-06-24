import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	background-color: black;
	color: white;
	padding: 0px 30px;
	align-items: center;
	justify-content: space-between;
`;
const ActiveUserContainer = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;
	button {
		width: 70px;
		height: fit-content;
	}
`;

export { StyledHeader, ActiveUserContainer };
