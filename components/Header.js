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
                fontSize: { xs: "1.5em", sm: "1.5rem" },
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
                fontSize: { xs: "1.5rem", sm: "1.5rem" },
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
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                fontWeight: "bold",
                paddingRight: 1,
                margin: 0,
              }}
            >
              𒊹
            </Typography>
          </Box>
<<<<<<< HEAD
          <Grid
            container
            justifyContent="center" // Centra horizontalmente
            alignItems="center"
            padding={4}
            marginTop={10}
            zIndex={1000}
          >
            {/* <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              ¡Sintonízanos en Vivo!
            </Typography> */}
          </Grid>
=======
          {/* <Typography
              
              sx={{ fontWeight: "bold", color: "white", fontSize: { xs: "1.5rem", sm: "1.8rem" } }}
            >
              ¡Sintonízanos en Vivo!
            </Typography> */}
>>>>>>> 66ec43bc254c6b699adaf03d48793c112fce5777
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
