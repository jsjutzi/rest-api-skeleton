const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => console.log('Backend server live on ' + port));

const mockDb = {
  1: 'Tom Smith',
  2: 'Susan Junypter',
  3: 'Julio Ramirez'
}

// Real get call
app.get('/', (req, res) => {
  return res.send(Object.values(mockDb))
});

app.post('/addUser', (req, res) => {
  const lastKey = Object.keys(mockDb).sort().pop()
  const nextKey = lastKey + 1
  const { name } = req.body

  mockDb[nextKey] = name
  return res.send('User has been added.')
  
});

app.put('/updateUser', (req, res) => {
  const { id, name } = req.body
  mockDb[id] = name

  res.send('User has been added.');
  return res.send('User has been updated.')
});

app.delete('/deleteUser', (req, res) => {
  const { userId } = req.body
  delete mockDb[userId]

  res.send('User has been added.');
  return res.send('User has been deleted.')
});