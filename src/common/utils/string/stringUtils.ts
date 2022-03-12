export const removeAccents = (str: string) =>
  typeof str === 'string'
    ? str
        ?.replace(/[\u0300-\u036f]|/g, '')
        ?.replace(/ı|I/g, 'i')
        ?.replace(/İ/g, 'i')
        ?.replace(/ş|Ş/g, 's')
        ?.replace(/ç|Ç/g, 'c')
        ?.replace(/ü|Ü/g, 'u')
        ?.replace(/ö|Ö/g, 'o')
        ?.replace(/ğ|Ğ/g, 'g')
        ?.toLowerCase()
    : '';
