# LibraryJSL3
Projet library express en JS pour la L3 MIAGE Alternance de Fremont Yohann. 

Voici les différentes étapes pour le fonctionnement du projet. 

1 - Télécharger ou cloner le projet. 
2 - Ouvrir le dossier sur VSC.
3 - Créer une connexion localhost avec mongodb en faisant "mongodb://127.0.0.1:27017" ou si vous avez déjà une connexion mongodb la remplacer alors dans app.js ligne 22.
4 - Créer une base données catalog ou alors modifier aussi "mongodb://127.0.0.1:27017/nom_votre_bdd" dans app.js ligne 22.
5 - Exécuter populatedb.js afin de récupérer les livres, les auteurs et les genres et les placer dans la bdd. 
6 - Exécuter ensuite sur l'invite de commande VSC en faisant node ou nodemon app.js.
