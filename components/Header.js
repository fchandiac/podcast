import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Player from "./Player";

export default function Header() {
  const theme = useTheme();

  return (
    <>
      <Box position={"relative"}>
        <Box height={"55vh"}>
          <img
            src="/header.png"
            alt="Header"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          height={"6vh"}
          position={"absolute"}
          bottom={"70%"}
          color={"white"}
        >
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              margin: 0,
            }}
          >
            HASTA
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              margin: 0,
              marginTop: { xs: -1, sm: -2 },
            }}
          >
            EL FINAL
          </Typography>
          <Box sx={{ backgroundColor: theme.palette.secondary.main }} padding={0.5} display={'flex'}>
            <Typography
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "2rem" },  paddingRight:1, paddingLeft:1}}
            >
              con 
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "2rem" }, fontWeight: "bold", paddingRight:1 }}
            >
              Patricio Ojeda
            </Typography>
          </Box>
        </Box>

        <Box
          height={"6vh"}
          position={"absolute"}
          bottom={"24px"}
          color={"white"}
        >
          <Player />
        </Box>
      </Box>

      {/* <Box sx={{ position: "relative", textAlign: "center" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translate(-10%, -70%)",
            textAlign: "left",
            color: theme.palette.common.white,
            zIndex: 1, // Asegurar que el Box del texto esté por encima de la imagen
            [theme.breakpoints.down("xs")]: {
              left: "5%",
              transform: "translate(-5%, -40%)",
            },
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              margin: 0,
            }}
          >
            HASTA
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              margin: 0,
              marginTop: { xs: -1, sm: -2 },
            }}
          >
            EL FINAL
          </Typography>
          <Box sx={{ backgroundColor: "#0b65f4" }} padding={0.5}>
            <Typography
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "2rem" } }}
            >
              con Patricio Ojeda
            </Typography>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}
