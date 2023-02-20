export const getDate = (str: string, options: Intl.DateTimeFormatOptions) =>
  new Date(str).toLocaleString('ru', options).replace(/\s*г\./, '');
