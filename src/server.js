import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { rutas } from './router/router.js';

process.loadEnvFile();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(cookieParser());
app.use(rutas);

const PORT = process.env.PUERTO || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}...`);
});