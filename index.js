const express = require('express');
const app= express();
const port= process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://cleanUser:6l5cKOjGUXroythb@cluster0.10zxl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run= async ()=>{
    try{
        await client.connect();
        const servicesCollection = client.db("cleanServices").collection("services");


        app.get('/services', async(req, res)=>{
            const services= await servicesCollection.find({}).toArray();
            res.send(services);
        })

    }finally{

    }
}

run().catch(console.dir)


app.get('/', async(req, res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log('Ami Dowracchi', port);
})

//cleanUser
//6l5cKOjGUXroythb