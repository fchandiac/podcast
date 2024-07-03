import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import Player from "./Player";

export default function Header() {
  const theme = useTheme();

  return (
    <>
      <Box position={"relative"}>
        <Box height={"55vh"}>
          <img
            src="/pato01.png"
            alt="Header"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          height={"6vh"}
          position={"absolute"}
          bottom={"80%"}
          padding={0}
          marginLeft={5}
          color={"white"}
        >
          <Box display={"inline-flex"}>
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                paddingRight: 1,
                margin: 0,
                marginBottom: -1,
              }}
            >
              Pod
            </Typography>
            <Typography
              gutterBottom
              color={theme.palette.secondary.main}
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.8rem", display: "inline-block" },
                fontWeight: "bold",
                paddingRight: 1,
                margin: 0,
                marginLeft: -1,
                marginBottom: -1,
              }}
            >
              Cast
            </Typography>
          </Box>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "3rem", sm: "3rem", md: "3.5rem" },
              fontWeight: "bold",
              margin: 0,
            }}
          >
            HASTA
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "3rem", sm: "3rem", md: "3.5rem" },
              fontWeight: "bold",
              margin: 0,
              marginBottom: -1,
              marginTop: { xs: -2.8, sm: -4, md: -4 },
            }}
          >
            EL FINAL
          </Typography>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 16,
            }}
            padding={0.5}
            display={"inline-flex"}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "1.2em", sm: "1.5rem" },
                alignSelf: "center",
                paddingRight: 1,
                paddingLeft: 1,
                margin: 0,
              }}
            >
              con
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                alignSelf: "center",
                fontWeight: "bold",
                paddingRight: 1,
                margin: 0,
              }}
            >
              Patricio Ojeda
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.8rem" },
                fontWeight: "bold",
                paddingRight: 1,
                margin: 0,
              }}
            >
              𒊹
            </Typography>
          </Box>
        </Box>

        <Box
          height={"20vh"}
          position={"absolute"}
          bottom={"-2px"}
          color={"white"}
        >
          <Player />
        </Box>
      </Box>

    </>
  );
}
