# Development Journey: Step-by-Step Guide

1. mkdir server = create server directory
2. npx create-next-app client = create a front end next js
   - typescript
   - @types/node
   - @types/react
   - @types/react-dom
   - autoprefixer
   - postcss
   - tailwindcss
   - eslint
   - eslint-config-next
3. cd server = to go to the server folder
4. npm init = to create a package inside server folder
   - package name: (server)
   - version: (1.0.0)
   - description:
   - entry point: (index.js) server.js
   - test command:
   - git repository:
   - keywords:
   - author: Jezreel Abella
   - license: (ISC)
5. echo server.js = create server.js file inside server folder
6. npm i express = install express js file inside server folder
7. npm i nodemon --save-dev = install nodemon for dev mode and to detect any server error while on dev mode
8. set up server package.json scripts
   <!-- "start": "node server", -->
   "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node server",
   "dev": "nodemon server"
   },
9. Write the API in server.js
10. npm run dev = run the nodemon in server to detect if there will be error
11. API is live at localhost:8080/api/home
12. Go to client folder and run "npm run dev"