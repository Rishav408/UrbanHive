const express = require('express');
const cors = require('cors');

const app = express();
const { notFound, errorHandler } = require('./middleware/error');
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Urban Hive API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
