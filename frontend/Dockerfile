# Указываем базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем все зависимости сразу из package.json
RUN npm config set registry https://registry.npmjs.org/ && npm install
# Копируем весь проект
COPY . .

# Сборка приложения Next.js
RUN npm run build

# Запуск приложения
EXPOSE 3000
CMD npm run dev
