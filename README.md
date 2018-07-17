## How to use

Install dependencies for front end and server for getting incoming contact applications.
Go to the project directory and run following commands:

```sh
npm install
node server.js
```

After that server will be started and all new contact applications will be saved in `contacts.json` file.
This server listens for `3000` port. Port should not be busy.

Then it is needed to create `bundle.js` via webpack. Globally installed `webpack` may be used.

```sh
webpack
```

Finally please open http://localhost:3000/ on your local machine.

Was applied ES6 (without ES6+/ES7 experimental features) syntax.

Network for professionals [Soshace](https://soshace.com)
