import React, { useState, useEffect } from "react";

import {
  TextField,
  Button,
  Grid,
  Container,
  Paper,
  Typography,
  Stack,
  ButtonGroup,
  Box,
  Dialog,
  Alert,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClearIcon from "@mui/icons-material/Clear";
import PodCard from "@/components/PodCard";

export default function upload() {
  const podcastDataDefault = {
    id: 0,
    key: 0,
    title: "Capítulo ...",
    description: "Invitado: ...",
    date: "DD-MM-YYYY",
    duration: "00:00:00",
    file: "",
    youtube: "https://www.youtube.com/",
    spotify: "https://open.spotify.com/",
  };
  const [podcastData, setPodcastData] = useState(podcastDataDefault)

  const [openLoginDialog, setOpenLoginDialog] = useState(true);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);
  const [passHelperText, setPassHelperText] = useState("");
  const [podcastList, setPodcastList] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  const [fileNameError, setFileNameError] = useState(false);
  const [fileNameHelperText, setFileNameHelperText] = useState("");

  const [idError, setIdError] = useState(false);
  const [idHelperText, setIdHelperText] = useState("");

  const secret = "p4t024";

  const [file, setFile] = useState(null);

  const [disableUpload, setDisableUpload] = useState(true);

  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/loadData");
      const data = await res.json();
      //console.log(data);
      setPodcastList(data);
    };
    fetchData();
  }, [refreshList]);


  const ifExistFile = async (name) => {
    const res = await fetch("/api/existsByName", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  };

  const ifExistId = async (id) => {
    const res = await fetch("/api/existsById", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }

  const save = async () => {
    if (file) {
      const exist = await ifExistFile(file.name);

      console.log(exist);
      if (exist) {
        setFileNameError(true);
        setFileNameHelperText("Ya existe un podcast con ese nombre de archivo");
        return;
      }
    } else {
      setFileNameError(true);
      setFileNameHelperText("Debes subir un archivo");
      return;
    }

    const existId = await ifExistId(podcastData.id);
    if (existId) {
      setIdError(true);
      setIdHelperText("Ya existe un podcast con ese Nº");
      return;
    }


    const res = await fetch("/api/addItem", {
      method: "POST",
      body: JSON.stringify(podcastData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const formData = new FormData();
    formData.append("file", file);


    const upload = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    setRefreshList(!refreshList);
    setPodcastData(podcastDataDefault);
    setFile(null);

    const data = await res.json();

    console.log(data);
  };

  const login = async () => {
    if (pass === secret) {
      setOpenLoginDialog(false);
    } else {
      setPassError(true);
      setPassHelperText("Contraseña incorrecta");
    }
  }

  return (
    <>

   
        <Grid container spacing={1} mt={2}>
          {podcastList.map((podcast) => (
            <Grid item xs={12} sm={12} md={6} xl={6} key={podcast.id}>
              <PodCard
                id={podcast.id}
                title={podcast.title}
                description={podcast.description}
                date={podcast.date}
                duration={podcast.duration}
                youtube={podcast.youtube}
                spotify={podcast.spotify}
                admin={true}
                setPodcastList={setPodcastList}
                fileName={podcast.file}
              />
            </Grid>
          ))}
        </Grid>
           


        <form
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              marginBottom: 10,
              backgroundColor: "white",
            }}
          >
            <Grid container spacing={2} direction={"column"} p={4}>
              <Grid item>
                <Typography variant="subtitle">Subir Podcast</Typography>
              </Grid>
              <Grid item>
                <TextField
                  label={"Nº"}
                  variant={"outlined"}
                  value={podcastData.id}
                  onChange={async (e) => {
                    setPodcastData({ ...podcastData, id: e.target.value });
                
                    const exist = await ifExistId(e.target.value);
             
                    if (exist) {
                      setIdError(true);
                      setIdHelperText("Ya existe un podcast con ese ID");
                      setDisableUpload(true);
                    } else {
                      setIdError(false);
                      setIdHelperText("");
                    }
                  }}
                  type="number"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid item display={!idError? 'none': 'block'}>
                <Alert severity="error">
                  {idError ? idHelperText : ""}
                </Alert>
              </Grid>
              <Grid item>
                <TextField
                  label={"Título"}
                  variant={"outlined"}
                  value={podcastData.title}
                  onChange={(e) =>
                    setPodcastData({ ...podcastData, title: e.target.value })
                  }
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid item>
                <TextField
                  label={"Descripción"}
                  variant={"outlined"}
                  value={podcastData.description}
                  onChange={(e) =>
                    setPodcastData({
                      ...podcastData,
                      description: e.target.value,
                    })
                  }
                  fullWidth
                  required
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  label={"Fecha"}
                  variant={"outlined"}
                  value={podcastData.date}
                  onChange={(e) =>
                    setPodcastData({ ...podcastData, date: e.target.value })
                  }
                  fullWidth
                  required
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  label={"Duración"}
                  variant={"outlined"}
                  value={podcastData.duration}
                  onChange={(e) =>
                    setPodcastData({ ...podcastData, duration: e.target.value })
                  }
                  fullWidth
                  required
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  label={"Youtube"}
                  variant={"outlined"}
                  value={podcastData.youtube}
                  onChange={(e) =>
                    setPodcastData({ ...podcastData, youtube: e.target.value })
                  }
                  fullWidth
                  required
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  label={"Spotify"}
                  variant={"outlined"}
                  value={podcastData.spotify}
                  onChange={(e) =>
                    setPodcastData({ ...podcastData, spotify: e.target.value })
                  }
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              

              <Grid item paddingTop={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<AttachFileIcon />}
                      color="secondary"
                    >
                      Adjuntar
                      <input
                      accept=".mp3"
                        type="file"
                        onChange={(e) => {
                          let file = e.target.files[0];
                          setPodcastData({ ...podcastData, file: file.name });
                          setFile(file);
                        }}
                        hidden
                      />
                    </Button>
                    <Button
                      variant="contained"
                      component="label"
                      color="secondary"
                      size="small"
                      onClick={() => {
                        console.log(" Button ");
                      }}
                    >
                      <ClearIcon />
                    </Button>
                  </ButtonGroup>
                  <Typography variant={"inherit"} component="div">
                    {file ? file.name : "Sube un mp3"}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item display={!fileNameError? 'none': 'block'} mb={1}>
                <Alert severity="error">
                  {fileNameError ? fileNameHelperText : ""}
                </Alert>
              </Grid>
              <Grid mb={6} textAlign={"right"}>
                <Button variant="contained" type="submit" color="primary" >
                  Subir
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>


      <Dialog
        open={openLoginDialog}
    
        fullWidth
        maxWidth="sm"
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.9)" }, // Cambia el valor de alpha para ajustar la oscuridad
        }}
      >
        <Box>
          <form onSubmit={(e) => {
            e.preventDefault();
            login();
          
          }}
          >
          <Grid container spacing={1} direction={"column"} p={4}>
            <Grid item>
              <Typography variant="h4">Acceso</Typography>
            </Grid>

            <Grid item>
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item display={!passError? 'none': 'block'}>
              <Alert severity="error">
                {passHelperText}
              </Alert>

            </Grid>
            <Grid item textAlign={'right'}
            >
              <Button variant="contained" color="primary" type="submit" >
                Ingresar
              </Button>
            </Grid>
          </Grid>
          </form>
        </Box>
      </Dialog>
    </>
  );
}
