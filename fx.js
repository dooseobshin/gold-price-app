export default async function handler(req, res) {
  const r = await fetch('https://open.er-api.com/v6/latest/USD');
  const data = await r.json();
  res.status(200).json({ rate: data.rates.KRW });
}
