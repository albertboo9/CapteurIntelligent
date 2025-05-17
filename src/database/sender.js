import axios from 'axios';

/**
 * Fonction générique pour envoyer des requêtes à un serveur JSON Server.
 *
 * @param {string} method - La méthode HTTP à utiliser ('get', 'post', 'put', 'delete').
 * @param {string} url - L'URL de l'endpoint sur le serveur JSON Server 
 * @param {object} [data=null] - Les données à envoyer avec la requête (pour POST et PUT).
 * @returns {Promise} - Une promesse qui résoudra avec la réponse du serveur ou rejettera en cas d'erreur.
 */
const sender = async (method, url, data = null) => {
  try {

    const config = {
      method: method.toLowerCase(), // Axios utilise les méthodes en minuscules
      url: url,
      data: data,
      headers: {
        'Content-Type': 'application/json', // Indique que nous envoyons du JSON
      },
    };

    const response = await axios(config);
    return response.data; // Retourne uniquement les données de la réponse
  } catch (error) {
    console.error(`Erreur lors de la requête ${method.toUpperCase()} vers ${url}:`, error);
    throw error; // Propage l'erreur pour que l'appelant puisse la gérer
  }
};

export {sender};