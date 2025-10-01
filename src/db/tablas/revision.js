export const revision = `
  CREATE TABLE IF NOT EXISTS revision (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    departamento_id INTEGER NOT NULL,
    fecha TEXT NOT NULL,
    comentario TEXT,
    FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY(departamento_id) REFERENCES departamento(id)
  )
`;
