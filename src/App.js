import React from 'react'
import { Router } from "./Router"
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";


export function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <Router />
      <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
