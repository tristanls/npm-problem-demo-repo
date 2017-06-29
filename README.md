# npm-problem-demo-repo

This repository demonstrates a problem I have with `npm install`.

After cloning the repository, running `node index.js` "works":

```
$ node index.js
hello o/
```

If I attempt to `npm install`, `npm` tries to look in the registry instead of accepting already present module.

```
$ npm install --no-save
npm ERR! code E404
npm ERR! 404 Not Found: in-node-modules-folder@0.1.0
```

This prevents me being able to use git submodules to manage private node modules.
