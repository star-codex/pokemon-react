import React from 'react';

// destructured array from pokemon that is specified in app.js 
export default function pokemonList({ pokemon }) {
    // returns pokemon that are mapped over from the array.
	return (
		// contains key for top level element in the array. uses name of pokemon, no chance of duplicates.
		<div>
			{pokemon.map((p) => (
				<div key={p}>{p}</div>
			))}
		</div>
	);
}
