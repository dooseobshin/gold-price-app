export default async function handler(req, res) {
  const r = await fetch('https://www.goldapi.io/api/XAU/USD', {
    headers: { 'x-access-token': process.env.GOLD_API_KEY }
  });
  const data = await r.json();
  res.status(200).json({ price: data.price });
}
