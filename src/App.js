import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import { Heading, Text } from '@chakra-ui/react';

function App() {

  const routes = createBrowserRouter([
    {
      path: 'home/:pagina',
      element: <CharacterList />
    },
    {
      path: '/details/:idPersonagem',
      element: <CharacterDetail />
    }
  ])

  return (
    <>
      <Heading fontSize='50px' className='App-header'>Personagens Disney</Heading>
      <RouterProvider router={ routes } />
    </>
  );
}

export default App;
