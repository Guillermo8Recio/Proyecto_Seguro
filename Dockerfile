FROM node:18-alpine

WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json desde la carpeta app
COPY app/package*.json ./

RUN npm install

# Copia el resto del código fuente desde la carpeta app
COPY app/ .

# Crea un usuario no-root
RUN addgroup app && adduser -S -G app app

USER app

EXPOSE 3000

CMD ["npm", "start"]


