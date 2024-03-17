import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationBar from "../components/NavigationBar";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/TharushikaJanz/repos"
      );
      const reposData = await response.json();
      setRepos(reposData);
    };

    fetchRepos();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For devices with a screen width up to 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For devices with a screen width up to 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <NavigationBar />
      <Container maxWidth="lg" sx={{ py: 8, overflow: "hidden" }}>
        <Box sx={{ textAlign: "center", m: 6 }}>
         
          <Typography variant="subtitle1" margin={1} sx={{ color: "#328CC1", letterSpacing: 1}}>
            some of my recent works
          </Typography> 
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#0B3C5D", letterSpacing: 1 }}
          >
            PROJECTS
          </Typography>
        </Box>
        <Slider {...settings}>
          {repos.map((repo, index) => (
            <Box
              key={repo.id}
              padding={2}
              sx={{
                transition: "transform .2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                ".slick-slide &": {
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <Card
                sx={{
                  bgcolor: "#1D2731",
                  color: "#fff",
                  margin: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "360px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "180px",
                    objectFit: "cover",
                    flexGrow: 0,
                    flexShrink: 0,
                  }}
                  image="/path-to-your-project-image.jpg"
                  alt={repo.name}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {repo.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={15}
                    sx={{
                      flexGrow: 1,
                      flexShrink: 1,
                      marginBottom: 2,
                    }}
                  >
                    {repo.description || "No description provided."}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default Projects;
