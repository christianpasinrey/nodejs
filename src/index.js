import express from 'express'; //module for creating servers
import { dirname, join } from 'path'; //module for working with paths
import { fileURLToPath } from 'url'; //module for working with paths-url

const app = express(); //init app

const __dirname = dirname(fileURLToPath( //get path of src folder project
    import.meta.url));
console.log(join(__dirname, 'views'));
app.set('views', join(__dirname, 'views')); //set path of views; dirname concat views with join method
app.set('view engine', 'ejs'); //set engine of views; previously npm i ejs; not imported cause node supports it by default
app.get('/', (req, res) => res.render('index')); //render index.ejs on / route

app.listen(3000); //start server on port 3000
console.log('Server is listening on port', 3000); //log success message