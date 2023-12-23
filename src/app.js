// Importation des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// Importation de la fonction connectDB
const connectDB = require('./../config/db');

// Chargement des variables d'environnement
dotenv.config();

// Initialisation de l'application Express
const app = express();

// Middleware pour analyser le corps des requêtes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware pour gérer les requêtes CORS
app.use(cors());

// Middleware pour sécuriser l'application Express
app.use(helmet());

// Connexion à la base de données MongoDB en utilisant la fonction connectDB
connectDB();

//-------------------------------------DEBUT:  Après avoir defini toutes les Routes ------------------------//

// Importation des routes
const userRoutes = require('./routes/userRoutes.js');
const emailRoutes=require('./routes/emailRoutes.js');

// Utilisation des routes dans l'application
app.use('/users', userRoutes);
app.use('/email', emailRoutes);



//------------------------------------- FIN: Après avoir defini toutes les Routes ------------------------//

// Port d'écoute du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
