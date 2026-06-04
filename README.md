![logo de Kasa](/src/assets/images/LOGO-red.svg "logo")

# React + Vite

_React compiler n'est pas activé sur ce projet._

## React Router

Utilisation en "Declarative Mode".

## Sass

Le préprocesseur Sass est utilsé via Vite et sa prise en charge du format `.scss`

- Un fichier `.module.scss` par composant / page.
- Un dossier _sass_ contenant les paramètres globaux (fonts, variables , mixins, reset, typographie et classes).


## Back-end / data

Les données des logements peuvent être récupérées de deux manières :

- Depuis le fichier JSON ( /src/assets/datas/data.json )
- Depuis l'API disponible sur [GitHub](https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_appli_location_immobiliere_React)

Pour choisir la source, définir la variable **url** dans le fichier `/src/services/API/getDatas.js` :

```JS
// Depuis le fichier JSON
const url = import.meta.env.VITE_JSON_URL;

// Depuis l'API dispo sur GitHub
const url = import.meta.env.VITE_API_URL;
```
