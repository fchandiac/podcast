import Player from "@/components/Player";
import PodCard from "@/components/PodCard";
import { Avatar, Grid, Box, Typography, useTheme } from "@mui/material";
import Head from "next/head";
const pods = [
  {
    id: 1,
    key: 1,
    title: "Hasta el final - Episodio 1",
    description: "Invitada: Teresita Hernández",
    date: "16-03-2024",
    duration: "00:52:09",
    file: "/Hasta el Final 16-03-2024.mp3",
    youtube: "https://www.youtube.com/watch?v=bhunhj4b7XE",
    spotify: "",
  }
  
];
export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Hasta el final</title>
        <meta
          name="description"
          content="Hasta el final... Podcast con Patricio Ojeda."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={1} mt={4} mb={20}>
        {/* <Grid
          container
          justifyContent="center" // Centra horizontalmente
          alignItems="center"
          mb={1}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 16,
            }}
            padding={0}
            marginTop={-3}
            display={"inline-flex"}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: { xs: ".8rem",},
                alignSelf: "center",
                paddingRight: 1,
                paddingLeft: 1,
                margin: 0,
                color: "white",
              }}
            >
              Radio Pablo Neruda FM
            </Typography>
          </Box>
        </Grid> */}
        {/* <Grid
          container
          justifyContent="center" // Centra horizontalmente
          alignItems="center"
          padding={2}
        >
       
          <Box
            sx={{
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,86,1) 0%, rgba(0,112,232,1) 44%, rgba(252,27,151,1) 100%)",
              position: "absolute",
            }}
          />
        
          <Avatar
            variant="contained"
            sx={{ width: "6rem", height: "6rem" }}
            src="/neruda.png"
          />
        
        </Grid> */}
        {/* <Grid
          container
          justifyContent="center" // Centra horizontalmente
          alignItems="center"
          padding={1}
        >
          <audio controls>
            <source
              src="http://sonic.streamingchilenos.com:9552/stream"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </Grid> */}

        {pods.map((pod) => (
          <Grid item xs={12} sm={6} key={pod.id} display={"block"}>
            <PodCard
              title={pod.title}
              description={pod.description}
              date={pod.date}
              duration={pod.duration}
              file={pod.file}
              youtube={pod.youtube}
              spotify={pod.spotify}
            />
          </Grid>
        ))}
      </Grid>
      <main></main>
    </>
  );
}
