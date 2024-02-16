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
   host: "tinogasta.gob.ar",
    port: 21,
   user: "j8000542_cv",
   password: "01voMIgima",
   database: "j8000542_cv",
 });

// Conexion de Prueba G2KHosting MariaDB
//  const connection = mysql.createConnection({
//    host: "localhost",
//    user: "c19511_backend",
//    password: "NBK0y3fLTiZc",
//    database: "c19511_trabajo",
//  });

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

  const query = 'SELECT id FROM usuarios WHERE dni = ?';
  connection.query(query, [dni], (err, rows, fields) => {
    if (!err) {
      if (rows.length > 0) {
        // Si el DNI ya existe, actualizar los datos del usuario
        const userId = rows[0].id;
        const updateQuery = 'UPDATE usuarios SET nombre = ?, apellido = ?, dni = ?, fechanacimiento = ?, genero = ?, estadocivil = ?, disponibilidadhoraria = ?, telefono = ?, email = ?, residencia = ?, titulosuperior = ?, institucionsuperior = ?, titulosecundario = ?, institucionsecundaria = ?, especialidades = ?, idiomas = ?, nivelidioma = ?, empresa1 = ?, descripcion1 = ?, fechainicio1 = ?, fechafin1 = ?, empresa2 = ?, descripcion2 = ?, fechainicio2 = ?, fechafin2 = ?, empresa3 = ?, descripcion3 = ?, fechainicio3 = ?, fechafin3 = ?, carnet = ?, dispviajar = ?, miresumen = ?, habilidadblanda1 = ?, habilidadblanda2 = ?, habilidadblanda3 = ?, habilidadblanda4 = ?, habilidadblanda5 = ?, habilidadtecnica1 = ?, habilidadtecnica2 = ?, habilidadtecnica3 = ?, habilidadtecnica4 = ?, habilidadtecnica5 = ?, niveleducacion = ?, fechafinsecundaria = ?, fechafinuniversidad = ?, domicilio = ?, fechacarga = ? WHERE id = ?';
        connection.query(updateQuery, [nombre, apellido, dni, fechanacimiento, genero, estadocivil, disponibilidadhoraria, telefono, email, residencia, titulosuperior, institucionsuperior, titulosecundario, institucionsecundaria, especialidades, idiomas, nivelidioma, empresa1, descripcion1, fechainicio1, fechafin1, empresa2, descripcion2, fechainicio2, fechafin2, empresa3, descripcion3, fechainicio3, fechafin3, carnet, dispviajar, miresumen, habilidadblanda1, habilidadblanda2, habilidadblanda3, habilidadblanda4, habilidadblanda5, habilidadtecnica1, habilidadtecnica2, habilidadtecnica3, habilidadtecnica4, habilidadtecnica5, niveleducacion, fechafinsecundaria, fechafinuniversidad, domicilio, fechacarga, userId], (updateErr, updateResult) => {
          if (!updateErr) {
            res.json({ message: 'Datos del usuario actualizados correctamente' });
          } else {
            console.error('Error al actualizar los datos del usuario:', updateErr);
            res.status(500).json({ error: 'Error al actualizar los datos del usuario' });
          }
        });
      } else {
        // Si el DNI no existe, insertar un nuevo registro
        const insertQuery = 'INSERT INTO usuarios (nombre, apellido, dni, fechanacimiento, genero, estadocivil, disponibilidadhoraria, telefono, email, residencia, titulosuperior, institucionsuperior, titulosecundario, institucionsecundaria, especialidades, idiomas, nivelidioma, empresa1, descripcion1, fechainicio1, fechafin1, empresa2, descripcion2, fechainicio2, fechafin2, empresa3, descripcion3, fechainicio3, fechafin3, carnet, dispviajar, miresumen, habilidadblanda1, habilidadblanda2, habilidadblanda3, habilidadblanda4, habilidadblanda5, habilidadtecnica1, habilidadtecnica2, habilidadtecnica3, habilidadtecnica4, habilidadtecnica5, niveleducacion, fechafinsecundaria, fechafinuniversidad, domicilio, fechacarga) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(insertQuery, [nombre, apellido, dni, fechanacimiento, genero, estadocivil, disponibilidadhoraria, telefono, email, residencia, titulosuperior, institucionsuperior, titulosecundario, institucionsecundaria, especialidades, idiomas, nivelidioma, empresa1, descripcion1, fechainicio1, fechafin1, empresa2, descripcion2, fechainicio2, fechafin2, empresa3, descripcion3, fechainicio3, fechafin3, carnet, dispviajar, miresumen, habilidadblanda1, habilidadblanda2, habilidadblanda3, habilidadblanda4, habilidadblanda5, habilidadtecnica1, habilidadtecnica2, habilidadtecnica3, habilidadtecnica4, habilidadtecnica5, niveleducacion, fechafinsecundaria, fechafinuniversidad, domicilio, fechacarga], (insertErr, insertResult) => {
          if (!insertErr) {
            res.json({ message: 'Nuevo usuario insertado correctamente' });
          } else {
            console.error('Error al insertar nuevo usuario:', insertErr);
            res.status(500).json({ error: 'Error al insertar nuevo usuario' });
          }
        });
      }
    } else {
      console.error('Error al verificar el DNI en la base de datos:', err);
      res.status(500).json({ error: 'Error al verificar el DNI en la base de datos' });
    }
  });
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

app.post('/api/usuarios/verificar-dni', (req, res) => {
  const { dni } = req.body;
  const query = 'SELECT COUNT(*) AS count FROM usuarios WHERE dni = ?';
  connection.query(query, [dni], (err, rows, fields) => {
    if (!err) {
      const existe = rows[0].count > 0;
      res.json({ existe });
    } else {
      console.error('Error al verificar DNI en la base de datos:', err);
      res.status(500).json({ error: 'Error al verificar DNI en la base de datos' });
    }
  });
});

module.exports = router;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
