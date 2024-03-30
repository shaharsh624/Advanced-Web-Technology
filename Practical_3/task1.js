const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/mydb';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connectToMongoDB();


async function inserto(client,newdoc){{
    const result = await
    client.db('mydb').collection('awt').insertOne(newdoc);
    console.log(`New listing created with the following id: 
    ${result.insertedId}`);

    }
}

data = {
    "name": "Harsh Shah",
    "rollno": "21BCP359",
}

// inserto(client, data)