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

## Organisation du code

```bash
next
app                                            // Emplacement des page et des routes
│   error.tsx
│   favicon.ico
│   globals.css
│   layout.module.css
│   layout.tsx
│   page.module.css
│   page.tsx
│
└───boards
    └───[boardid]                              // Page qui affiche le tableaud de bord selon l'ID de l'utilisateur
            error.tsx
            layout.tsx
            page.module.css
            page.tsx                           ///////////////////////////////////////
node_modules
public
src
├───api
│       api.tsx                                // Réalisation des fetch
│
├───assets
│       halteres.svg
│       logo.svg
│       nage.svg
│       relaxation.svg
│       velo.svg
│
├───components                                // Les composants réutilisable
│   ├───banner
│   │       Banner.module.css
│   │       Banner.tsx
│   │
│   ├───barChart
│   │       BarChartBoard.module.css
│   │       BarChartBoard.tsx
│   │
│   ├───header
│   │       header.module.css
│   │       Header.tsx
│   │
│   ├───lineChart
│   │       LineChartBoard.module.css
│   │       LineChartBoard.tsx
│   │
│   ├───menu
│   │       Menu.module.css
│   │       Menu.tsx
│   │
│   ├───navbar
│   │       navbar.module.css
│   │       Navbar.tsx
│   │
│   ├───radarChart
│   │       RadarChartBoard.module.css
│   │       RadarChartBoard.tsx
│   │
│   ├───radialChart
│   │       RadialChartBoard.module.css
│   │       RadialChartBoard.tsx
│   │
│   ├───sidebar
│   │       sidebar.module.css
│   │       Sidebar.tsx
│   │
│   └───singleValueContainer
│           SingleValueContainer.module.css
│           SingleValueContainer.tsx            ///////////////////////////////
│
├───data
│       data.tsx                               // Données mocked
│
└───utils
    ├───models
    │       DataTransfromChart.tsx             // Class de tranformation des données qui viennent de l'API
    │       Types.tsx
    │
    └───style
            colors.module.css
            sizesFont.module.css
.eslintrc.json
.gitignore
next-env.d.ts
next.config.js
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.json
tsconfig.tsbuildinfo
```

## Autres informations
Si vous voulez switcher entre les données mockés et les données de l'API dans le fichier **sportsee/src/api/api.tsx**, changer la valeur de la variable useMockedData en false/true.
