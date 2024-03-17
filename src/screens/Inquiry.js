import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Container,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import ContactIcons from "../components/ContactIcons";
import avatar from "../components/avatar.webp";
import { motion } from "framer-motion";

const Inquiry = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can use formData to send an API request or perform other actions
    console.log(formData);
  };

  const MotionAvatar = motion(Avatar);

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <NavigationBar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          marginTop={10}
        >
          <Grid item xs={12} md={7}>
            <Paper
              elevation={6}
              sx={{ p: 4, bgcolor: "#1D2731", color: "#fff", borderRadius: 3 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Let's Talk
              </Typography>
              <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
                Get in touch to transform your websites and mobile applications
                with expertly crafted front-end designs.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="filled"
                    margin="normal"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(255, 255, 255, 0.09)",
                        color: "#fff",
                        borderRadius: 4,
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="filled"
                    margin="normal"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(255, 255, 255, 0.09)",
                        color: "#fff",
                        borderRadius: 4,
                        
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="filled"
                    margin="normal"
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        backgroundColor: "rgba(255, 255, 255, 0.09)",
                        color: "#fff",
                        borderRadius: 4,
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      bgcolor: "#D9B310",
                      "&:hover": {
                        bgcolor: "rgba(217, 179, 16, 0.8)",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Stack
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h3"
                component="h3"
                textAlign={"center"}
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#1D2731",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  letterSpacing: 2,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Tharushika Jansa
              </Typography>

              <Typography
                variant="h6"
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

              <MotionAvatar
                alt="Person"
                src={avatar}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 10,
                  ease: "easeInOut",
                }}
                sx={{
                  width: 200,
                  height: 200,
                  border: "10px solid",
                  borderColor: "#F5F5F5",
                  bgcolor: "#FFF",
                  marginTop: 2,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <ContactIcons />
      </Container>
    </Box>
  );
};

export default Inquiry;
