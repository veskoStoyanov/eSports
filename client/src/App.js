import { Routes, Route } from 'react-router-dom';

// Libraries
// Modules
// Pages
import { Home } from './pages';

// Components

const App = () => {
	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
		</Routes>
	);
};

export default App;
