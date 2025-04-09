# 🎬 Movies Presentation 🎬

![imagedusite](./swappy-20250409-172307.png)

## Sommaire

- [Introduction](#introduction)

- [Déploiement](#déploiement)

## Introduction

Ce projet a été réalisé dans le cadre du processus de recrutement de l'entreprise [Fleet](https://fleet.co/), et utilise [l'API de TMDB](https://developer.themoviedb.org/docs/getting-started). Le projet a été réalisé en React. 

Le but de l'exercice était d'implémenter l'API de TMDB pour réaliser une interface contenant une recherche de film dans un menu à gauche et capable d'afficher le poster et les caractéristiques du film à droite. 

## Déploiement

### Obtention de la clé API

Allez sur [le site de TMDB](https://www.themoviedb.org/) et générez une clé API et un request token. Puis faites : 
```bash
cp .env_template .env
```
et copiez le request token à la place de `xxx`.

Il y a 2 méthodes pour déployer l'interface localement :

### Via npm

Pour déployer le site directement avec npm faites :
```bash
npm install
npm start
```
et l'interface va apparaître dans votre navigateur.

### Via Docker

Sinon vous pouvez déployer le site directement avec Docker si vous voulez éviter les problèmes de dépendances. Faites :

```bash
sudo docker build . -t movies
sudo docker run -p 8080:3000 movies
```
Et le site sera présent à l'adresse `http://localhost:8080` .
