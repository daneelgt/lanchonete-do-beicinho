## Como executar o projeto

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Para desenvolvimento
```bash
docker-compose --profile dev up -d
```

## Se por acaso encontrar problemas de permissão:

- RUN chown -R node:node /app
- USER node
