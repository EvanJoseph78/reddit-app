
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


// Função para criar um post, enviando userClerkId, username e email
export const createPost = async (userClerkId: string, username: string, email: string, title: string, body: string, imageUrl: string): Promise<any> => {
  try {
    // Faz a requisição POST para o endpoint '/api/posts/create'
    const response = await axios.post('/api/posts/create', {
      userClerkId,
      username,
      email,
      title,
      body,
      imageUrl
    });

    // Retorna os dados da resposta da API
    return response.data;
  } catch (error) {
    // Tratamento de erro
    console.error("Error creating post:", error);

    // Pode-se lançar o erro para ser tratado onde a função é chamada, ou tratar diretamente aqui
    throw error;
  }
};

