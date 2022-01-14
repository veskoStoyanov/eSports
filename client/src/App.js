import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// Pages
import { Home } from './pages';

// Components
import { Header, Drawer } from './components';

// Actions
import { userActions } from './store/actions';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
	const dispatch = useDispatch();
	const { changeUserState } = bindActionCreators(userActions, dispatch);

	const [toggleDrawer, setToggleDrawer] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (currUser) => {
			console.log(currUser)
			changeUserState(currUser);
		});
	}, [])

	return (
		<>
			<Header setToggleDrawer={setToggleDrawer} />
			<Drawer toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
			<Routes>
				<Route
					path="/"
					exact
					element={<Home setToggleDrawer={setToggleDrawer} />}
				/>
			</Routes>
		</>
	);
};

export default App;
