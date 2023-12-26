import { fetchPokemon } from '../fetchPokemons/fetchPokemon';
import { fetchPokemonDetails } from '../fetchPokemonDetails/fetchPokemonDetails';
import { Pokemon } from '../../types/pokemon';

export async function fetchPokemonWithDetails() {
    try {
        const pokemonListResponse = await fetchPokemon();

        if (!pokemonListResponse) return null;

        const pokemonUrls = pokemonListResponse.results.map(
            (pokemon) => pokemon.url,
        );

        const pokemonDetailsPromises = pokemonUrls.map(fetchPokemonDetails);

        const pokemonDetails = await Promise.all<Pokemon>(
            pokemonDetailsPromises,
        );

        return pokemonDetails;
    } catch (e) {
        console.error('Error while fetching Pokemon with details ==>', e);
        throw e;
    }
}
