import { MongoClient } from "mongodb"

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body

    const client = await MongoClient.connect('mongodb+srv://ajayw4003:yawmaaj111@cluster0.jbqse.mongodb.net/meetdata?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollections = db.collection('meetups');

    const result = await meetupsCollections.insertOne(data)
    console.log(result);
    client.close();

    res.status(201).json({message: "meetup added successfully"})
    }
}
export default handler;