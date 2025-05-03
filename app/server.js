const express = require('express');
const redis = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';

// Configuración del cliente de Redis
const client = redis.createClient({
    url: `redis://${REDIS_HOST}:6379`
});

client.connect().catch(console.error);

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const tasks = await client.lRange('tasks', 0, -1);
    res.send(`
        <h1>Lista de tareas</h1>
        <form method="POST" action="/add">
            <input name="task" placeholder="Nueva tarea" />
            <button type="submit">Añadir</button>
        </form>
        <ul>
            ${tasks.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `);
});

app.post('/add', async (req, res) => {
    const { task } = req.body;
    if (task) {
        await client.rPush('tasks', task);
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
