import axios from 'axios';

interface FetchPokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
}

export async function fetchPokemon() {
    try {
        const { data } = await axios.get<FetchPokemonResponse>(
            'https://pokeapi.co/api/v2/pokemon?limit=20offset=0',
        );

        return data;
    } catch (e) {
        console.log('Error while fetching pokemon ==>', e);
        throw e;
    }
}
