export function cn(...args: any[]){ return args.filter(Boolean).join(' '); }

/**
 * Capitalizes the first letter of each word in a string.
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Truncates text safely to a specified character limit.
 */
export function truncate(text: string, length = 100): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}
