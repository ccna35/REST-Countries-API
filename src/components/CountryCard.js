import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CountryCard = ({ country }) => {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardMedia
        component="img"
        height="150rem"
        image={country.flags.svg}
        alt={country.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
          {country.name}
        </Typography>
        <Typography variant="h6" fontSize={"1rem"} fontWeight={600}>
          Population:
          <Typography
            variant="p"
            fontSize={"1rem"}
            fontWeight={300}
            sx={{ marginLeft: ".5rem" }}
          >
            {country.population}
          </Typography>
        </Typography>
        <Typography variant="h6" fontSize={"1rem"} fontWeight={600}>
          Region:{" "}
          <Typography
            variant="p"
            fontSize={"1rem"}
            fontWeight={300}
            sx={{ marginLeft: ".5rem" }}
          >
            {country.region}
          </Typography>
        </Typography>
        <Typography variant="h6" fontSize={"1rem"} fontWeight={600}>
          Capital:{" "}
          <Typography
            variant="p"
            fontSize={"1rem"}
            fontWeight={300}
            sx={{ marginLeft: ".5rem" }}
          >
            {country.capital}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
