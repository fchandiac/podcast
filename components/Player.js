import { Typography, Box, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/appProvider";

export default function Player() {
  const { podcast } = useAppContext();
  const audioRef = useRef(null);

  useEffect(() => {
    if (podcast.file) {
      // Verifica si hay un archivo en el podcast y actualiza la URL del archivo de audio
    audioRef.current.src = podcast.file;
    audioRef.current.load();
    audioRef.current.play();
   
    }
  }, [podcast]);

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
        <Box marginTop={1} display={podcast.title ? "block" : "none"}>
          <audio controls ref={audioRef}>
         
            Tu navegador no soporta la reproducción de audio.
          </audio>
          <Box display={podcast.title ? "block" : "none"} sx={{ color: "white" }}>
            <Typography
              variant="caption"
              marginBottom={-1}
              marginTop={1}
              paddingLeft={4}
            >
              Reproduciendo: {podcast.title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
