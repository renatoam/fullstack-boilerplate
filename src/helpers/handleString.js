export const capitalize = (string) => {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const convertToCurrency = (value, country = 'pt-BR', currency = 'BRL') => {
  return new Intl.NumberFormat(country, { style: 'currency', currency }).format(value)
}
