# Cuenteamos

[<img alt="cuenteamos" height="60" src="https://github.com/simonbermudez/cuenteamos.com/blob/main/public/logo-with-text.png?raw=true" />](https://cuenteamos.com)

cuenteamos es una alternativa gratuita y de código abierto a Splitwise. Puedes utilizar la instancia oficial en [cuenteamos.com](https://cuenteamos.com) o implementar tu propia instancia:

[![Implementar con Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcuenteamos-app%2Fcuenteamos&project-name=my-cuenteamos-instance&repository-name=my-cuenteamos-instance&stores=%5B%7B%22type%22%3A%22postgres%22%7D%5D&)

## Características

- [x] Crear un grupo y compartirlo con amigos
- [x] Crear gastos con descripción
- [x] Mostrar los saldos del grupo
- [x] Crear gastos de reembolso
- [x] Aplicación web progresiva
- [x] Seleccionar todos/ningún participante para los gastos
- [x] Dividir gastos de manera desigual [(#6)](https://github.com/simonbermudez/cuenteamos.com/issues/6)
- [x] Marcar un grupo como favorito [(#29)](https://github.com/simonbermudez/cuenteamos.com/issues/29)
- [x] Indicar quién eres al abrir un grupo [(#7)](https://github.com/simonbermudez/cuenteamos.com/issues/7)
- [x] Asignar una categoría a los gastos [(#35)](https://github.com/simonbermudez/cuenteamos.com/issues/35)
- [x] Buscar gastos en un grupo [(#51)](https://github.com/simonbermudez/cuenteamos.com/issues/51)
- [x] Subir y adjuntar imágenes a los gastos [(#63)](https://github.com/simonbermudez/cuenteamos.com/issues/63)
- [x] Crear gasto escaneando un recibo [(#23)](https://github.com/simonbermudez/cuenteamos.com/issues/23)

### Posibles características futuras

- [ ] Capacidad para crear gastos recurrentes [(#5)](https://github.com/simonbermudez/cuenteamos.com/issues/5)
- [ ] Importar gastos desde Splitwise [(#22)](https://github.com/simonbermudez/cuenteamos.com/issues/22)

## Pila tecnológica

- [Next.js](https://nextjs.org/) para la aplicación web
- [TailwindCSS](https://tailwindcss.com/) para el estilo
- [shadcn/UI](https://ui.shadcn.com/) para los componentes de la interfaz de usuario
- [Prisma](https://prisma.io) para acceder a la base de datos
- [Vercel](https://vercel.com/) para la implementación (aplicación y base de datos)

## Contribuir

El proyecto está abierto a contribuciones. ¡Siéntete libre de abrir un problema o incluso una solicitud de extracción!

Si deseas contribuir financieramente y ayudarnos a mantener la aplicación gratuita y sin publicidad, también puedes:

- 💜 [Patrocinarme (Sebastien)](https://github.com/sponsors/scastiel), o
- 💙 [Realizar una pequeña donación única](https://donate.stripe.com/28o3eh96G7hH8k89Ba).

## Ejecutar localmente

1. Clona el repositorio (o bifúrcalo si tienes la intención de contribuir)
2. Inicia un servidor PostgreSQL. Puedes ejecutar `./scripts/start-local-db.sh` si aún no tienes un servidor.
3. Copia el archivo `.env.example` como `.env`
4. Ejecuta `npm install` para instalar las dependencias. Esto también aplicará las migraciones de la base de datos y actualizará Prisma Client.
5. Ejecuta `npm run dev` para iniciar el servidor de desarrollo

## Ejecutar en un contenedor

1. Ejecuta `npm run build-image` para construir la imagen de Docker desde el Dockerfile
2. Copia el archivo `container.env.example` como `container.env`
3. Ejecuta `npm run start-container` para iniciar los contenedores de postgres y cuenteamos2
4. Puedes acceder a la aplicación navegando a http://localhost:3000
