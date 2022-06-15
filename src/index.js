import express from 'express'; //module for creating servers
import { dirname, join } from 'path'; //module for working with paths
import { fileURLToPath } from 'url'; //module for working with paths-url
import router from './routes/router.js'; //module for working with paths-url
import expressEjsExtend from 'express-ejs-extend';
import path  from 'path';
const app = express(); //init app
const __publicDir = path.resolve("./public"); //get path to public dir
const __dirname = dirname(fileURLToPath( //get path of src folder project
    import.meta.url));
console.log(__dirname);
app.engine('ejs', expressEjsExtend); // add this line
app.set('view engine', 'ejs'); //set engine of views; previously npm i ejs; not imported cause node supports it by default
app.set('views', join(__dirname, 'views')); //set path of views; dirname concat views with join method
app.use(express.static(__publicDir)); //set path of public folder; dirname concat public with join method
/* app.use("/public", express.static("static")); */
app.use(router); //use router

app.listen(3000); //start server on port 3000
console.log('Server is listening on port', 3000); 

//log success message