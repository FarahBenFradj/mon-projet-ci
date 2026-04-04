# Mon Projet CI — React + Node.js

Projet simple pour tester la CI avec GitHub Actions, Docker et SonarCloud.

## Structure

```
mon-projet/
├── frontend/          # React
├── backend/           # Node.js / Express
├── docker-compose.yml
├── sonar-project.properties
└── .github/
    └── workflows/
        └── ci.yml     # Pipeline CI
```

## Lancer localement

### Backend
```bash
cd backend
npm install
npm run lint
npm test
node src/index.js
```

### Frontend
```bash
cd frontend
npm install
npm run lint
npm test
npm start
```

### Docker Compose
```bash
docker-compose up --build
```

- Frontend : http://localhost:3000
- Backend  : http://localhost:5000

## Secrets GitHub nécessaires

| Secret        | Description                          |
|---------------|--------------------------------------|
| `SONAR_TOKEN` | Token généré dans SonarCloud         |
