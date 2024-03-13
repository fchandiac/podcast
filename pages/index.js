import Player from "@/components/Player";
import PodCard from "@/components/PodCard";
import { Grid } from "@mui/material";
import Head from "next/head";
const pods = [
  {
    id: 1,
    key: 1,
    title: "Hasta el final - Episodio 1",
    description: "La historia de Chile 01",
    date: "01-03-2024",
    duration: "00:45:00",
    file: "/Historia de Chile - Volumen 1.mp3",
    youtube: "https://www.youtube.com/watch?v=892ZB0MhJpE",
    spotify: "https://open.spotify.com/show/5v9ZG3z3l9y0pRtR9pKwvE",
  },
  {
    id: 2,
    key: 2,
    title: "Hasta el final - Episodio 2",
    description: "La historia de Chile 02",
    date: "10-03-2024",
    duration: "00:45:00",
    file: "/Historia de Chile - Volumen 2.mp3",
    youtube: "https://www.youtube.com/watch?v=GT67fD6rgcc",
    spotify: "https://open.spotify.com/show/5v9ZG3z3l9y0pRtR9pKwvE",
  },
  {
    id: 3,
    key: 3,
    title: "Hasta el final - Episodio 3",
    description: "La historia de Chile 03",
    date: "20-03-2024",
    duration: "00:45:00",
    file: "/Historia de Chile - Volumen 3.mp3",
    youtube: "https://www.youtube.com/watch?v=K7YGFkMEe3Q",
    spotify: "https://open.spotify.com/show/5v9ZG3z3l9y0pRtR9pKwvE",
  },
  {
    id: 4,
    key: 4,
    title: "Hasta el final - Episodio 4",
    description: "La historia de Chile 04",
    date: "31-03-2024",
    duration: "00:45:00",
    file: "/Historia de Chile - Volumen 4.mp3",
    youtube: "https://www.youtube.com/watch?v=FEKzv4j0-jk",
    spotify: "https://open.spotify.com/show/5v9ZG3z3l9y0pRtR9pKwvE",
  },
];
export default function Home() {
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
        {pods.map((pod) => (
          <Grid item xs={12} sm={6} key={pod.id}>
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
