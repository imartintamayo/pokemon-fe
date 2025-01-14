import { SubmitHandler, useForm } from 'react-hook-form';
import CustomSelect from '@/components/Select';
import { useCallback, useEffect, useMemo } from 'react';
import { Pokemon, SelectOption } from '@/models';
import { pokemonSelect } from '@/redux/states/pokemon';
import { pokemonList } from '@/redux/states/pokemonList';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { pokemonGet } from '@/services/public.service';
import { getPokemonAdapter } from '@/adapters';
import { useFetchAndLoad } from '@/hooks';

type FormValues = {
  name: string;
};

export const PokemonSelect = () => {
  const pokemonListState = useSelector((store: AppStore) => store.pokemonList);
  const dispatch = useDispatch();
  const { loading, callEndpoint } = useFetchAndLoad();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>({
    defaultValues: { name: pokemonListState[0].name },
  });

  const options: SelectOption[] = useMemo(
    () => pokemonListState.map((pokemon: Pokemon): SelectOption => ({ label: pokemon.name, value: pokemon.name })),
    [pokemonListState]
  );

  const onChange = useCallback(async (name: string) => {
    const pokemon = await callEndpoint(pokemonGet(name));
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
      <CustomSelect
        name="name"
        label="Selecciona un Pokemon"
        options={options}
        errors={errors}
        register={register}
      />
    </form>
  );
};

export default PokemonSelect;
