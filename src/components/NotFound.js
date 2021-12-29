import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        gutterBottom
      >
        This page doesn't exist!
      </Typography>
      <Link to="/">
        <Button variant="outlined">Go back to the homepage...</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
