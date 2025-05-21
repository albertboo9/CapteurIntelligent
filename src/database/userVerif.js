import axios from 'axios';

/**
 * Fonction asynchrone pour vérifier si un utilisateur existe sur le serveur JSON Server
 * en fonction de son nom d'utilisateur et de son mot de passe.
 *
 * @param {string} username - Le nom d'utilisateur à rechercher.
 * @param {string} password - Le mot de passe à vérifier.
 * @param {string} serverUrl - L'URL de base du serveur JSON Server (ex: 'http://localhost:3000').
 * @returns {Promise<boolean>} - Une promesse qui résout avec true si l'utilisateur est trouvé,
 * false si aucun utilisateur correspondant n'est trouvé,
 * et rejette la promesse en cas d'erreur de requête.
 */

const userVerif = async (username, password, serverUrl) => {
  try {
    // Construction de l'URL de requête pour filtrer les utilisateurs par nom d'utilisateur et mot de passe.
    // JSON Server traitera les paramètres multiples comme une condition 'AND'.
    const url = `${serverUrl}/users?username=${username}&password=${password}`;

    // Envoi de la requête GET au serveur JSON Server.
    const response = await axios.get(url);

    // Vérification de la réponse : si le tableau de données contient au moins un élément,
    // cela signifie qu'un utilisateur correspondant a été trouvé.
    if (response.data && response.data.length > 0) {
      console.log(`Utilisateur "${username}" trouvé.`);
      return true; // L'utilisateur a été reconnu.
    } else {
      console.log(`Utilisateur "${username}" non trouvé.`);
      return false; // Aucun utilisateur correspondant n'a été trouvé.
    }
  } catch (error) {
    console.error(`Erreur lors de la vérification de l'utilisateur "${username}":`, error);
  }
};

export {userVerif}


