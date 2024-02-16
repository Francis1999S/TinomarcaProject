const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "190.106.145.111",
  user: "c19511_backend",
  password: "NBK0y3fLTiZc",
  database: "c19511_trabajo",
});

connection.connect();

//V

// Ruta para obtener datos desde MySQL
app.get("/api/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post("/api/usuarios", (req, res) => {
  const {
    nombre,
    apellido,
    dni,
    fechanacimiento,
    genero,
    estadocivil,
    disponibilidadhoraria,
    telefono,
    email,
    residencia,
    titulosuperior,
    institucionsuperior,
    titulosecundario,
    institucionsecundaria,
    especialidades,
    idiomas,
    nivelidioma,
    empresa1,
    descripcion1,
    fechainicio1,
    fechafin1,
    empresa2,
    descripcion2,
    fechainicio2,
    fechafin2,
    empresa3,
    descripcion3,
    fechainicio3,
    fechafin3,
    carnet,
    dispviajar,
    miresumen,
    habilidadblanda1,
    habilidadblanda2,
    habilidadblanda3,
    habilidadblanda4,
    habilidadblanda5,
    habilidadtecnica1,
    habilidadtecnica2,
    habilidadtecnica3,
    habilidadtecnica4,
    habilidadtecnica5,
    niveleducacion,
    fechafinsecundaria,
    fechafinuniversidad,
    domicilio,
    fechacarga,
  } = req.body;

  const sql =
    "INSERT INTO usuarios (nombre, apellido, dni, fechanacimiento, genero, estadocivil, disponibilidadhoraria, telefono, email, residencia, titulosuperior, institucionsuperior, titulosecundario, institucionsecundaria, especialidades, idiomas, nivelidioma, empresa1, descripcion1, fechainicio1, fechafin1, empresa2, descripcion2, fechainicio2, fechafin2, empresa3, descripcion3, fechainicio3, fechafin3, carnet, dispviajar, miresumen, habilidadblanda1, habilidadblanda2, habilidadblanda3, habilidadblanda4, habilidadblanda5, habilidadtecnica1, habilidadtecnica2, habilidadtecnica3, habilidadtecnica4, habilidadtecnica5, niveleducacion, fechafinsecundaria, fechafinuniversidad, domicilio, fechacarga) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    sql,
    [
      nombre,
      apellido,
      dni,
      fechanacimiento,
      genero,
      estadocivil,
      disponibilidadhoraria,
      telefono,
      email,
      residencia,
      titulosuperior,
      institucionsuperior,
      titulosecundario,
      institucionsecundaria,
      especialidades,
      idiomas,
      nivelidioma,
      empresa1,
      descripcion1,
      fechainicio1,
      fechafin1,
      empresa2,
      descripcion2,
      fechainicio2,
      fechafin2,
      empresa3,
      descripcion3,
      fechainicio3,
      fechafin3,
      carnet,
      dispviajar,
      miresumen,
      habilidadblanda1,
      habilidadblanda2,
      habilidadblanda3,
      habilidadblanda4,
      habilidadblanda5,
      habilidadtecnica1,
      habilidadtecnica2,
      habilidadtecnica3,
      habilidadtecnica4,
      habilidadtecnica5,
      niveleducacion,
      fechafinsecundaria,
      fechafinuniversidad,
      domicilio,
      fechacarga,
    ],
    (error, results) => {
      if (error) {
        console.error("Error al insertar usuario:", error);
        res.status(500).send("Error interno del servidor al insertar usuario");
        
      } else {
        res.status(200).json({ message: "Usuario insertado correctamente" });
      }
    }
  );
});

app.get("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM usuarios WHERE id = ?";
  connection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.error("Error al obtener los datos del CV:", err);
      res.status(500).json({ error: "Error al obtener los datos del CV" });
    }
  });
});

module.exports = router;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
