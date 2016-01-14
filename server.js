var fs         = require('fs'),
    path       = require('path'),
    express    = require('express'),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    app        = express();

var CONTACTS_FILE = path.join(__dirname, 'contacts.json');

app.use(cors());

app.set('port', 3000);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/contacts', function(req, res) {
    fs.readFile(CONTACTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        var contactApplications = JSON.parse(data),
            newContactApplication = {
                id:      Date.now(),
                author:  req.body.name,
                email:   req.body.email,
                message: req.body.message
            };
        contactApplications.push(newContactApplication);
        fs.writeFile(CONTACTS_FILE, JSON.stringify(contactApplications, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }

            res.setHeader('Cache-Control', 'no-cache');
            res.json(contactApplications);
        });
    });
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
