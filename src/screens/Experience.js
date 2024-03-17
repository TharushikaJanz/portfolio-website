import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import ContactIcons from "../components/ContactIcons";
import { experienceData } from "../components/ExperienceData";

// Reusable ExperienceCard component
const ExperienceCard = ({ title, company, location, responsibilities }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, bgcolor: "#1D2731", color: "#fff" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{company}</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {location}
      </Typography>
      <List>
        {responsibilities.map((responsibility, index) => (
          <ListItem key={index}>{responsibility}</ListItem>
        ))}
      </List>
    </Paper>
  );
};

const Experience = () => {
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Experience Header */}
        <Typography
          variant="h3"
          component="h3"
          textAlign={"center"}
          gutterBottom
          marginBottom={5}
          sx={{
            fontWeight: "bold",
            color: "#1D2731",
            textTransform: "uppercase",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: 2,
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          EXPERIENCE
        </Typography>

        {/* Experience Content */}
        <Grid container spacing={3} justifyContent="center">
          {experienceData.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ExperienceCard {...exp} />
            </Grid>
          ))}
        </Grid>

        <ContactIcons />
      </Container>
    </Box>
  );
};

export default Experience;
