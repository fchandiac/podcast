import { Box, Card, Grid, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "@/appProvider";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PodCard(props) {
  const {
    title,
    description,
    date,
    duration,
    file,
    youtube,
    spotify,
    admin,
    setPodcastList,
    id,
    fileName,
  } = props;
  const { setPodcast } = useAppContext();
  const theme = useTheme();

  const deletePodcast = async () => {
    const res = await fetch("/api/delete", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const res2 = await fetch("/api/deleteFile", {
      method: "POST",
      body: JSON.stringify({ name: fileName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPodcastList(data);
  };

  return (
    <>
      <Card
        variant="oulined"
        sx={{
          backgroundColor: "#000056",
          color: "white",
          borderRadius: "18px",
          minHeight: "115px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={3}display={'flex'} justifyContent="center" alignItems="center" >
     
            <IconButton
              sx={{
                fontSize: "3rem",
                color: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={() => {
                const fileInfo = admin ? fileName : file;
                setPodcast({
                  title,
                  description,
                  date,
                  duration,
                  file: fileInfo,
                  youtube,
                  spotify,
                });
              }}
            >
              <PlayCircleOutlineIcon fontSize={"inherit"} color="inherit"  />
            </IconButton>
   
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={20} marginBottom={-1} marginTop={1}>
              {title}
            </Typography>
            <Typography fontSize={14} marginBottom={2}>
              {description}
            </Typography>
            <Typography fontSize={12} marginBottom={1}>
              {date} - {duration}
            </Typography>
          </Grid>
          <Grid item xs={3}   
        >
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection={'column'}   m={1}>
            
                <IconButton
                  sx={{
                    display: youtube === "" ? "none" : "flex",
                    fontSize: "1.5rem",
                    color: theme.palette.secondary.main,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  onClick={() => {
                    window.open(`${youtube}`, "_blank");
                  }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </IconButton>
        
                <IconButton
                  sx={{
                    fontSize: "1.5rem",
                    color: theme.palette.secondary.main,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  onClick={() => {
                    window.open(`${spotify}`, "_blank");
                  }}
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </IconButton>
      
              {admin && (
                <Grid item>
                  <IconButton
                    sx={{
                      fontSize: "1.5rem",
                      color: theme.palette.secondary.main,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                    onClick={() => {
                      deletePodcast();
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              )}
            </Box>
       
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
