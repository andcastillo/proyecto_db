# Contenedor de la base de datos

## Definimos el USER_NAME

Poner un nombre de usuario en una variable de entorno. 

`USER_NAME=andcastillo`

## Crear la imagen de docker con el esquema y los datos pre-guardados

```
cd database_postgres
docker build -t ${USER_NAME}/mande_db .
```

## Poner a correr el servidor de bases de datos

```
docker run --name mande_db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d ${USER_NAME}/mande_db
```
# Contenedor para el backend

## Instalar las dependencias

Debes estar en la carpeta raìz del proyecto. 

```
cd backend_express
```

## Crear el contenedor para el backend

`docker build -t ${USER_NAME}/mande_backend .`

## Instalar las dependencias con npm

`docker run -it --rm -v $(pwd):/usr/src/app ${USER_NAME}/mande_backend /bin/bash`

En la terminal del contenerdor ejecutar

```
npm install
   exit
```

## Crear un contenedor con la imagen y conectarla con el servidor de bases de datos

`docker run -it --rm -p 3000:3000 -v $(pwd):/usr/src/app --link mande_db:postgres --name mande_app ${USER_NAME}/mande_backend`

# Probar la aplicación

Visite las direcciones

`localhost:3000/hello`
`localhost:3000/usuario`
`localhost:3000/usuario/1`
`localhost:3000/crear`

