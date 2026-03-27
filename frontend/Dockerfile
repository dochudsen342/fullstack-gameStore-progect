# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.12.0

FROM node:${NODE_VERSION}-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json .

# Устанавливаем все зависимости (включая devDependencies)
RUN npm i

# Копируем исходный код
COPY . .

# Открываем порт для Next.js
EXPOSE 3000

# Запускаем в режиме разработки
CMD ["npm", "run", "dev"]