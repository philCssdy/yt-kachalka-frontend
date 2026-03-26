FROM node:22-alpine

WORKDIR /app

# Копируем package files
COPY ./package*.json .

RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci --no-audit --no-fund && \
    npm cache clean --force

COPY . .

# Собираем проект Vite
RUN npm run build

# Start development server
CMD ["npm", "run", "dev:docker"]
