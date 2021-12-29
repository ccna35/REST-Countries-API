import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";

const SearchFilter = ({ handleSearch, handleRegion, region }) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            marginTop: "2rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search for a country..."
            variant="outlined"
            onChange={handleSearch}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter by Region"
              onChange={handleRegion}
              value={region}
            >
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="America">America</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchFilter;
