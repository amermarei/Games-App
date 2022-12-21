
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/Home/Home";
import All from "./components/All/All";
import Platforms from "./components/Platforms/Platforms";
import SortBy from "./components/SortBy/SortBy";
import Categories from "./components/Categories/Categories";
import { Fragment } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MediaDetails from "./components/MediaDetails/MediaDetails";
import jwtdecode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
export default function App() {
  let [userData, setUserData] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      saveUserData();
    }
  }, []);
  function saveUserData() {
    let encode = localStorage.getItem("userData");
    let decode = jwtdecode(encode);
    setUserData(decode);
  }

  function RouteProtect({ children }) {
    if (localStorage.getItem("userData") === null) {
      return <Navigate to="/" />
    }
    return children;
  }
  let routers = createBrowserRouter([
    {
      path: "/", element: <Layout userData={userData} setUserData={setUserData} />, children: [
        { path: "home", element: <RouteProtect><Home /></RouteProtect> },
        { path: "All", element: <RouteProtect><All /></RouteProtect> },
        { path: "Platforms/:media_type", element: <RouteProtect><Platforms /></RouteProtect> },
        { path: "sortby/:media_type", element: <RouteProtect><SortBy /> </RouteProtect> },
        { path: "categories/:media_type", element: <RouteProtect><Categories /></RouteProtect> },
        { index: true, element: <Login saveUserData={saveUserData} /> },
        { path: "register", element: <Register /> },
        { path: "MediaDetails/:game_id", element: <RouteProtect><MediaDetails /></RouteProtect> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])
  return (
    <Fragment>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </Fragment>
  )
}
