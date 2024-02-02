import express from 'express';
import router from './src/router/user.js';
import bodyParser from 'body-parser';


let app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//router
app.use("/", router)



app.listen(8000, "localhost", ()=>{
    console.log(`http://localhost:8000/`)
})

export default app



