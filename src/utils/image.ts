/**
 * Utility to resolve asset URLs across development and production environments.
 * 
 * - Development (import.meta.env.DEV): Retains .png paths so developers can work directly
 *   with standard PNG assets during local development.
 * - Production (import.meta.env.PROD): Automatically maps .png to .webp to serve
 *   lightweight, optimized images to end users.
 */
export function resolveImageUrl(url: string): string {
  if (!url) return url;
  if (import.meta.env.PROD && /\.png$/i.test(url)) {
    return url.replace(/\.png$/i, '.webp');
  }
  return url;
}
