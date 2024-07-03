import multer from 'multer';
import path from 'path';

// Configuración de multer
const storage = multer.diskStorage({
  destination: './public/uploads', // Carpeta donde se guardarán los archivos subidos
  filename: function (req, file, cb) {
    // Conservar el nombre original del archivo
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // Límite de tamaño del archivo (100 MB en este ejemplo)
  },
});

export const config = {
  api: {
    bodyParser: false, // Deshabilitar el body parsing predeterminado de Next.js
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('file')(req, res, (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        res.status(500).json({ message: 'Failed to upload file' });
        return;
      }

      // Archivo subido correctamente, puedes manejarlo aquí
      const filePath = path.join('./public/uploads', req.file.originalname);
      res.status(200).json({ message: 'File uploaded successfully', path: filePath });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
