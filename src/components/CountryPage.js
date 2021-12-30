import {
  Button,
  Container,
  Grid,
  CardMedia,
  Box,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router";
import useFetch from "./useFetch";

const CountryPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/alpha/${id}`
  );
  return (
    <Container maxWidth="lg">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            sx={{
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            <Link to="/">
              <Button variant="contained">
                <ArrowBackIcon sx={{ marginRight: ".5rem" }} /> Back
              </Button>
            </Link>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                height="240"
                image={data[0].flags.svg}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Card sx={{ minWidth: 275, flex: 1 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                    gutterBottom
                  >
                    {data[0].name.common}
                  </Typography>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Native Name:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {
                            data[0].name.nativeName[
                              Object.keys(data[0].name.nativeName)[0]
                            ].official
                          }
                        </Typography>
                      </Typography>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Population:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {data[0].population}
                        </Typography>
                      </Typography>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Region:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {data[0].region}
                        </Typography>
                      </Typography>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Sub Region:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {data[0].subregion}
                        </Typography>
                      </Typography>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Capital:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {data[0].capital}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Top Level Domain:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {data[0].tld[0]}
                        </Typography>
                      </Typography>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Currencies:
                        <Typography
                          variant="p"
                          fontSize={"1rem"}
                          fontWeight={300}
                          sx={{ marginLeft: ".5rem" }}
                        >
                          {
                            data[0].currencies[
                              Object.keys(data[0].currencies)[0]
                            ].name
                          }
                        </Typography>
                      </Typography>
                      <Typography sx={{ mb: 1.5, fontWeight: "500" }}>
                        Languages:
                        {Object.keys(data[0].languages).map((key) => (
                          <Typography
                            variant="p"
                            fontSize={"1rem"}
                            fontWeight={300}
                            sx={{ marginLeft: ".5rem" }}
                            key={key}
                          >
                            {data[0].languages[key]},
                          </Typography>
                        ))}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions
                  sx={{
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      marginRight: "1rem",
                      padding: "1rem",
                    }}
                  >
                    Border Countries:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {data[0].borders
                      ? data[0].borders.map((border) => {
                          return (
                            <Link
                              to={`/country/${border.toLowerCase()}`}
                              style={{ margin: "0.5rem" }}
                              key={border}
                            >
                              <Button variant="contained" gutterBottom>
                                {border}
                              </Button>
                            </Link>
                          );
                        })
                      : "This country doesn't share borders with any countries!"}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CountryPage;
