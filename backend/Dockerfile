# Используем официальный образ PHP
FROM php:8.1-fpm

# Устанавливаем необходимые зависимости
RUN apt-get update && apt-get install -y \
    libpq-dev \
    git \
    unzip \
    curl \
    nginx \
    && docker-php-ext-install pdo pdo_pgsql

# Установка Node.js и npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Копируем исходный код в контейнер
COPY . /var/www

# Копируем конфигурацию Nginx
#COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Создаем директории для логов и устанавливаем права
RUN mkdir -p /var/log/nginx \
    && touch /var/log/nginx/access.log /var/log/nginx/error.log \
    && chown -R www-data:www-data /var/log/nginx

# Устанавливаем рабочую директорию
WORKDIR /var/www

# Устанавливаем зависимости проекта

# Запуск Nginx и PHP-FPM
CMD service nginx start && php-fpm
