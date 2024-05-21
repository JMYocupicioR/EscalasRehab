
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();
// Declare the port variable or use process.env.PORT directly
const port = parseInt(process.env.PORT) || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path
.join(__dirname, 'views'))
  .set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/a-z', (req, res) => {
  // Initialize the escalas array with some data
  const escalas = [
    { nombre: "Escala A", sistema: "Sistema 1", utilidad: "Utilidad 1", descripcion: "Descripción A" },
    { nombre: "Escala B", sistema: "Sistema 2", utilidad: "Utilidad 2", descripcion: "Descripción B" },
  ];
  res.render('a-z', { escalas });
});

app.get('/sistemas', (req, res) => {
  // Initialize the escalas array with some data
  const escalas = [
    { nombre: "Escala A", sistema: "Sistema 1", utilidad: "Utilidad 1", descripcion: "Descripción A" },
    { nombre: "Escala B", sistema: "Sistema 2", utilidad: "Utilidad 2", descripcion: "Descripción B" },
  ];
  res.render('sistemas', { escalas });
});

app.get('/utilidad',
  (req, res) => {
    // Initialize the escalas array with some data
    const escalas = [
      { nombre: "Escala A", sistema: "Sistema 1", utilidad: "Utilidad 1", descripcion: "Descripción A" },
      { nombre: "Escala B", sistema: "Sistema 2", utilidad: "Utilidad 2", descripcion: "Descripción B" },
    ];
    res.render('utilidad', { escalas });
app.get('/utilidad',
  (req, res) => {
    // Initialize the escalas array with some data
    const escalas = [
      { nombre: "Escala A", sistema: "Sistema 1", utilidad: "Utilidad 1", descripcion: "Descripción A" },
      { nombre: "Escala B", sistema: "Sistema 2", utilidad: "Utilidad 2", descripcion: "Descripción B" },
    ];
    res.render('utilidad', { escalas });
  });
  });

