import { useRouter } from 'next/router';
import NewMeetUpForm from '../../components/meetup/newMeetupForm'
import Head from 'next/head'

const NewMeetUp = () => {
    const router = useRouter();
    async function handleMeetUp(newMeetUpData){
        const response =await fetch('/api/new-meet', {
            method: 'POST',
            body:JSON.stringify(newMeetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result =await response.json();
        console.log(result);

        router.push('/')
    }
    return (
        <div>
            <Head>
                <title>Add new Meetup</title>
            </Head>
            <NewMeetUpForm onAddMeetup ={handleMeetUp}/>
        </div>
    );
};

export default NewMeetUp;