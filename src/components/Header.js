import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = ({ dark, setDark }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              fontWeight: 700,
            }}
          >
            Where in the world?
          </Typography>
          <Button
            variant="text"
            sx={{ color: dark ? "#1976d2" : "#fff" }}
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <Brightness7Icon sx={{ marginRight: ".5rem" }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ marginRight: ".5rem" }} />
            )}
            {dark ? "Dark Mode" : "Light Mode"}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
