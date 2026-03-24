FROM node:22-alpine

WORKDIR /app

# Копируем исходный код
# COPY --chown=nodejs . .

# RUN addgroup -g 1001 -S nodejs && \
#     adduser -S nodejs -u 1001 -G nodejs && \
#     chown -R nodejs:nodejs /app

#USER nodejs

# Копируем package files
COPY ./package*.json .
# COPY package-lock.json ./

RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci --no-audit --no-fund && \
    npm cache clean --force

RUN npm install
RUN npm install typescript
RUN npm install vite
COPY . .
# RUN chown -R nodejs:nodejs /app

# Собираем проект Vite
RUN npm run build

# ENV NODE_ENV=development \
#     NPM_CONFIG_LOGLEVEL=warn
#
# RUN mkdir -p /app/node_modules/.vite && \
#     chown -R nodejs:nodejs /app && \
#     chmod -R 755 /app
    # Switch to non-root user

# Expose ports
EXPOSE 80 3000 5173 9229

# Start development server
CMD ["npm", "run", "dev:docker"]
