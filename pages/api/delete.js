import jsonBase from '../../public/data.json';
import fs from 'fs';




const deleteFromJson = (id) => {
    return new Promise((resolve, reject) => {
        //console.log('data:', jsonBase); // Muestra el contenido del JSON base (opcional)
        // Filtrar el JSON base para eliminar el elemento con el ID especificado
        const updatedData = jsonBase.filter((item) => item.id !== id);

        // Guardar el JSON actualizado en el archivo data.json
        fs.writeFile('public/data.json', JSON.stringify(updatedData, null, 2), (error) => {
            if (error) {
                console.error('Error writing file:', error);
                reject('Failed to write file');
            }
        })
        resolve(updatedData);
    });
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { id } = req.body;
        deleteFromJson(id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
                res.status(500).send('Failed to load data');
            });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}