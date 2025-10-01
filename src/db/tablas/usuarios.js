export const usuarios = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    correo TEXT UNIQUE NOT NULL,
    clave TEXT NOT NULL,
    nombre TEXT NOT NULL
  )
`;
