import { Card, Grid, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "@/appProvider";



export default function PodCard(props) {
  const { title, description, date, duration, file, youtube, spotify } = props;
  const { setPodcast } = useAppContext();
  const theme = useTheme();

  return (
    <>
      <Card
        variant="oulined"
        sx={{
          backgroundColor: "#000056",
          color: "white",
          borderRadius: "18px",
       
        }}
      >
        <Grid container>
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" ,}}>
            <IconButton
              sx={{
                fontSize: "3rem",
                color: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
                
              }}
                onClick={() => {
                    setPodcast({
                    title,
                    description,
                    date,
                    duration,
                    file,
                    youtube,
                    spotify,
                    });
                }}
            >
              <PlayCircleOutlineIcon fontSize={"inherit"} color="inherit" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" marginBottom={-1} marginTop={1}>
              {title}
            </Typography>
            <Typography variant="subtitle1" marginBottom={2}>
              {description}
            </Typography>
            <Typography variant="subtitle2" marginBottom={1}>
              {date} - {duration}
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign={"right"}>
            <Grid container spacing={1} direction={"column"} paddingRight={1}>
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
                    window.open(
                        `${youtube}`,
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </IconButton>
              </Grid>
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
                    window.open(
                        `${spotify}`,
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
