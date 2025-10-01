export function respuestaAlFront(res, status, message, data = {}, code = 200) {
  res.status(code).json({
    status,
    message,
    ...data,
  });
}
