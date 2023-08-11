# Nouvelle page profil pour l'application de SportSee

## Description
**SportSee**, c'est une startup de coaching sportif. Ils ont développer une application de suivi pour leurs abonnés, et ont décidés de réaliser une refonte de la page de profil des utilisateurs. Cette page va permettre de suivrent le nombre de sessions qu'ils ont réalisées, visualiser leur performance de la semaine, ainsi que des données complémentaires à leur évolution. 

Pour ce projet j'ai utilisé React, comme il était demandé. Plus précisement on retrouve :
- **Next.JS** : Gestion des routes facile a mettre en place, et la puissance des *Use Client*.
- **Typescript** : Typer nos données afin de mieux les utilisées dans l'application.
- **Recharts** : Réaliser les differents graphiques de l'utilisateur.
- **Les Modules CSS** : Pratique pour styliser les composants independement des autres.

## Comment utiliser le projet
### Prérequits
- [Node.JS](https://nodejs.org/fr)
- [npm](https://github.com/npm/documentation)

### lancer le projet
Pour utiliser ce projet, vous aurait besoin de cette API. Quand l'API est installer : 

- Forker le projet.
- Lancer la commade `npm install` dans votre terminal, pour installer toutes les dependances.
- Puis `npm run dev` pour lancer le projet.

## Autres informations
Si vous voulez switcher entre les données mocked et l'API dans le fichier **sportsee/src/api/api.tsx** changer la valeur de la variable useMockedData en false/true.
