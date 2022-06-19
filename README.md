## Simple CRUD API using in-memory database underneath.

- node version must be 16 LTS

# How to start:
- Clone repository:
- ``git clone git@github.com:RimidalU/crud-api.git``
- Go to repository:
- ``cd crud-api``
- Install dependencies:
- ``npm intall``

# Commands

- ``npm run start:dev`` - start dev server
- ``npm run start:prod`` - starts the build process and then runs the bundled file
- ``npm run start:multi`` - starts multiple instances of your application using the Node.js Cluster API
- ``npm run test`` - run tests for API

# Routes:

- ``list     GET      /api/products``
- ``get one  GET      /api/products/:id``
- ``add new  POST     /api/products``
- ``update   PUT      /api/products/:id``
- ``remove   DELETE   /api/products/:id``

# User interface

- ``{``
- ``	id: string;``
- ``	username: string;``
- ``	age: number;``
- ``	hobbies: string[];``
- ``}``