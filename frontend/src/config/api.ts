// URL de base du Backend : récupérée depuis la variable d'environnement VITE_API_URL
// En développement local, retombe par défaut sur http://localhost:5000
export const API_BASE_URL: string = (
  (import.meta.env.VITE_API_URL as string) || 'http://localhost:5000'
).replace(/\/$/, '');

export const API_URL = `${API_BASE_URL}/api`;

/**
 * Construit l'URL complète pour accéder aux fichiers téléversés
 */
export const getUploadUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('/uploads/')) return `${API_BASE_URL}${path}`;
  if (path.startsWith('/')) return `${API_BASE_URL}${path}`;
  return `${API_BASE_URL}/uploads/${path}`;
};
