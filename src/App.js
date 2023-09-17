import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Home from "./Route/Home";
import AboutPage from "./Route/About";
import RootLayout from "./Route/Root";
import EventPage from "./Route/Event";
import CausesPage from "./Route/Causes";
import Pages from "./Route/Pages";
import BlogPage from "./Route/Blog";
import ContactPage from "./Route/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutus", element: <AboutPage /> },
      { path: "/causes", element: <CausesPage /> },
      { path: "/events", element: <EventPage /> },
      { path: "/pages", element: <Pages /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
