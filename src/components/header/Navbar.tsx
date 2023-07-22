import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "Books", "Videos", "Learnings", "About", "Contact"];

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          background:"#21a3ba"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box
              component="img"
              src="/hLogo/logo-no-background.svg"
              height={40}
              sx={{ mr: 2 }}
            />

            <Box
              sx={{
                mr: 2,
                display: { sm: "block", xs: "none" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    paddingX: "15px",
                    textTransform: "none",
                    fontSize: "18px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
