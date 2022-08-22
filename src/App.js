import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

	let title = 'Welcome to the Blog';
	let likes = 50;
	let link = 'http://www.orendax.com';

	return (

		<div className="App">

			<Navbar />

			<div className="content">
				<Home />
			</div>
			
		</div>

	);
}

export default App;
