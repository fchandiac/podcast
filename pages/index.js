
import Player from "@/components/Player";
import PodCard from "@/components/PodCard";
import { Avatar, Grid, Box, Typography, useTheme } from "@mui/material";
import Head from "next/head";

import pods from "../public/data.json";

// const pods = [
//   {
//     id: 1,
//     key: 1,
//     title: "Hasta el final - Capítulo 1",
//     description: "Invitada: Teresita Hernández",
//     date: "16-03-2024",
//     duration: "00:52:09",
//     file: "/Hasta el Final 16-03-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=bhunhj4b7XE",
//     spotify:
//       "https://open.spotify.com/episode/2VeeUP4yH5QqI0rFbjfHLw?si=x6GQ0LJbQMOtLAaRy48TUQ",
//   },
//   {
//     id: 2,
//     key: 2,
//     title: "Hasta el final - Capítulo 2",
//     description: "Invitado: Claudio Bravo",
//     date: "23-03-2024",
//     duration: "00:56:12",
//     file: "/Hasta el Final 23-03-2024.mp3",
//     youtube: "",
//     spotify:
//       "https://open.spotify.com/episode/4wEjcD3qqiQf5fqDn3xwTs?si=fENFvOVmRI-fXq2qCGZIPw",
//   },
//   {
//     id: 3,
//     key: 3,
//     title: "Hasta el final - Capítulo 3",
//     description: "Invitado: Álvaro Hérnandez - RODAMIENTO",
//     date: "23-03-2024",
//     duration: "00:56:50",
//     file: "/Hasta el Final 06-04-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=yZSQQ2JKKZs&t=26s",
//     spotify: "https://spotify.link/JV1wf0fKXIb",
//   },
//   {
//     id: 4,
//     key: 4,
//     title: "Hasta el final - Capítulo 4",
//     description: "Invitado: Pablo Ojeda",
//     date: "23-03-2024",
//     duration: "01:01:28",
//     file: "/Hasta el Final 13-04-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=g0Oz6dHC0Zk",
//     spotify: "https://spotify.link/fpSZuJeKXIb",
//   },
//   {
//     id: 5,
//     key: 5,
//     title: "Hasta el final - Capítulo 5",
//     description: "Invitada: Subteniente María Rubilar",
//     date: "23-03-2024",
//     duration: "00:48:59",
//     file: "/Hasta el Final 20-04-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=ernaP9v9XIk",
//     spotify:
//       "https://open.spotify.com/episode/7DTSsZqFLSLjTDViACx2Ou",
//   },
//   {
//     id: 6,
//     key: 6,
//     title: "Hasta el final - Capítulo 6",
//     description: "Invitado: Antonio Carreño",
//     date: "23-03-2024",
//     duration: "00:55:20",
//     file: "/Hasta el Final 27-04-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=WJj05yi8HM8",
//     spotify:
//       "https://open.spotify.com/episode/5ZG6ur8NduCMQgnZMFHuj1",
//   },
//   {
//     id: 7,
//     key: 7,
//     title: "Hasta el final - Capítulo 7",
//     description: "Invitado: Juan Navarro",
//     date: "04-05-2024",
//     duration: "00:50:39",
//     file: "/Hasta el Final 04-05-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=WJj05yi8HM8",
//     spotify:
//       "https://open.spotify.com/episode/5ZG6ur8NduCMQgnZMFHuj1",
//   },
//   {
//     id: 10,
//     key: 10,
//     title: "Hasta el final - Capítulo 10",
//     description: "Invitado: Abel Morales",
//     date: "25-05-2024",
//     duration: "00:48:13",
//     file: "/Hasta el Final 25-05-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=WJj05yi8HM8",
//     spotify:
//       "https://open.spotify.com/episode/5ZG6ur8NduCMQgnZMFHuj1",
//   },
//   {
//     id: 11,
//     key: 11,
//     title: "Hasta el final - Capítulo 11",
//     description: "Invitado: Daniel Bustos",
//     date: "01-06-2024",
//     duration: "00:50:40",
//     file: "/Hasta el Final 04-06-2024.mp3",
//     youtube: "https://www.youtube.com/watch?v=WJj05yi8HM8",
//     spotify:
//       "https://open.spotify.com/episode/5ZG6ur8NduCMQgnZMFHuj1",
//   },
// ];

import React, { useState, useEffect } from "react";

export default function Home() {
  const theme = useTheme();
  const [podcastList, setPodcastList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      // console.log("fetching data");
      const res = await fetch("/api/loadData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      data.reverse()
      // console.log(data);
      setPodcastList(data);
    };
    fetchData();
  }, []);

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
        
        {podcastList.map((pod) => (
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
