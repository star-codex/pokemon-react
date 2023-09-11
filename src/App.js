import React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList';
import axios from 'axios';

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [currentPageUrl, setCurrentPageUrl] = useState(
		'https://pokeapi.co/api/v2/pokemon'
	);
	const [nextPageUrl, setNextPageUrl] = useState();
	const [prevPageUrl, setPrevPageUrl] = useState();
	const [loading, setLoading] = useState(true);

	// every time currentPageUrl changes, rerun the code inside of it; if it doesn't, do not rerender it.
	useEffect(() => {
		setLoading(true);
		//let cancel;
		axios
			.get(currentPageUrl, {
				// cancelToken: new axios.CancelToken(c => cancel = c),
			})
			.then((res) => {
				setLoading(false);
				setNextPageUrl(res.data.next);
				setPrevPageUrl(res.data.previous);
				setPokemon(res.data.results.map((p) => p.name));
			});
		// cancel previous requests each time a new one is made so old data is not returned after a new request
	}, [currentPageUrl]);

	if (loading) return 'Loading...';

	return <PokemonList pokemon={pokemon} />;
}

export default App;
