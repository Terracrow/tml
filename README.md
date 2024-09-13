## TML: Simple-use YAML data storage

> TML is a easy to use package for data manipulation

- **Docs** [docs](https://terracrow.github.io/tml)
- **NPM** [npm](https://npmjs.com)

### Installation
```sh
# npm
npm install --save tml-db

# yarn
yarn add tml-db

# clone source code
git clone https://github.com/Terracrow/tml.git
```

### Examples
> Initialize and set a value in a key

```typescript
// #test.js

// import TMLDriver
import { TMLDriver } from 'tml';

// data to be stored
const data = [
    {
        id: 1234,
        allowed: true
    },
    {
        id: 2341,
        allowed: false
    }
];

// create a database connection
const tml = new TMLDriver({
    limit: 100 // number of files allowed
    customDir: 'tml' // set custom output path or put 'tml'
});

// set 'data[]' in 'access_perms.yml'
tml.set({
    key: 'access_perms',
    value: data
});


/** Output (access_perms.yml)
 * ---
- id: 1234
  allowed: true
- id: 2341
  allowed: false
*/
```

> Get or delete data
```typescript
// #test.js

// get the value of a key
const usersPerms = db.get('access_perms');

// delete data
db.delete('access_perms');
```

---
***This project is not finished and can present some bugs.***

>Made by Terracrow | 1.0.0
