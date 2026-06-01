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

Pour choisir la source, définir la variable **VITE_DATA_SOURCE** à **_JSON_** ou **_API_** dans le fichier `.env` :

```JS
VITE_JSON_URL="/src/assets/datas/data.json";
VITE_API_URL="http://localhost:8080/api/properties";

# valeur = "JSON" ou "API"
VITE_DATA_SOURCE="JSON";
```
