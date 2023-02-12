# /app /usr /bin /lib
FROM node:19.2-alpine3.17

#cd app
WORKDIR /app 

#Destino /app
COPY app.js package.json ./

#Instalar las dependencias
RUN npm install 

#Comando RUN de la imagen
CMD ["node","app.js"]