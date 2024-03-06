import { Typography, Box, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import React from "react";

export default function Player() {
  return (
    <>
      <Box
        height={"10vh"}
        width={"100vw"}
        sx={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1)20%, rgba(0, 0, 0, 0))",
        }}
      >
        {/* <Box
          sx={{
            borderRadius: "40px", // Ajusta el radio de borde para hacerlos muy redondos
            backgroundColor: "#fc466b", // Establece el color de fondo
            padding: "5px", // Añade un relleno alrededor del contenido
            display: "inline-block", // Permite que el Box se ajuste al tamaño del contenido
          }}
        >
          <Typography
            align="center"
            gutterBottom
            sx={{ fontSize: ".6rem", margin: 0 }}
          >
            reproduciendo
          </Typography>
        </Box> */}
        <Box display={"flex"} marginTop={1}>
          {/* <IconButton sx={{ fontSize: "3rem", color: "#fc466b" }}>
            <PlayCircleOutlineIcon fontSize={"inherit"} color="inherit" />
          </IconButton> */}
          <audio controls>
            <source src="/Historia de Chile - Volumen 1.mp3" type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </Box>
      </Box>
    </>
  );
}
