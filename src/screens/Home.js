import React from "react";
import {
  Button,
  Typography,
  Box,
  Avatar,
  Container,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationBar from "../components/NavigationBar";
import ContactIcons from "../components/ContactIcons";
import avatar from "../components/avatar.webp";

function Home() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <NavigationBar />
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
        <Box
          sx={{ textAlign: "center", my: 8 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              HEY, I'M THARUSHIKA JANSA
            </Typography>
          </motion.div>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            sx={{
              fontWeight: "bold",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              letterSpacing: 1.5,
            }}
          >
            Frontend Developer
          </Typography>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Avatar src={avatar} sx={{ width: 300, height: 300, m: 4 }} />
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
        <ContactIcons />
      </Container>
    </Box>
  );
}

export default Home;
