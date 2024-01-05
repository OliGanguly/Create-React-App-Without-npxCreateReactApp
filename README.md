
# Create React App without npx create-react-app command




## NPM [It's everything but not package manager]
NPM is not stand for Node package manager,It is tool used for package management for Node projects.When we do npm init we get a new file package.json, so this package.json is a configuration file for npm, basically contain all the configuration of npm in form of json, We need package.json file to manages all the packages[dependencies] we install in our project.
## Bundler
Most important package in our project is Bundler.
Our whole code[html,css,js] need to be minified,cleaned and compressed before
it goes to production.Bunlder helps us to do that.
Webpack,parcel,vite are bundlers.
create-react-app uses webpack bundler.
## Parcel
Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.
 Parcel installaion
 ```bash
npm install -D parcel
```
 
* -D is used for development and as a development    dependency.
  There is two types of dependencies

   1.dev dependency - Dependency required for development purpose

  2.normal dependency - normal dependency are used in production   also

## Parcel Features
* Creates Dev Builds
* Creates Local server [Host app to server]
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting  

## HMR[Hot module Replacement] 
Means parcel will keep track of the files which we are updating.there is a File watching Algorithm(written in cpp). It keeps an eye of all the files which are changing in real time and tells the server to reload.

## Parcel-cache
.parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
There will be file called .parcel-cache which will be there automatically

## dist Folder
dist folder keeps the files minified for us.
when we execute npx parcel index.html it generates development build of our project and hosted onto localhost:1234,so when its generate the development build it puts it in the dist folder.Code in browser is coming from the dist,when we refresh the page it uses parcel cache to update the page using HMR.

* After installing parcel we will get package-lock.json and node modules
```bash
"devDepenedencies":{
  "parcel":"^2.8.2"
 }
``` 

## Tilda [ ~ ]  
Approximately equivalent to version,upgrade to minor version - will update you to all future patch versions, without incrementing the minor version

## Caret [ ^ ] 
Compatible with version,upgrade to major version - will update you to all future minor/patch versions, without incrementing the major version.

## What is the difference between package.json and package-lock.json?
package.json-configuration file of npm.
Which keeps track of all the versions of the packages or dependencies.It can have ~(minor upgradation) or ^(major upgradation)
package-lock.json-keep track of the exact version that is being installed 

## Common Issue [Something is working on localhost/my Machine but not works in production] , Why?

Basically to avoid that package-lock.json keeps a copy what ever is there in my machine is the same version deployed to production.
package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## What is node_modules ? Is it a good idea to push that on git?
node_modules folder/database like a cache for the external modules that our project depends upon.[Like our app has dependency on parcel,parcel can be dependent on something which is called transitive dependencies,all are in the node modules] When we npm install them, they are downloaded from the web and copied into the node_modules folder.
We don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.
we put node models in .gitignore file.

So the steps :
```bash
1.npm init [ generate package.json]
2.npm install -D parcel [ generate package-lock.json and node_modules]
3.npx parcel index.html [Server running at http://localhost:1234 - Parcel host our application onto the localhost:1234 server]
4.npm install react
5.npm install recat-dom
```