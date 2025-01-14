import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export const PokemonCard = () => {
  const pokemonState = useSelector((store: AppStore) => store.pokemon);
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={pokemonState.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={pokemonState.image}
        alt={pokemonState.name}
      />
    </Card>
  );
};

export default PokemonCard;
