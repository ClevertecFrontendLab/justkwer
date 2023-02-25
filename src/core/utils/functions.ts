export const getDate = (str: string, options: Intl.DateTimeFormatOptions) =>
  new Date(str).toLocaleString('ru', options).replace(/\s*г\./, '');

export const searchRegExp = (str: string) => {
  const escapeRegExp = str.replace(/[[()\\]/g, '\\$&');

  return new RegExp(escapeRegExp, 'gi');
};
