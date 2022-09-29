
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://User:1234Abc@cluster0.1lhewui.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database= client.db('ContactsDatabase');
const ContactsCollection = database.collection('ContactsCollection')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const contact = req.body;
    // output the book to the console for debugging
    ContactsCollection.insertOne(contact);
    console.log(contact);
    res.send('Contact added successfully');
});

app.get('/contact',async (req, res)=>{
    
    contacts = await ContactsCollection.find().toArray();
    
    res.json(contacts);

});

app.get('/contact/:mobile', async (req, res) => {

    let mobile = req.params.mobile;
    console.log(mobile);

    let contact = await ContactsCollection.findOne({mobile:mobile});
    console.log(contact);
    res.json(contact);
    // console.log(contact);

});

app.delete('/contact/:mobile', async (req, res) => {

    let mobile = req.params.mobile;
    console.log(mobile);

    let query = { mobile: mobile };

    await ContactsCollection.deleteOne(query);

    res.send('Deleted Successfully')


});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));