import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamsCom from "./components/ParamsCom";
import { Children } from "react";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import PageNotFound from "./components/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar /> <Homepage />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div>
          <Navbar />
          <Dashboard />
        </div>
      ),
      children: [
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "mock-tests",
          element: <MockTest />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },
    {
      path: "/student/:id",
      element: (
        <div>
          <Navbar />
          <ParamsCom />
        </div>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
