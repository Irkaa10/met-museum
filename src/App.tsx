import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Home</>,
  },
  {
    path: "/details/:id",
    element: <>Details</>,
  },
  {
    path: "/search/:query",
    element: <>Search</>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
