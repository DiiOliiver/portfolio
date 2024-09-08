import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import {
  cilHome,
  cilPeople
} from '@coreui/icons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    title: "Página inicial",
    icon: cilHome
  },
  {
    path: "/profile",
    element: <Profile />,
    title: "Informação pessoal",
    icon: cilPeople
  },
  {
    path: "/projects",
    element: <Projects />,
    title: "Projetos",
    icon: cilPeople
  },
] as any);

export default router;