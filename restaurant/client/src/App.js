import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Restaurant from "./components/getrestaurant/Restaurant";
import Add from "./components/addrestaurant/Add";
import Edit from "./components/updaterestaurant/Edit";
import './App.css';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Restaurant />,
      index: true,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
