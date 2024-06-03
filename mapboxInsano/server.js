const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

let vehiculos = [];

function leerDatosDesdeJSON() {
  try {
    if (fs.existsSync('datos.json')) {
      const data = fs.readFileSync('datos.json');
      vehiculos = JSON.parse(data);
    } else {
      escribirDatosEnJSON([]);
    }
  } catch (error) {
    console.error('Error al leer datos desde el archivo JSON:', error);
  }
}

function escribirDatosEnJSON(data) {
  try {
    fs.writeFileSync('datos.json', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error al escribir datos en el archivo JSON:', error);
  }
}

app.get('/api/mapbox-token', (req, res) => {
  res.json({ token: process.env.MAPBOX_TOKEN });
});

app.get('/api/vehiculos', (req, res) => {
  res.json(vehiculos);
});

app.post('/api/vehiculos', (req, res) => {
  const vehiculo = req.body;
  vehiculo.ubicaciones = [vehiculo.ubicacion];
  vehiculos.push(vehiculo);
  escribirDatosEnJSON(vehiculos);
  res.status(201).json(vehiculo);
});

app.put('/api/vehiculos/:id', (req, res) => {
  const { id } = req.params;
  const vehiculoActualizado = req.body;

  let vehiculo = vehiculos.find(v => v.id === id);
  if (vehiculo) {
    vehiculo.estado = vehiculoActualizado.estado;
    vehiculo.rendimiento = vehiculoActualizado.rendimiento;
    vehiculo.ubicaciones.push(vehiculoActualizado.ubicacion); // Agregar la nueva ubicación a la lista de ubicaciones
    escribirDatosEnJSON(vehiculos); // Guardar datos en el archivo JSON
    res.json(vehiculo);
  } else {
    res.status(404).json({ message: 'Vehículo no encontrado' });
  }
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

leerDatosDesdeJSON();
