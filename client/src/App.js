import { useState } from 'react';

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

	onAuthStateChanged(auth, (currUser) => {
		changeUserState(currUser);
	});

	return (
		<>
			<Header setToggleDrawer={setToggleDrawer} />
			<Drawer toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
			<Routes>
				<Route path="/" exact element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
