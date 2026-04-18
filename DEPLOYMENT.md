# Déploiement

## Local
npm install
node src/server.js

## Docker
docker build -t kanban-backend .
docker run -p 3000:3000 kanban-backend