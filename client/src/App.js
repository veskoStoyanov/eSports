import { Routes, Route } from 'react-router-dom';

// Libraries
// Modules
// Pages
import { Home } from './pages';

// Components
import { Header } from './components';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
