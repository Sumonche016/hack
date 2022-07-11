const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

// midleware 
app.use(cors());
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://hack:mrWlfoMu6DNvLudL@cluster0.tnm2r.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect()
        const userData = client.db('hack').collection('data');


        app.post('/user', async (req, res) => {
            const data = req.body;
            const result = await userData.insertOne(data)
            res.send(result)
        })

    }
    finally {

    }
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('runnig the server')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



