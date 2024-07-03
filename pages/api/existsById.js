import jsonBase from '../../public/data.json';


const existsById = (id) => {
    return new Promise((resolve, reject) => {
        const id_ = parseInt(id);
        //console.log('data:', jsonBase); // Muestra el contenido del JSON base (opcional)
        const exist = jsonBase.some((item) => item.id === id_);

        console.log('existsById:', exist);
        resolve(exist);
    });
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { id } = req.body;
        existsById(id)
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