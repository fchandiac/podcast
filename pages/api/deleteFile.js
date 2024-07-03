import jsonBase from '../../public/data.json';
import fs from 'fs';
import multer from 'multer';

const deleteFile = (name) => {
    // delete file by name from public/uploads folder
    return new Promise((resolve, reject) => {
        fs.unlink(`public/uploads/${name}`, (error) => {
            if (error) {
                console.error('Error deleting file:', error);
                reject('Failed to delete file');
            }
        })
        resolve(name);
    });
}

// export const config = {
//     api: {
//         bodyParser: false, // Deshabilitar el body parsing predeterminado de Next.js
//     },
// };

export default  async function handler(req, res) {
    if (req.method === 'POST') {
        const { name } = req.body;
        deleteFile(name)
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
