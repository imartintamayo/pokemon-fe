import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const RouteGuard = () => {
  const pokemonState = useSelector((state: AppStore) => state.pokemon);
  return pokemonState.name ? <Outlet /> : <Navigate replace to={`pokemon`} />;
};

export default RouteGuard;
