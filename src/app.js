const express = require ('express');
const path = require ('path');

const app = express();



//levantamos el servidor de express
app.listen(3000,()=>{
    console.log('servidor ok y corriendo en el puerto 3000');
})

app.get('/',function(req,res){
    const indexPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(indexPath);
});