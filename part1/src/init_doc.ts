/*
vérifié si node est installé avec node -v

créer un fichier .js classique
lancé la commande npm init
ensuite : 

npm install typescript
npm install ts-loader
npm install webpack
npm install webpack-cli

ou : 
npm install typescript ts-loader webpack webpack-cli

créer un fichier nommé tsconfig.json à la racine !
créer un fichier nommé webpack.config.js  à la racine !

on ajoute principalement ceci à tsconfig : 
{
    "compilerOptions": {
        "target" : "ES2017",
        "noEmitOnError": true,
        "strict" : true,
        "experimentalDecorators":  true
    }
}

et ceci à webpackconfig : 
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/app.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};


pour lancer la compilation continue de notre projet ! 
npx webpack --watch
*/