import Homepage from "./pages/homepage/homepage";
import Searchpage from "./pages/searchpage/searchpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/details/:id",
    element: <>Details</>,
  },
  {
    path: "/search/:searchQuery",
    element: <Searchpage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
