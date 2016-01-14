## How to use

Install server for getting incoming contact applications.
Go to the project directory and run following commands:

```sh
npm install
node server.js
```

After that server will be started and all new contact applications will be saved in `contacts.json` file.
This server listens for `3000` port.

Then please open public/index.html file by browser using web server.
For this default `run` configuration in WebStorm IDE was used by me.
Since IDE (or another server you preferred) opens web page in different port than `3000` I used Chrome browser because it doesn't emit CORS error while sending requests to another port on the same domain name (e.g. localhost).