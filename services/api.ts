
import axios from 'axios';

// Cria uma instância do Axios com a URL base definida nas variáveis de ambiente
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Defina a URL base da API
});

/**
 * Fetches the list of available posts.
 * 
 * @returns {Promise<any>} A promise that resolves to the list of posts.
 */
export const fetchPosts = async (): Promise<any> => {
  const response = await api.get('/api/posts/');
  return response.data;
};
