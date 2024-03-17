import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import avatar from "./avatar.webp";
import React from "react";

const NavigationBar = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={5}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#fff",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", paddingX: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Profile Picture" src={avatar} sx={{ marginRight: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontWeight={"bold"}
            color="rgba(0, 0, 0, 0.87)"
          >
            Tharushika Jansa
          </Typography>
        </Box>
        <Box>
          <Button
            color="inherit"
            href="#home"
            onClick={() => handleNavigate("/")}
            sx={{
              marginX: 1,
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: "bold",
            }}
          >
            HOME
          </Button>

          <Button
            color="inherit"
            href="#projects"
            onClick={() => handleNavigate("/projects")}
            sx={{
              marginX: 1,
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: "bold",
            }}
          >
            PROJECTS
          </Button>
          <Button
            color="inherit"
            href="#experience"
            onClick={() => handleNavigate("/experience")}
            sx={{
              marginX: 1,
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: "bold",
            }}
          >
            EXPERIENCE
          </Button>
          <Button
            color="inherit"
            href="#inquiry"
            onClick={() => handleNavigate("/inquiry")}
            sx={{
              marginX: 1,
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: "bold",
            }}
          >
            INQUIRY
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
