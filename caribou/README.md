# CaribouCo

## Prérequis

* node.js
* yarn
* docker / docker-compose OU MongoDB 4.2

## Installation

### Serveur

Assurez-vous qu'aucun programme n'utilise les ports 33333 et 33334, puis tapez dans un terminal les commandes suivantes :

#### Avec Docker

```
  cd ./caribou/back
  docker-compose up -d
```

#### Classique

```
  cd ./caribou/back
  yarn
  node src/index.js ...
```

### Client

Assurez-vous qu'aucun programme n'utilise le port 3000, puis tapez dans un terminal les commandes suivantes :

```
  cd ./caribou/front
  yarn install
  yarn start
```

Si votre navigateur ne s'ouvre pas automatique, rendez-vous à l'adresse suivante : http://localhost:3000

## Fonctionnel

- Inscription d'un nouvel utilisateur
- Connexion / Déconnexion d'un utilisateur
- Affichage d'une carte cliquable présentant :
  - Les caribous prêts à échanger des bois
  - Les humains ajoutés par l'utilisateur au cours de sa session
  - La zone perturbée par les humains
- Affichage d'une modale lors du clic sur la carte permettant :
  - De signaler un humain avec ses caractéristiques
  - De vérifier si un humain a été signalé dans un périmètre paramétrable
  - De signaler un caribou prêt à échanger des bois
- Affichage d'une messagerie en direct permettant :
  - D'échanger des messages sécurisé avec les personnes connectées
  - D'afficher les notifications concernant les entrées et sorties des humains de la zone perturbée
  - D'afficher le résultat des vérifications de signalement d'humains
