## Motivation
Everytime I start a new firebase project with express, I go through same steps to figure out how to setup the environement correctly. so I decided to create this as a boilerplate for my projects and maybe it could be of help for other who faces the same. 

## scripts
```sh 
yarn dev
```

```sh
yarn deploy
```

## key files
- client/src/setupProxy.js
- firebase.json
- functions/index.js
- .firebaserc (ignored but the project id is being used in client/src/setupProxy.js file for local development)

## TODO
- [ ] add react router to prove the rewrites is limited to `/api/**` only


