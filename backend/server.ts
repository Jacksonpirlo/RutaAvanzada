import express, { json } from 'express';
import cors from 'cors';
import db from './db.ts';

const app = express();
app.use(cors());
app.use(json());
// Obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Obtener usuario por id
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ message: 'User not foun' })
    } 
      res.json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Obtener usuarios por nombre
app.get('/users', async (req, res) => {
  const {name} = req.body
  try {
    const { rows } = await db.query('SELECT * FROM users WHERE name = $name', [name]);
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});



// Agregar usuario
app.post('/users', async (req, res) => {
  const { name, password } = req.body;
  try {
    await db.query('INSERT INTO users (name, password) VALUES ($1, $2)', [name, password]);
    res.json({ message: 'User added' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Actualizar usuario
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  try {
    const result = await db.query(
      'UPDATE users SET name = $1, password = $2 WHERE id = $3',
      [name, password, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Eliminar usuario
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'User not foun' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});



// CARDS
app.get('/cards', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Cards');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => console.log('Server is running on: http://localhost:3000'));