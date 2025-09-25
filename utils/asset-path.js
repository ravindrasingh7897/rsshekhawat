/**
 * Get the correct asset path for both development and production (GitHub Pages)
 * @param {string} path - The asset path (should start with /)
 * @returns {string} - The correct path for current environment
 */
export function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/rsshekhawat' : '';
  return `${basePath}${path}`;
}