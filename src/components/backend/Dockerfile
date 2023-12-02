# Imagen base (puede ser Node.js, Python, etc., dependiendo de tu aplicación)
FROM node:latest

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Exponer el puerto que usa tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
