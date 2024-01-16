import { MongoClient } from "mongodb"; 

export default async function handler (req, res) {
    
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://nancyhou958:not4u2no@cluster0.cobn8bc.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        client.close();
        
        res.status(201).json({message: 'Meetup inserted!'});
    }
}