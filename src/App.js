import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Homepage from './pages/Homepage';

function App() {
	return (
		<div>
			<NavBar />
      <Homepage />
		</div>
	);
}

export default App;
