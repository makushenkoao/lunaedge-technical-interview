import { useEffect, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { fetchPokemonWithDetails } from '@/entities/Pokemon';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { Button } from '@/shared/ui/Button';
import { TrainerFormData } from '../../model/types/trainerForm';
import { ModalSprites } from '../ModalSprites/ModalSprites';
import { Pokemon } from '@/entities/Pokemon/model/types/pokemon';

export const TrainerForm = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [data, setData] = useState<TrainerFormData>({} as TrainerFormData);
    const [isOpen, setIsOpen] = useState(false);

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const initPokemon = async () => {
        const pokemon = await fetchPokemonWithDetails();
        setPokemon(pokemon || []);
    };

    useEffect(() => {
        initPokemon();
    });

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };

    const onSubmit = (data: FieldValues) => {
        const selectedPokemonDetails = data.selectedOptions
            .map((selectedOption: { value: string; label: string }) => {
                const matchingPokemon = pokemon.find(
                    (poke) => poke.id.toString() === selectedOption.value,
                );
                return matchingPokemon
                    ? {
                          name: selectedOption.label,
                          img: matchingPokemon.sprites.front_default,
                          id: matchingPokemon.id,
                          stats: matchingPokemon.stats,
                      }
                    : null;
            })
            .filter(Boolean);

        setData({
            firstName: data.firstName,
            lastName: data.lastName,
            selectedPokemon: selectedPokemonDetails,
        });

        onOpen();
    };

    const onSave = () => {
        // request to save data
        // await saveTrainerData(data)

        reset();
        onClose();
    };

    const options = pokemon.map((poke) => ({
        value: poke.id.toString(),
        label:
            poke.name.slice(0, 1).toUpperCase() +
            poke.name.slice(1, poke.name.length),
    }));

    return (
        <div>
            <div className="mx-auto mt-10 rounded bg-blue-50 p-4 shadow-xl w-120">
                <h1 className="text-xl font-bold mb-2 text-center">
                    Fill the form
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center items-center flex-col mx-auto gap-5"
                >
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'First name is required',
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message:
                                    'The First name must contain only Latin letters',
                            },
                            minLength: {
                                value: 2,
                                message:
                                    'The First name must contain at least 2 characters',
                            },
                            maxLength: {
                                value: 12,
                                message:
                                    'The First name must contain a maximum of 12 characters',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder="Enter first name"
                                label="First name"
                                isError={Boolean(errors.firstName?.message)}
                                validationInformation={
                                    errors.firstName?.message as string
                                }
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Last name is required',
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message:
                                    'The Last name must contain only Latin letters',
                            },
                            minLength: {
                                value: 2,
                                message:
                                    'The Last name must contain at least 2 characters',
                            },
                            maxLength: {
                                value: 12,
                                message:
                                    'The Last name must contain a maximum of 12 characters',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder="Enter last name"
                                label="Last name"
                                isError={Boolean(errors.lastName?.message)}
                                validationInformation={
                                    errors.lastName?.message as string
                                }
                            />
                        )}
                    />
                    <Controller
                        name="selectedOptions"
                        control={control}
                        defaultValue={[]}
                        rules={{
                            validate: (value) =>
                                value.length === 4 || 'Choose 4 Pokemon',
                        }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                label="Choose a team with 4 Pokemon to battle"
                                options={options}
                                showArrowIcon
                                value={field.value}
                                onChange={(selectedOptions) =>
                                    field.onChange(selectedOptions)
                                }
                                isError={Boolean(
                                    errors.selectedOptions?.message,
                                )}
                                validationInformation={
                                    errors.selectedOptions?.message as string
                                }
                                multiple
                            />
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
            <ModalSprites
                isOpen={isOpen}
                onClose={onClose}
                onSave={onSave}
                data={data}
            />
        </div>
    );
};
