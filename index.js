const app=require("./app.js");

const config=require("./config/config.js");

const PORT=config.app.port;
app.listen(PORT,()=>{
    console.log('app is running on http://localhost:${PORT}');
    
});
