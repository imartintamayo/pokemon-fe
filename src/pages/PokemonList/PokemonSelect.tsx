import { getPokemonAdapter } from '@/adapters';
import CustomSelect from '@/components/Select';
import { useFetchAndLoadGqlQuery } from '@/hooks';
import { Pokemon, SelectOption } from '@/models';
import { pokemonSelect } from '@/redux/states/pokemon';
import { AppStore } from '@/redux/store';
import { pokemonGet } from '@/services/public.service';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type FormValues = {
  name: string;
};

export const PokemonSelect = () => {
  const pokemonListState = useSelector((store: AppStore) => store.pokemonList);
  const dispatch = useDispatch();
  const { loading, callEndpoint } = useFetchAndLoadGqlQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormValues>({
    defaultValues: { name: pokemonListState[0].url }
  });

  const options: SelectOption[] = useMemo(
    () => pokemonListState.map((pokemon: Pokemon): SelectOption => ({ label: pokemon.name, value: pokemon.url })),
    [pokemonListState]
  );

  const onChange = useCallback(async (pokemonUrl: string) => {
    const pokemon = await callEndpoint(pokemonGet(pokemonUrl));
    dispatch(pokemonSelect(getPokemonAdapter(pokemon)));
  }, []);

  const selectedValue = watch('name');

  useEffect(() => {
    if (selectedValue) {
      onChange(selectedValue);
    }
  }, [selectedValue, onChange]);

  return (
    <form onSubmit={handleSubmit((data) => onChange(data.name))}>
      <CustomSelect name="name" label="Choose a Pokemon" options={options} errors={errors} register={register} />
    </form>
  );
};

export default PokemonSelect;
