import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages';

// Components
import { Header} from './components';

const App = () => (<>
	<Header />
	<Routes>
		<Route path="/" exact element={<Home />} />
	</Routes>
</>)

export default App;
