import { MongoClient, ObjectId} from "mongodb"
import MeetupDetails from '../../components/meetup/meetupDetails'

const MeetupId = (props) => {
    return (
        <MeetupDetails 
                title = {props.meetdata.title}
                address = {props.meetdata.address}
                description ={props.meetdata.description}
                image = {props.meetdata.image}
        />
    );
};

export async function getStaticPaths(){

    const client = await MongoClient.connect('mongodb+srv://ajayw4003:yawmaaj111@cluster0.jbqse.mongodb.net/meetdata?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find({}, { _id: 1}).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meet => ({params: {meetup: meet._id.toString()},
        })),
    }
}

export async function getStaticProps(context){
    const meetup = context.params.meetup;
    const client = await MongoClient.connect('mongodb+srv://ajayw4003:yawmaaj111@cluster0.jbqse.mongodb.net/meetdata?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollections = db.collection('meetups');

    const selectedMeetup = await meetupsCollections.findOne({ _id: ObjectId(meetup) })
    client.close();

    return{
        props: {
            meetdata: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}


export default MeetupId;