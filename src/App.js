import './App.css';

function App() {

	let title = 'Welcome to the Blog';
	let likes = 50;
	let link = 'http://www.orendax.com';

	return (
		<div className="App">
			<div className="content">
				<h1>{ title }</h1>
				<p>Liked { likes } times</p>

				<p>{ 10 }</p>
				<p>{ 'STRING' }</p>
				<p>{ [1,2,3,4,5] }</p>
				<p>{ Math.random() * 20 }</p>			
				<a href={ link }>OrendaX</a>

			</div>
		</div>
	);
}

export default App;
