# simple-calculator
Simple Calculator

Link to the project task document:
[Project Task](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

How to run the app
1. Clone the repository:
```bash
git clone https://github.com/VikaViktoriaK/simple-calculator.git
cd simple-calculator
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm start
```
The app will open automatically in your browser at http://localhost:3000.
4. To build the production version:
```bash
npm run build
```
The built files will be in the `dist` folder.
5. To deploy to GitHub Pages:
```bash
npm run deploy
```

Project structure

.husky – stores configuration files for Git hooks.

.idea – contains project settings for the IntelliJ IDEA development environment.

dist – folder with the final project build:

index.html – main HTML file;

main.js – main JavaScript file.

node_modules – includes all installed npm dependencies and packages.

public – stores public resources:

index.html – an HTML file.

src – main folder with the source code:

calculator.js – calculator logic;

index.js – main JavaScript file of the project;

styles.css – styling for the interface;

utils.js – helper functions.

.babelrc – configuration file for Babel (JavaScript transpilation).

.gitignore – specifies files ignored by the Git version control system.

eslint.config.mjs – ESLint configuration for code quality checks.

package.json – project description, dependencies, and scripts.

package-lock.json – locks the exact structure of installed dependencies.

README.md – documentation and project description.

webpack.config.js – Webpack configuration settings.
