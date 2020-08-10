const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');

app.use(require('./Routes'));
app.use(cors())
app.listen(port, (error)=>
{
    if(error)
    {
        console.log('There was an error in Starting the server at the port', port);
        return;
    }
    console.log(`Server is running on the port ${port}`);
})