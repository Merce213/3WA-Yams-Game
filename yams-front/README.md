# Jeu du Yam's

Ce projet a été développé dans le cadre d'une formation à la 3W Academy.

## Présentation du projet

"App Yams" est une application web développée en React permettant aux utilisateurs de jouer au Yams pour gagner des pâtisseries. 

En l'état actuel, le jeu propose quatre combinaisons gagnantes :
- Yams (Yahtzee)
- La Grande Suite
- Le Carré
- Le Brelan

Chaque combinaison récompense le joueur avec différentes quantités de pâtisseries.

La liste des récompenses restantes a gagné est disponible sur la page principale du jeu.

Le joueur a droit à trois lancés de dés pour tenter d'obtenir des pâtisseries. Si un lancé autre que le dernier est gagnant, le joueur peut effectuer un nouveau lancé pour tenter d'obtenir une meilleure récompense.
Si aucun lancé n'aboutit à une combinaison gagnante, le joueur a perdu. Il a ensuite la possibilité de rejouer ou de quitter le jeu.

En plus du jeu, l'application comprend une section sécurisée pour les administrateurs où ils peuvent gérer les pâtisseries disponibles (CRUD). L'administrateur peut modifier le nom, la quantité disponible, l'image d'une pâtisserie et décider si cette pâtisserie peut être obtenue par un joueur.


## Présentation des techniques utilisées

- **Frontend:** React, Vite, RTK Query
- **Routing:** React Router
- **State Management:** Redux Toolkit
- **Styling:** TailwindCSS
- **Backend API:** Express (fourni dans la documentation Yams API)
- **Gestion de projet:** Git, Notion


## Auteurs

Projet réalisé par Jérôme B. et Nassim B., en formation à la 3W Academy.

- [@Merce213](https://github.com/Merce213)
- [@BlackHyrr](https://github.com/BlackHyrr)

L'API a été réalisé par Antoine Lucsko, formateur à la 3W Academy.
- [@Antoine07](https://github.com/Antoine07)

