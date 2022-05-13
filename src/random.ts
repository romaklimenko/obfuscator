export function randomChar() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

export function randomDigit() {
  const chars = '0123456789';
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}
