

# RIMAC FRONT END CHALLENGE - SUSTENTACION DEL PROYECTO


## INTRODUCCION
Este proyecto es una aplicación web de frontend que encuentra una solucion innovadora, sencilla, directa y facil de entender que busca simplificar el proceso de cotizacion y seleccion de seguros de vida.

Simplemente ingresando tu nro de DNI, tu nro de celular y un simple clic a 'Cotizar aqui' podras informarte de los beneficios que tenemos para ti y, si deseas, elegir un plan que mejor creas que se adapte a tus necesidades; Seguidamente te mostraremos un resumen detallado. Todo dentro de una interfase amigable, transparente y respetuosa.  


## DESCRIPCION DEL PROBLEMA (MEJORAR)
Muchas veces nuestros potenciales clientes no entienden  el uso de las aplicaciones por lo que terminan abandonando la aplicacion debido a una interfase engorrosa, aburrida y dificil de entender lo que nos lleva a perder un potencial cliente.


## SOLUCION PROPUESTA
Esta propuesta de proyecto simplifica la cotizacion de seguros de vida de manera directa y sencilla. basicamente nos 


## ANALISIS DEL PROYECTO
El proyecto consta de un sistema de cotizacion de planes de seguro de salud.

El diseno del proyecto se encuentra en figma y segun el analisis esta compuesto de 3 paginas: 

1. Seguro salud flexible.
2. Planes.
3. Resumen.


### SEGURO DE SALUD FLEXIBLE
Tiene por finalidad registrar a un posible cliente el cual puede:
   1. seleccionar el tipo de documento (DNI,CE).
   2. ingresar el nro de su documento.
   3. ingresar numero de celular.
   4. aceptar politica de privacidad.
   5. aceptar la politica de comunicaciones comerciales.
   6. boton "Cotizar Aqui".


### PLANES
Para este proyecto le estoy prestando interes a la aplicaicon de TDD (trst-driven development)


### RESUMEN

## REQUISITOS TECNICOS
Debido a la naturaleza del entorno en el que vivira la aplicacion, navegador, se ha seleccionado la siguiente lista de recurzos tecnicos

1. Javascript como lenguaje de programacion 
2. Libreria React/React-DOM 
2. Libreria React-router-dom 
3. typescript para el tipado de js
4. sass como preprocesador de css
5. react-router-dom para la navegacion entre componentes
6. redux-toolkit


## LINEAS DE INSTALACION


### TESTING CON JEST Y TESTING LIBRARY
```js
npm install --save-dev jest 
npm install --save-dev @testing-library/react 
npm install --save-dev @testing-library/jest-dom
```

### REACT ROUTER DOM
```js
npm install react-router-dom
```

### AXIOS
```js
npm install axios
```

### REDUXTOOLKIT
```js
npm install react-redux
npm install @reduxjs/toolkit

```

## DESARROLLO DE LA SOLUCION


hemos decidido utilizar la herramienta vite por ser mas rapida de compilar y ademas que nos permite el uso de typescript sin setting complejos, sass, tsx.

debido al objetivo del proyecto, que es mostrar las habilidades de un servidor, he decidido instalar el automatizador de tareas gulp para compilar archivos sass que me generen archivos css para cada componente.

el archivo .gitignore ha sido creado con la herramienta gitignore.io


## ESTRUCTURA DE CARPETAS UTILIZADA

[!IMPORTANT]
RIMAC-FRONTEND-CHALLENGE/
│
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/ (archivos estáticos, imágenes, etc.)
│
├── src/
│   ├── assets
│   │   ├── fonts
│   │   │    ├── fonts.css
│   │   │    ├── BRSonoma-Thin.otf
│   │   │    ├── BRSonoma-Regular.otf
│   │   │    ├── BRSonoma-Bold.otf
│   │   │    ├── Lato-Light.ttf
│   │   │    ├── Lato-Regular.ttf
│   │   │    └── Lato-Bold.ttf
│   │   └── images
│   │   │    ├── fonts.css
│   │   │    ├── BRSonoma-Thin.otf
│   │   │    └── Lato-Bold.ttf
│   ├── components/
│   │   ├── Atomos
│   │   ├── Moleculas
│   │   ├── Organismos
│   │   ├── Pages
│   │   └── Template
│   │         ├── Template1
│   │         └── Template2
│   │
│   ├── redux
│   │     ├── slices
│   │            ├── clientSlice
│   │            └── plansSlice
│   │
│   ├── styles
│   │   ├── scss
│   │        ├── variables.scss
│   │        ├── globals.scss
│   │
│   ├── utils/ (funciones y utilidades reutilizables)
│   ├── services
│   │      ├── api.js
│   │      ├── userService.js
│   │      └── plansService.js
│   │
│   ├── App.js
│   ├── index.js
│   ├── index.css (estilos globales)
│   │
│   ├── services
│   │
│   ├── types
│   │
│   ├── assets/ ()
│   │
│   ├── config/ (configuración de la aplicación)
│   │
│   └── vite-env.d.ts
│
├── .eslintrc (configuración de ESLint)
├── .gitignore
├── gulpfile.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .prettierrc (configuración de Prettier)
├── .babelrc (configuración de Babel) 


se tomo en cuenta emplear una estructura centrada en TDD , o seaun enfoque a aplicar test a los componentes y para la componetizacion se esta empleando atom design



## TESTING CON VITEST

### SCRIPT TEST
en package.json

```json
'scripts':{
   'test': 'vitest'
}

```

### VITEST UI
install vitest ui:

```js
npm install -D @vitest/ui
```

config test ui en script:
```js
  "scripts": {
    "test-ui":"vitest --ui"
  },
```

En terminal:
npm run test-ui


### IMPORTACION DE METODOS

se puede obviar importaciones de vitest como: describe,test ... etc.

```js
import {describe,test,expect} from 'vitest
```

se puede ocnfigurar de la siguiente manera

vite.config.ts

```js
  test:{
    globals: true,
    environment: "jsdom",
    css:true
  }
```
para que los metodos de vitest esten disponibles globalmente:
globals:true

al quitar las importaciones posiblemente te marque error debido a que typescript intente entender que metodos son los que estas ingresando en el test

```js
describe('unit-test atomicCard component',() => {
  test('should ', () => {
    expect(3+6).toBe(9)
  });
})
```

podemos hacer que vite evite esas validaciones, para eso configuraremos vite.config.ts
agregando la siguiente linea:
```js
/// <reference types="vite/client" />
```

puedes reiniciar Ts server:
1. Aprieta F1 
2. en la caja escribe Ts server y enter

con esto reinicias los datos de typescript


En documentacion getting started:
buscar globals 
encontraras que se debe configurar vitest en typescript


en tsconfig.json:
```js
  "compilerOptions": {
   //otras configuraciones
    "types":["vitest/globals"],
```

si te aparece marcado describe como un error posiblemente sea por que necesita que importes algo ya que los test son considerados script globales.




instalaremos react testing library

```js
npm install -D @testing-library/react
```



