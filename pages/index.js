import { MongoClient } from "mongodb";
import MeetUps from "../components/meetup/meetups";
import Head from 'next/head';


function HomePage(props){
    return (
        <>
            <Head>
                <title>Meetups</title>
            </Head>
            <MeetUps meetups = {props.meetdata}/>
        </>
        
    );
};
export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://ajayw4003:yawmaaj111@cluster0.jbqse.mongodb.net/meetdata?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find().toArray();
    client.close();

    return {
        props: {
            meetdata: meetups.map((meet) => ({
                title: meet.title,
                address: meet.address,
                image: meet.image,
                id: meet._id.toString()
            }))
        }
        // revalidate: 10
    }
}

export default HomePage;

