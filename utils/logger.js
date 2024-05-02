export default function(req, _, next) {
  const time = new Date().toLocaleString();
  console.log(`${time} - ${req.method} ${req.url}`);
  next();
}
