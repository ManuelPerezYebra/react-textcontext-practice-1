import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import UserProvider from "./providers/UserProvider";

const App = () => {
	
	return <>
	<GlobalStyles></GlobalStyles>
	<UserProvider>
	<Header />
	<Main />
	</UserProvider>
	
	
	</> 
	
};

export default App;
