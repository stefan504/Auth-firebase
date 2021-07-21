import React from 'react';
import SignUp from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<Container
			className="d-flex align-items-centar justify-content-center"
			style={{ minHeight: '100vh' }}
		>
			<div className="w-100" style={{ maxWidth: '400px' }}>
				<Router>
					<AuthProvider>
						<Switch>
							<Route exact path="/" component={Dashboard}></Route>
							<Route path="/signup" component={SignUp}></Route>
							<Route path="/login" component={Login}></Route>
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
