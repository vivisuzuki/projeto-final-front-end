import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ListCharacters from './pages/ListCharacters';
import DetailCharacter from './pages/DetailCharacter';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <ListCharacters />
    },
    {
      path: '/details',
      element: <DetailCharacter />
    }
  ])

  return (
    <RouterProvider router={ routes } />
  );
}

export default App;
