import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faSquareFacebook,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { Box, IconButton, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
    const theme = useTheme();
  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Box
        sx={{
          borderRadius: "40px",
          backgroundColor: "#fc466b",
          padding: "10px",
          display: "flex",
          marginBottom: 1,
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,86,1) 0%, rgba(0,112,232,1) 44%, rgba(252,27,151,1) 100%)",
        }}
      >
        <IconButton
          sx={{
            fontSize: "1.5rem",
            color: "white",
            flexGrow: 1,
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "white",
              borderRadius: "50%",
            },
          }}
          onClick={() => {
            window.open("https://www.instagram.com/hastaelelfinal/", "_blank");
          }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
        <IconButton
          sx={{
            fontSize: "1.5rem",
            color: "white",
            flexGrow: 1,
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "white",
              borderRadius: "50%",
            },
          }}
          onClick={() => {
            window.open("https://twitter.com/hastaelelfinal", "_blank");
          }}
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </IconButton>
        <IconButton
          sx={{
            fontSize: "1.5rem",
            color: "white",
            flexGrow: 1,
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "white",
              borderRadius: "50%",
            },
          }}
          onClick={() => {
            window.open(
              "https://open.spotify.com/show/5v9ZG3z3l9y0pRtR9pKwvE",
              "_blank"
            );
          }}
        >
          <FontAwesomeIcon icon={faSpotify} />
        </IconButton>
        <IconButton
            sx={{
                fontSize: "1.5rem",
                color: "white",
                flexGrow: 1,
                "&:hover": {
                color:  theme.palette.primary.main,
                backgroundColor: "white",
                borderRadius: "50%",
                },
            }}
            onClick={() => {
                window.open(
                "https://www.youtube.com/channel/UCe9Jz6b3ZVQ9n3Y7w6hCk2w",
                "_blank"
                );
            }}
        >
            <FontAwesomeIcon icon={faYoutube} />
        </IconButton>
        <IconButton
          sx={{
            fontSize: "1.5rem",
            color: "white",
            flexGrow: 1,
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "white",
              borderRadius: "50%",
            },
          }}
          onClick={() => {
            window.open("https://www.facebook.com/hastaelelfinal", "_blank");
          }}
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </IconButton>
      </Box>
    </Box>
  );
}
