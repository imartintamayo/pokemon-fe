import { PokemonList } from '@/pages';
import store from '@/redux/store';
import { axiosMock, pokemonListMock } from '@/__mocks__';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react/pure';
import { Provider } from 'react-redux';

jest.mock('axios');

describe('PokemonList', () => {
  const mockedAxios = axiosMock;
  mockedAxios.get.mockResolvedValue({ data: pokemonListMock });
  afterEach(jest.clearAllMocks);
  afterEach(cleanup);

  it('renders Logic component', async () => {
    const component = render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );
    expect(component).toBeTruthy;
  });

  it('has to call the pokemonList endpoint and update the store', async () => {
    render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );
    const button = screen.getByRole('button', { name: 'Fetch Pokemon List' });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
      expect(screen.getByText('{"list":[{"name":"bulbasaur"},{"name":"ivysaur"},{"name":"venusaur"}],"selected":{"id":"","name":"","image":""}}'));
    });
  });
});
