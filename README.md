## 🚀 Comenzando con el proyecto
#### Al iniciar el proyecto deberias iniciar con:
```bash
npm install
# or
pnpm install
```

#### Al terminar de instalar las dependencias, puedes iniciar el proyecto con:
```bash
npm run dev
# or
pnpm run dev
```

## 📈Obtener la API KEY de Google
#### Vale comentar que google tiene sus creditos gratis con una cuenta nueva en Google Cloud Platform.
#### La página donde se puede obtener el API KEY es <a href="https://aistudio.google.com/app/apikey">Aquí</a>.
#### También dejo documentación de la misma <a href="https://aistudio.google.com/app/apikey">Documentación</a>

## ⚙1️⃣ Configurando el Modelo Gemini de Google por variable de entorno
#### Se deberá crear un archivo llamado **_.env_** en la raiz del proyecto, donde alli tienes que poner la variable de entorno **_GOOGLE_GENERATIVE_API_KEY_** con el valor del **_API KEY_**.

## ⚙2️⃣ Configurando el Modelo Gemini de Google por archivo de API
#### También puedes en el mismo archivo del "Api de la pagina" modificarlo.
#### Solo deberias ir a ./app/api/evaluate-web/route.ts y modificar la siguiente linea:
```ts

if (process.env.GOOGLE_GENERATIVE_API_KEY == undefined) {
  process.env.GOOGLE_GENERATIVE_API_KEY = "AIz...XY9Q"
}
```

### _Nota: En esa ruta tambien te da acceso al modelo de google, alli puedes probar los modelos que google ofrece_