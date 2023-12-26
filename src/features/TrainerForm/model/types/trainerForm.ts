import { Stat } from '@/entities/Pokemon';

export interface TrainerFormData {
    firstName: string;
    lastName: string;
    selectedPokemon: {
        id: number;
        name: string;
        img: string;
        stats: Stat[];
    }[];
}
