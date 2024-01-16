import { MongoClient, ObjectId } from "mongodb"; 
import MeetupDetails from "@/components/meetups/MeetupDetails";

export default function MeetupID(props) {
    return <MeetupDetails 
        title= {props.meetupData.title}
        image= {props.meetupData.image}
        description= {props.meetupData.description}
        address={props.meetupData.address}
        />
}
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://nancyhou958:not4u2no@cluster0.cobn8bc.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
  
    const meetups = await meetupCollection.find({}, {_id: 1}).toArray();
  
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    }
}
export async function getStaticProps(context) {
    const meetupid = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://nancyhou958:not4u2no@cluster0.cobn8bc.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
  
    const selectedMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupid)});
  
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
}