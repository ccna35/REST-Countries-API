import React from "react";
import { Grid, Container, Box, CircularProgress } from "@material-ui/core";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const Content = ({ data, loading, search, region }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={8}>
        {loading ? (
          <CircularProgress />
        ) : (
          data
            .filter(
              (c) =>
                c.name.toLowerCase().includes(search) &&
                c.region.includes(region)
            )
            .map((country) => {
              console.log(country);
              return (
                <Grid item xs={12} sm={6} lg={3} key={country.alpha2Code}>
                  <Link to={`/country/${country.alpha2Code.toLowerCase()}`}>
                    <CountryCard country={country} />
                  </Link>
                </Grid>
              );
            })
        )}
      </Grid>
    </Container>
  );
};

export default Content;
