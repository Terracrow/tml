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
