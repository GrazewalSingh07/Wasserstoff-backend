const app= require("./index")
require('dotenv').config()
const port=process.env.PORT || 4000
const Moralis = require("moralis").default;
const MORALIS_API_KEY=process.env.MORALIS_API_KEY;
 
Moralis.start({
    apiKey:MORALIS_API_KEY
}).then(()=>{
    app.listen(port, function(){
        console.log('listening on port '+ port)
        })
})
