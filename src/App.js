import React, { useState } from 'react';
import PokemonList from './pokemonList';

function App() {
	const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander']);

	return <PokemonList pokemon={pokemon} />;
}

export default App;
