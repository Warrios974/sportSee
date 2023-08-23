# Nouvelle page profil pour l'application de SportSee

## Description
**SportSee**, c'est une startup de coaching sportive. Ils ont développé une application de suivi pour leurs abonnés et ont décidé de réaliser une refonte de la page de profil des utilisateurs. Cette page va permettre de suivre le nombre de sessions qu'ils ont réalisées, visualiser leurs performances de la semaine, ainsi que des données complémentaires à leur évolution. 

Pour ce projet j'ai utilisé React, comme il était demandé. Plus précisément on retrouve :
- **Next.JS** : Gestion des routes faciles à mettre en place, et la puissance des *Use Client*.
- **Typescript** : Typer nos données afin de mieux les utiliser dans l'application.
- **Recharts** : Réaliser les différents graphiques de l'utilisateur.
- **Les Modules CSS** : Pratique pour styliser les composants indépendamment des autres.

## Comment utiliser le projet
### Prérequits
- [Node.JS](https://nodejs.org/fr)
- [npm](https://github.com/npm/documentation)

### lancer le projet
Pour utiliser ce projet, vous aurez besoin de cette API. Quand l'API est installée : 

- Forkez le projet.
- Lancez la commande `npm install` dans votre terminal, pour installer toutes les dépendances.
- Puis `npm run dev` pour lancer le projet.

## Autres informations
Si vous voulez switcher entre les données mockés et les données de l'API dans le fichier **sportsee/src/api/api.tsx**, changer la valeur de la variable useMockedData en false/true.
