import jsonBase from '../../public/data.json';

const loadFromJson = () => {
    return new Promise((resolve, reject) => {
        //console.log('data:', jsonBase); // Muestra el contenido del JSON base (opcional)
        resolve(jsonBase);
    });
}

export default function handler(req, res) {
    if (req.method === 'GET') {
        loadFromJson()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
                res.status(500).send('Failed to load data');
            });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}