## TML: Simple-use YAML data storage

> TML is a easy to use package for data manipulation

- **Docs** [docs](https://terracrow.github.io/tml)
- **NPM** [npm](https://npmjs.com/tml-db)

### Installation
```sh
# npm
npm install --save tml-db

# yarn
yarn add tml-db

# clone source code
git clone https://github.com/Terracrow/tml.git
```

```typescript
// #test.js

// import TMLDriver
import { TMLDriver } from 'tml';

const tml = new TMLDriver({
    limit: 100 // number of files allowed
});


tml.set();
tml.get();
tml.delete();
```

> Documentation: [here](https://terracrow.github.io/tml)

---

<iframe width="1280" height="720" src="https://www.youtube.com/embed/YBICTQu4FAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

***This project is not finished and can present some bugs.***
