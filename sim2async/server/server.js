//dependancy imports
require('dotenv').config();
const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
const session = require('express-session')


//controller files
const ctrl = require('./controller.js');
const checkUserSession = require('./checkUserSession')
//
const app=express();
app.use(bodyParser.json()); //translates our text to json format
app.use(express.static(`${__dirname}/../build`))

//env variables
const {SERVER_PORT,CONNECTION_STRING,SECRET} = process.env

//server/middleware setup
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('db connected on server.js')
}).catch(err=>console.log(err))

app.use(session({
    secret: SECRET, 
    resave: false,
    saveUninitialized: true
}))

app.use(checkUserSession)

//end middleware setup



//ENDPOINTS

////Authorization Endpoints
app.post('/api/register',ctrl.register);
app.post('/api/login',ctrl.loginUser);
app.get(`/api/logout`,ctrl.logout)


////END Authorization Endpoints

////Properties Endpoints


////End Properties Endpoints

//END ENDPOINTS


app.listen(SERVER_PORT,()=>console.log(`Listening on port:${SERVER_PORT}`))




// //bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlainTextPassword = 'SekritPassword'
// const someOtherPlaintextPassword = 'TotallySecure'

// bcrypt
//     .hash(myPlainTextPassword,saltRounds)
//     .then(hashRes=>{
//         console.log(`Hash: ${hashRes}`)
//     }).catch(err=>console.log(err))
// //end bcrypt