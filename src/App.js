//import { Route, Router, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact></Route>
				</Switch>
				<Main />
			</Router>
		</>
	);
}

export default App;
