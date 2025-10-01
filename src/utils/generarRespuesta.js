export function generarRespuesta(status, message, data = {}, code = 200) {
  return {
    status,
    message,
    ...data,
    code,
  };
}
