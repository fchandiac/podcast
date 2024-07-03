import fs from 'fs';
import path from 'path';
import jsonBase from '../../public/data.json';

// Ruta al archivo data.json en la carpeta public
const filePath = path.join(process.cwd(), 'public', 'data.json');

// Función para agregar datos al archivo JSON
// const addDataToJson = (newDataItem) => {
//   return new Promise((resolve, reject) => {
//     console.log('Adding data:', newDataItem);
//     console.log('base data:', jsonBase);
//     // Leer el archivo JSON existente
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading file:', err);
//         reject('Failed to read data file');
//         return;
//       }

//       let jsonData = [];

//       try {
//         // Parsear el contenido JSON del archivo
//         jsonData = JSON.parse(data);
//       } catch (parseError) {
//         console.error('Error parsing JSON:', parseError);
//         reject('Failed to parse JSON data');
//         return;
//       }

//       // Agregar el nuevo elemento al array de objetos
//       jsonData.push(newDataItem);

//       // Convertir el array de objetos de nuevo a JSON
//       const updatedJsonData = JSON.stringify(jsonData, null, 2); // Formato con 2 espacios de indentación

//       // Escribir el JSON actualizado de vuelta al archivo
//       fs.writeFile(filePath, updatedJsonData, 'utf8', (writeErr) => {
//         if (writeErr) {
//           console.error('Error writing file:', writeErr);
//           reject('Failed to write data file');
//           return;
//         }

//         // Éxito al escribir el archivo
//         resolve('Data added successfully');
//       });
//     });
//   });
// };

// const addDataToJson = (newDataItem) => {
//     return new Promise((resolve, reject) => {
//       console.log('Adding data:', newDataItem);
//       console.log('Base data:', jsonBase); // Muestra el contenido del JSON base (opcional)
  
//       // Agregar el nuevo elemento al array de objetos del JSON base
//       let data = [
//         {
//           "id": newDataItem.id,
//           "key": newDataItem.key,
//           "title": newDataItem.title,
//           "description": newDataItem.description,
//           "date": newDataItem.date,
//           "duration": newDataItem.duration,
//           "file": newDataItem.file,
//           "youtube": newDataItem.youtube,
//           "spotify": newDataItem.spotify
//         }
//       ];

  
//       // Convertir el JSON base de nuevo a JSON
//       const updatedJsonData = JSON.stringify(data); // Formato con 2 espacios de indentación
  
//       // Escribir el JSON actualizado de vuelta al archivo
//       fs.writeFile(filePath, updatedJsonData, 'utf8', (writeErr) => {
//         if (writeErr) {
//           console.error('Error writing file:', writeErr);
//           reject('Failed to write data file');
//           return;
//         }
  
//         // Éxito al escribir el archivo
//         resolve('Data added successfully');
//       });
//     });
//   };
  

 const addDataToJson = (newDataItem) => {
  // lee el archivo data.json y agregaun item
  return new Promise((resolve, reject) => {
    //console.log('Adding data:', newDataItem);
    //console.log('base data:', jsonBase);

    // Leer el archivo JSON existente
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        reject('Failed to read data file');
        return;
      }

      let jsonData = [];

      try {
        // Parsear el contenido JSON del archivo
        jsonData = JSON.parse(data);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        reject('Failed to parse JSON data');
        return;
      }

      // Agregar el nuevo elemento al array de objetos
      jsonData.push(newDataItem);

      // Convertir el array de objetos de nuevo a JSON
      const updatedJsonData = JSON.stringify(jsonData, null, 2); // Formato con 2 espacios de indentación

      // Escribir el JSON actualizado de vuelta al archivo
      fs.writeFile(filePath, updatedJsonData, 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
          reject('Failed to write data file');
          return;
        }

        // Éxito al escribir el archivo
        resolve('Data added successfully');
      });
    });
  });
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { id, key, title, description, date, duration, file, youtube, spotify } = req.body;

    // Construir el nuevo objeto con los datos recibidos
    const newDataItem = {
      id: parseInt(id), // Asegúrate de convertir a número si es necesario
      key: parseInt(id), // Asegúrate de convertir a número si es necesario
      title,
      description,
      date,
      duration,
      file: '/' + file,
      youtube,
      spotify,
    };

    // Llamar a la función para agregar datos al archivo JSON
    addDataToJson(newDataItem)
      .then((message) => {
        res.status(200).json({ message });
      })
      .catch((error) => {
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Failed to add data' });
      });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
