# Utiliza una imagen oficial de Node.js como imagen base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias primero para aprovechar la caché de Docker
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo (excepto lo que esté en .dockerignore)
COPY . .

# Expone el puerto que tu aplicación usará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
