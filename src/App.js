import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <CharacterList />
    },
    {
      path: '/details',
      element: <CharacterDetail />
    }
  ])

  return (
    <RouterProvider router={ routes } />
  );
}

export default App;
