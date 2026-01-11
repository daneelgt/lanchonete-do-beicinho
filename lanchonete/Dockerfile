# Estágio de build
FROM node:20 AS builder
WORKDIR /app

# Copiar apenas os arquivos de dependências primeiro
COPY package*.json ./
RUN npm install

# Copiar todo o código fonte
COPY . .

# Build com Vite
RUN npm run build

# Estágio de produção
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
