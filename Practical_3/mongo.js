const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/mydb';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB');;
    }
}

connectToMongoDB();
