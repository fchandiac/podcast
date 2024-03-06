import Player from "@/components/Player";
import PodCard from "@/components/PodCard";
import { Grid } from "@mui/material";
import Head from "next/head";
const pods = [
  {
    id:1,
    key: 1,
    title: "Hasta el final - Episodio 1",
    description: "La historia de Chile",
    date: "01-03-2024",
    duration: "00:45:00",
    file: "/Historia de Chile - Volumen 1.mp3",
  },
  {
    id:2,
    key: 2,
    title: "Hasta el final - Episodio 2",
    description: "En este episodio hablamos de...",
    date: "10-03-2024",
    duration: "00:45:00",
    file: "https://www.buzzsprout.com/1878046/episodes/10156754.mp3",
  },
  {
    id:3,
    key: 3,
    title: "Hasta el final - Episodio 3",
    description: "En este episodio hablamos de...",
    date: "20-03-2024",
    duration: "00:45:00",
    file: "https://www.buzzsprout.com/1878046/episodes/10156754.mp3",
  },
  {
    id:4,
    key: 4,
    title: "Hasta el final - Episodio 4",
    description: "En este episodio hablamos de...",
    date: "31-03-2024",
    duration: "00:45:00",
    file: "https://www.buzzsprout.com/1878046/episodes/10156754.mp3",

  }
]
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

      <Grid container spacing={1} mt={2}>
        {
          pods.map(pod => (
            <Grid item xs={12} sm={6}  key={pod.id}>
              <PodCard title={pod.title} description={pod.description} date={pod.date} duration={pod.duration} />
            </Grid>
          ))
        }
      </Grid>
      <main></main>
    </>
  );
}
