import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Avatar,
  IconButton,
  Container,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import avatar from "./avatar.webp";

function Home() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  const textAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", duration: 3 } },
  };

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
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
            <Avatar
              alt="Profile Picture"
              src={avatar}
              sx={{ marginRight: 2 }}
            />
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
              href="#qualifications"
              onClick={() => handleNavigate("/projects")}
              sx={{
                marginX: 1,
                color: "rgba(0, 0, 0, 0.87)",
                fontWeight: "bold",
              }}
            >
              QUALIFICATIONS
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
              onClick={() => handleNavigate("/projects")}
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
      <Container
        maxWidth="lg"
        sx={{
          pt: 10,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", my: 8 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAnimation}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              HEY, I'M THARUSHIKA JANSA
            </Typography>
          </motion.div>
          <Typography variant="subtitle1" sx={{ color: "#1D2731", mb: 3 }}>
            A Frontend Developer with a focus on building the frontend of both
            Mobile and Web applications that leads to the success of the overall
            product.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D9B310",
              "&:hover": { bgcolor: "rgba(217, 179, 16, 0.8)" },
              py: 1,
              px: 5,
              color: "#000",
              fontWeight: "bold",
            }}
            onClick={() => handleNavigate("/projects")}
          >
            Projects
          </Button>
        </Box>

        <Box
          position="absolute"
          left={0}
          top="50%"
          boxShadow={2}
          padding={1}
          sx={{ transform: "translateY(-50%)", backgroundColor: "#ffffff" }}
        >
          <Stack direction="column" spacing={2}>
            <IconButton
              aria-label="LinkedIn"
              sx={{ color: "#000" }}
              href="https://www.linkedin.com/in/tharushika-j-1a8835114"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#000" }}
              aria-label="Twitter"
              href="https://twitter.com/yourtwitterhandle"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#000" }}
              aria-label="GitHub"
              href="https://github.com/TharushikaJanz"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#000" }}
              aria-label="Email"
              href="mailto:tharushijanz@gmail.com"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
