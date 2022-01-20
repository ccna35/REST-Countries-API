import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryPage from "./components/CountryPage";
import useFetch from "./components/useFetch";
import NotFound from "./components/NotFound";

function App() {
  const { data, loading } = useFetch("https://restcountries.com/v2/all");

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [dark, setDark] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRegion = (e) => {
    switch (e.target.value) {
      case "Africa":
        setRegion("Africa");
        break;
      case "America":
        setRegion("America");
        break;
      case "Asia":
        setRegion("Asia");
        break;
      case "Europe":
        setRegion("Europe");
        break;
      case "Oceania":
        setRegion("Oceania");
        break;
      default:
        setRegion("");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header dark={dark} setDark={setDark} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                data={data}
                loading={loading}
                handleSearch={handleSearch}
                search={search}
                handleRegion={handleRegion}
                region={region}
              />
            }
          />
          <Route path="/country/:id" element={<CountryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
