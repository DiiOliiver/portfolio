import React from "react";
import { CssBaseline } from "@mui/material";
import Layout from "components/layout/Layout";
import { CustomThemeProvider } from "contexts/CustomThemeProvider";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes"
import AppBarComponent from "./components/appbar/AppBarComponent";

function App() {
  return (
    <Suspense fallback='loading'>
      <CustomThemeProvider>
        <CssBaseline />
        <Layout>
          <AppBarComponent />
          <RouterProvider router={router} />
        </Layout>
      </CustomThemeProvider>
    </Suspense>
  );
}

export default App;
