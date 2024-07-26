const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { router: authRouter, authenticateJWT } = require('./auth');
const User = require('./users');
const Message = require('./messages');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.static('public'));
app.use('/auth', authRouter);

io.use((socket, next) => {
  const token = socket.handshake.headers['authorization'];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return next(new Error('Authentication error'));
    socket.user = user;
    next();
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', async (msg) => {
    // Save message to the database
    const message = new Message({ sender: socket.user.userId, text: msg });
    await message.save();
    io.emit('chat message', msg);
  });

  socket.on('private message', async ({ recipientId, msg }) => {
    io.to(recipientId).emit('private message', { sender: socket.user.userId, msg });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
