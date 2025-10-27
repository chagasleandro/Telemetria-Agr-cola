require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mqttHandler = require('./mqttHandler');
const equipmentRoutes = require('./routes/equipment');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/equipment', equipmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));

mqttHandler.connect();