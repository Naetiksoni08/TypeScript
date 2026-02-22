// .d.ts file is basically a declaration file.
// the hints and the erros that i get by ts is given by these declaration files only 
// lib folder is the place where we actually write our source code and the bin folder is the one which has all the executable files mostly



// To use TypeScript in a project:
// npm i -D typescript
// npx tsc --init
// This creates:
// tsconfig.json
// TypeScript compiler setup
// Now you can create:
// .ts files
// .tsx files (React + TS)
// 🔹 2. What are Type Definitions?
// Type definitions tell TypeScript:
// function parameters
// return types
// object structure
// library APIs
// They are written inside:
// *.d.ts  (declaration files)
// Example:
// declare function express(): Application;
// 🔹 3. Why do we need @types packages?
// Many libraries are written in JavaScript.
// JavaScript libraries do NOT automatically provide type information.
// So TypeScript cannot understand them.
// Example error:
// Cannot find declaration file for module 'react'
// 🔹 4. What does this command do?
// npm i -D @types/library-name
// Example:
// npm i -D @types/react
// npm i -D @types/express
// npm i -D @types/node
// What it actually does:
// installs TypeScript type definitions
// adds .d.ts files inside:
// node_modules/@types/
// These files describe the library structure for TypeScript.
// 🔹 5. Important Concept (MOST IMPORTANT)
// TypeScript installation ≠ Library types
// Installing TypeScript:
// ✔️ lets you write TypeScript code
// Installing @types:
// ✔️ helps TypeScript understand external libraries
// 🔹 6. Can you write .ts files without @types?
// YES.
// You can always write:
// const x: number = 10;
// Because this is YOUR code.
// 🔹 7. What happens if library types are missing?
// Your code still runs, but TypeScript will show errors when using that library.
// Example:
// Cannot find declaration file for module 'react'
// 🔹 8. React Example (Real Flow)
// 1️⃣ Install React
// 2️⃣ Install TypeScript
// npm i -D typescript
// 3️⃣ Write .tsx files
// 4️⃣ If React types missing → error
// 5️⃣ Install:
// npm i -D @types/react @types/react-dom
// 6️⃣ TypeScript now understands:
// JSX
// components
// hooks
// props

// When we install @types/library-name, we are installing TypeScript type definition files for that 
// JavaScript library. These files describe the structure and APIs of the library so that TypeScript 
// can understand it, provide autocomplete, and perform type checking.