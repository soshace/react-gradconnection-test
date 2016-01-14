## How to use

Install dependencies for front end and server for getting incoming contact applications.
Go to the project directory and run following commands:

```sh
npm install
node server.js
```

After that server will be started and all new contact applications will be saved in `contacts.json` file.
This server listens for `3000` port.

Then it is needed to create `bundle.js` via webpack.

```sh
webpack
```

Then please open public/index.html file by browser using web server (on localhost) or by using Firefox directly.