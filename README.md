# romanize_express_json

A simple Node.js API example using [Express 4](http://expressjs.com/).

The API converts arabic numbers to roman numeral and returns the result in JSON format.

There is also basic validation of the entered value to make sure it is numeric, positive and less than 4000.

There are 2 htnl tests in the /public folder. client_hardcode,html uses AJAX, but is currently harcoded to use 2016.
form.html uses a form to submit the entered year.

Real testing will be added shortly.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/).

```sh
npm install
npm start
```

Your app should now be running on [localhost:3000]

A sample call to the API would be:

http://localhost:3000/roman/2016

where /roman is the mapped route and /2016 is the selected year.

The result should  be echoed to the screen as:

{"result":"MMXVI"}

This is also deployed a Heroku at:

https://romanize-node-express.herokuapp.com

and can be seen in action via a call such as:

https://romanize-node-express.herokuapp.com/roman/2016
