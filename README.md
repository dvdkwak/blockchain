# Blockchain Example

## About the project

In this project can be found an example of how a simple blockchain is made. The project is made using Typescript, NodeJS and Gulp. Here you can read everything you need to get this project running!

## Aim of the project

This project has been made to personally practice the use of Typescript in a NodeJS application in which I tried to implement some OOP technics like the use of interfaces, typehinting en encapsulation.

The choice of making a blockchain example is made because of a whish from the company I currently work (ROC Friese Poort). A colleague of mine would like to tell students about the working of blockchain and what could provide a better example than deliviring a home-made blockchain ourselves?

## Installation and running of the project

In order to run this project first clone or fork this repository and install it locally using either git or just download the repository with use of the download link above.

The project contains the following structure:

```files
- /src
  - /Interfaces
    - Timestamp.ts
    - Transaction.ts
  - /Objects
    - Block.ts
    - Blockchain.ts
  - index.ts
- .gitignore
- gulpfile.js
- pakcage-lock.json
- package.json
- README.md
- tsconfig.json
```

First step is the installation of all the needed packages, you can do that with the following command:

```bash
npm install
```

Within the `src` folder resides the code of the application. The code within `src` is written in Typescript and you won't be able to run this code without first building it.

Run the following command in the terminal in order to build and run the code:

```bash
npm start
```

*Keep in mind you need to have nodejs installed on your system!*

## About Typescript

Typescript is a language maintained by Microsoft and you can find a load of information about it [here](https://www.typescriptlang.org/).

Within this project there is a rather simple `tsconfig,json` file. In here, the settings for the use of typescript are stored.

```json
{
  "files": ["./src/*.ts", "./src/**/*.ts"],
  "compilerOptions": {
    "noImplicitAny": true,
    "target": "es6",
    "module": "commonjs",
  }
}
```

*The typescript.json file.*

In this case you can see two properties: `files` and `compilerOptions`. The first checks what files should be transpiled using the typescript transpiler and the latter gives information about what to do during transpiling. In this project we transpile all files within the `src` folder and use some default settings found on [the page about tsconfig](https://www.typescriptlang.org/tsconfig).

## gulp(file)

In order to build and run the program I have implemented some gulp tasks. There are four tasks defined in this project:

- handleTypescript
- handleFiles
- clean
- compressJs

**handleTypescript** is a method to compile the typescript into the `src` folder to the `out` folder.

**handleFiles** is a method to copy all files except typescript files from the `src` folder to the `out` folder with the same paths.

**clean** is a method which removes the entire contents of the `out` folder.

**compressJs** is a method which compresses the created javascript in the `out` folder.

The sepperate tasks can be called with the following commmands:

```bash
gulp build
```

*Building the application in the out folder. (this does clean, hanldeTypescript, compressJs and handleFiles).*

```bash
gulp clean
```

*Removing all the content of the `out` folder.*

```bash
gulp
```

*Default calls the build task action.*

To view what the tasks are you can run the following command:

```bash
gulp --tasks
```

## Examples

Within the project there are two simulations built. They are called 'alteredSetup' and 'correctSetup'. The correctSetup shows a simulation of a blockchain with a working, and thus correct, setup. The other simulation shows a blockchain in which a chain is first made, and then altered to show the chain's validation check.

```ts
import { correctSetup } from "./Simulations/correctSetup";
import { alteredSetup } from "./Simulations/alteredSetup";

// to show a correct setup
correctSetup.simulate();

// to show a altered setup
// alteredSetup.simulate();
```

*Use the above setup to simulate the correct setup.*

```ts
import { correctSetup } from "./Simulations/correctSetup";
import { alteredSetup } from "./Simulations/alteredSetup";

// to show a correct setup
// correctSetup.simulate();

// to show a altered setup
alteredSetup.simulate();
```

*Use the above setup to simulate the altered setup.*
