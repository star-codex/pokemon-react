import React, { useState } from 'react';
import PokemonList from './pokemonList';
import axios from 'axios';

function App() {
	const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander']);

	axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
		setPokemon(res.data.results.map((p) => p.name));
	});

	return <PokemonList pokemon={pokemon} />;
}

export default App;
