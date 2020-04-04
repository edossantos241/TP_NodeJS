# TP_NodeJS

Rappels du TP1 NodeJS

Affichage en ligne de commande d'un fichier csv:

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/TP1AfficherData.PNG)

Affichage en ligne de commande d'un fichier csv avec nom du fichier passé en argument:

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/TP1Bonus.PNG)

Affichage sous forme de page web du fichier csv :

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/TP1AfficherTableau.PNG)

Affichage sous forme de page web du fichier csv avec nom du fichier passé en paramètre:

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/TP1AfficherTableauAvecParam.PNG)




TP2 Utilisation de Express:

Mini TP

Afficher le contenu du fichier csv :

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/Postman.PNG)

Bonus : ajouter une gestion de fichiers statiques :

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/PostmanChat1.PNG)

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/PostmanChat2.PNG)

TP traitement fichier JSON:

1) Implémenter une route GET : 

Réponse si le fichier n'est pas présent :

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/AffichageJSONPasPresent.PNG)

Réponse si le fichier JSON est bien présent :

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/AffichageJSONPresent.PNG)

2) Implémenter une route POST pour ajouter une ville :

Réponse si la ville est déjà présente:

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/PostVillePresente.PNG)

On a joute la ville Rodez (si le fichier JSON n'existe pas, il est d'abord créé):

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/PostVilleAjoutee.PNG)

3) Modification du nom d'un ville selon son ID : implémentation d'une route PUT:

Changement de "Albi" en "Paris":

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/put.PNG)

4) Implémenter une route DELETE (pour supprimer une ville selon son ID:

Suppression de Paris:

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/delete.PNG)


TP3 Transformer le serveur des TP précédents pour utiliser MongoDB et Mongoose :

2. Les villes ne sont plus stockées dans le fichier cities.json mais dans la collection cities de la BD MongoDB

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/BDVide.PNG)

3. Utiliser Mongoose avec NodeJS pour que les appels à l’API mettent à jour la base MongoDB :
• Ajout d’une ville via POST /city
Ajout de la ville "Toulouse"

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseAjoutVillePostman.PNG)

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseAjoutVilleCompass.PNG)

• Récupération des villes via GET /cities

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseGetPostman.PNG)

• Modification d’une ville via PUT /city/:id
Modification de "Toulouse" par "Albi"

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongoosePutPostman.PNG)

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongoosePutCompass.PNG)

• Suppression d’une ville via DELETE /city/:id
Suppression de la ville "Albi"

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseDeletePostman.PNG)

4. Créer un formulaire HTML dans votre template Pug pour ajouter une ville.

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseFormulaireAjoutVille.PNG)

5. A la soumission du formulaire :
• la ville est ajoutée en base de données.
Ajout des villes "Toulouse" et "Albi"

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseFormulaireAjoutResultat.PNG)

• Après le rechargement de la page, la liste des villes affichées dans le tableau HTML est à jour avec la nouvelle ville.
Après ajout de la ville "Lille"

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseAjoutAlbiFormulaireAffichage.PNG)

6. Ajouter la possibilité de modifier une ville

![alt text](https://github.com/edossantos241/TP_NodeJS/blob/master/ResultatsTP/MongooseAjoutBoutonVerif.PNG)

