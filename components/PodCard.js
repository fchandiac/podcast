import { Card, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as spotifyIcon } from "../public/icons8-spotify.svg";

export default function PodCard(props) {
  const { title, description, date, duration, file } = props;

  return (
    <>
      <Card
        variant="oulined"
        sx={{
          backgroundColor: "#343449",
          color: "white",
          borderRadius: "18px",
        }}
      >
        <Grid container>
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ fontSize: "3rem", color: "#fc466b" }}>
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
            <IconButton sx={{ fontSize: "2rem", color: "#fc466b" }}>
              <YouTubeIcon fontSize={"inherit"} color="inherit" />
            </IconButton>
            <IconButton sx={{ fontSize: "2rem", color: "#fc466b" }}>
              <SvgIcon component={spotifyIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
