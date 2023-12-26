import axios from 'axios';
import { Pokemon } from '../../types/pokemon';

export async function fetchPokemonDetails(url: string) {
    try {
        const { data } = await axios.get<Pokemon>(url);

        return data;
    } catch (e) {
        console.log('Error while fetching pokemon details ==>', e);
        throw e;
    }
}
