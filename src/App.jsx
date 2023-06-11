import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./component/HomeComponent/Home/Home";
import Layout from "./component/Layout/Layout";
import About from "./component/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: '/about',
          element:<About/>
        }
      ],
    },
  ]);

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
