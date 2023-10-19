export function priceFormat(priceInCents: number): string {
  const priceInReals = (priceInCents / 100).toLocaleString("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  });

  return priceInReals;
}