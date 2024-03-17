import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
    IconButton,
    Stack,
    Box
  } from "@mui/material";
import React from 'react'

const ContactIcons = () => {
  return (
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
  )
}

export default ContactIcons