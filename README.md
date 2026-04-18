# 📌 Projet Kanban - CDA Bloc 3

## 📖 Contexte
Ce projet a été réalisé dans le cadre du Bloc 3 du titre CDA (Concepteur Développeur d’Applications).

L’objectif est de préparer la mise en production sécurisée d’une application Kanban.

---

## 🧰 Stack technique
- Node.js
- Express
- Sequelize
- SQLite
- Vitest / Supertest
- Docker
- GitHub Actions

---

## 🚀 Installation

```bash
npm install
node src/server.js

---

## 📡 API

### GET /api/taches
Retourne la liste des tâches

### POST /api/taches
Crée une nouvelle tâche

Body JSON :
{
  "titre": "Nouvelle tâche",
  "description": "Description",
  "colonneId": 1
}

---

## 🧪 Tests

Les tests sont réalisés avec Vitest et Supertest.

Ils permettent de vérifier :
- les codes HTTP
- le format des réponses JSON
- la création de tâches

Commande :
npm test
