import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { TrainerFormData } from '../../model/types/trainerForm';

interface ModalSpritesProps {
    onClose: () => void;
    isOpen: boolean;
    data: TrainerFormData;
    onSave: () => void;
}

export const ModalSprites = (props: ModalSpritesProps) => {
    const {
        onSave,
        onClose,
        isOpen,
        data: { lastName, selectedPokemon, firstName },
    } = props;

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            title="Is everything right?"
        >
            <p>
                First name: <span className="font-bold">{firstName}</span>
            </p>
            <p>
                Last name: <span className="font-bold">{lastName}</span>
            </p>
            Your team:
            <div className="flex flex-col gap-2 h-80 overflow-y-auto">
                {selectedPokemon?.map((pokemon) => (
                    <div
                        key={pokemon.id}
                        className="flex p-2 rounded justify-evenly items-center bg-green-100"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={pokemon.img}
                                alt={pokemon.name}
                            />
                            <p className="font-bold">{pokemon.name}</p>
                        </div>
                        <div>
                            {pokemon.stats.map((poke) => (
                                <h3 key={poke.stat.name}>
                                    {poke.stat.name}:{poke.base_stat}
                                </h3>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex gap-2 justify-end mt-3">
                <Button
                    onClick={onClose}
                    variant="text"
                >
                    Cancel
                </Button>
                <Button onClick={onSave}>Save</Button>
            </div>
        </Modal>
    );
};
