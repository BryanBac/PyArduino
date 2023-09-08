import {createPool} from 'mysql2/promise';

const db = createPool({
  host: '', // Cambia esto si tu base de datos está en un host diferente
  user: '', // Reemplaza con el nombre de usuario de tu base de datos
  password: '', // Reemplaza con la contraseña de tu base de datos
  database: 'planta', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from datos");
  return res.status(200).json(rows)
}
