import {createPool} from 'mysql2/promise';

const db = createPool({
  host: 'ls-139b40c46465996e42cf022f0199d0a34bb0ab64.cnqmtkdkm8tk.ca-central-1.rds.amazonaws.com', // Cambia esto si tu base de datos está en un host diferente
  user: 'kathya', // Reemplaza con el nombre de usuario de tu base de datos
  password: 'Pass1234*', // Reemplaza con la contraseña de tu base de datos
  database: 'planta', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from datos");
  return res.status(200).json(rows)
}
