import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import History from './components/History';
import Team from './components/Team';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<History />
			<Team />
			<Footer />
		</div>
	);
}

export default App;
