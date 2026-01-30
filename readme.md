# 📘 TypeScript Setup & Execution Notes

> Personal notes for understanding how **TypeScript works with Node.js**  
> Covers setup, compilation, and ideal development workflow.

Note:
> TypeScript code cannot run directly.
> It must be compiled to JavaScript, then can be run using Node.

# project setup
- mkdir typescript
- cd typescript


# Initialize npm
- npm init -y
- Creates package.json



# Install TypeScript locally
> run this command, npm i -D typescript, this will create
- node_modules/
- package-lock.json
- adds TypeScript to devDependencies
> -D means devDependency (used only during development)


# TypeScript Configuration
- Create tsconfig.json
- npx tsc --init

# Inside tsconfig.json

- 📌 rootDir → where `.ts` files live
- 📌 outDir → where compiled `.js` files go
- 📌 dist folder is auto-created, not manual  
  (just need to uncomment the outDir and rootDir)

# Good practices (Ideal flow of executing a ts file)

- Write TypeScript Code inside src/index.ts then run
- npx tsc
- 📌 Converts all .ts files in src/
- 📌 Outputs .js, .d.ts, .map files in dist/

> Now from here there are several ways to run ur code:-


- 1. Is that you can make two scripts in package.json
   "build":"tsc",
   "start":"node dist/demo.js" or for all file *.js

   In this case, Whenever u make a new ts file u need to first convert that file into js file using tsc ie npm run build and then u can simply run npm start.

- 2. Second ways is to run ur ts code using nodemon
     
- the catch with nodemon is that it cant read typescript or it cant compile typescript code so we need to maintain 2 terminals:-

> Compile in watch mode ( 1st terminal)
- npx tsc -w
- 📌 Keeps watching files
- 📌 Auto-recompiles on save
- 📌 No need to re-run command

> install nodemon doing,
- npm i -D nodemon
- add a script:
- "dev": "nodemon dist/*.js"

- And then finally run this in a seperate terminal that npm run dev. 


So, the final ideal flow will be: 

- Add a new file in src and write ur typescript code
- then simply install nodemon 
- add a dev script
- open a temrninal and run npx tsc -w ( watch mode )  this will compile ur ts file into js files and add some .map .d.ts.map files in dist folder
- then simply open another terminal and run -- npm run dev thats it.

Note:
> At last tsc is used to compile ur ts code into js code 
> and node is used to finally run ur code


Terminal 1 — TypeScript watch mode
npx tsc --watch
👉 what will this do?
As soon as you will save a file with .ts extention
TypeScript automatically compiles and dist/ will have .js file
📌 That is:
❌ dont need to run npx tsc again and again
  Auto compile