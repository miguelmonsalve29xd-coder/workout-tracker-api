const express = require('express');
const router = express.Router();

let users = [
  {
    id: "1",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];

// GET /api/v1/users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /api/v1/users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json(user);
});

// POST /api/v1/users
router.post('/', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  const newUser = {
    id: `${Date.now()}`,
    name,
    email,
    role: role || 'user',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/v1/users/:id (actualización completa)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!name || !email) {
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  users[index] = { ...users[index], name, email, role };
  res.status(200).json(users[index]);
});

// PATCH /api/v1/users/:id (actualización parcial)
router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users[index] = { ...users[index], ...req.body };
  res.status(200).json(users[index]);
});

// DELETE /api/v1/users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users.splice(index, 1);
  res.status(204).send();
});
// GET /api/v1/users?role=user&search=Carlos
router.get('/', (req, res) => {
  const { role, search } = req.query;
  let result = [...users];

  if (role) {
    result = result.filter(u => u.role === role);
  }

  if (search) {
    result = result.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
});

module.exports = router;