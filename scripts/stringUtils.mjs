export const toPascalCase = (str) =>
  str.replace(/(^\w|-\w)/g, (text) => text.replace(/-/, '').toUpperCase());

export const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

export const toKebabCase = (str) =>
  str.replace(/([A-Z])/g, (char) => `-${char.toLowerCase()}`).replace(/^-/, '');
