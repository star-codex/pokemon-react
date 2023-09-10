import React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList';
import axios from 'axios';

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [currentPageUrl, setCurrentPageUrl] = useState(
		'https://pokeapi.co/api/v2/pokemon'
	);

	// every time currentPageUrl changes, rerun the code inside of it; if it doesn't, do not rerender it.
	useEffect(() => {
		axios.get(currentPageUrl).then((res) => {
			setPokemon(res.data.results.map((p) => p.name));
		});
	}, [currentPageUrl]);

	return <PokemonList pokemon={pokemon} />;
}

export default App;
