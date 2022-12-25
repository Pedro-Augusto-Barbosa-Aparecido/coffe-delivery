export const formatCurrencyToBRL = (value: number) =>
  Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 2,
  }).format(value);
