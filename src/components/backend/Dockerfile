# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos y directorios del proyecto al directorio de trabajo actual (en el contenedor)
COPY . .

# Expone el puerto que tu aplicación utilizará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
