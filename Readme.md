# NODEJS

## Proyecto NodeJs Microservicio  

Proyecto Base NodeJs para microservicios

## Comenzando

Preparación inicial y consideraciones

## Pre-requisitos

Para la instalación se necesita:

* [NodeJsLTS](https://nodejs.org/)  
* [VisualStudio Code](https://code.visualstudio.com/)  

## Instalación

Como instalar las dependencias el proyecto:

```bash
npm install
```

Compilar:

```bash  
npm run tsc
```

Levantar el servicio:  

```bash  
node ./build/config/server/index.js
```

## Swagger  

```bash
npm install -g swagger-jsdoc
swagger-jsdoc -d swaggerDef.js -o swagger.json
```

## Contributors

Javier RodrÃ­guez  
[francisco.rodriguez@axity.com]  
