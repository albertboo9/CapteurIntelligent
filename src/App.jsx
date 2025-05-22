//Importation de feuille de style
import "boxicons/css/boxicons.css"
import "./styles/general.css";
import "./styles/theme.css";

//Importation de composant
import Log from "./pages/Log";
import Home from "./pages/Home";

// Importation des hook et autre
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Log />
    },
    {
      path: "/home", // Ajout du '/' pour la cohérence
      element: <Home index={0}/>,
    },
    {
      path: "/temperature",
      element:<Home index={1}/>,
    },
    {
      path: "/sound",
      element:<Home index={2}/>,
    },
    {
      path: "/presence",
      element:<Home index={3}/>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;