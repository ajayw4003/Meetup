import classes from './meetups.module.css'
import MeetupItem from './meetupitem'


const MeetUps = ({meetups}) => {
    return (

        <ul className = {classes.list}>
            {meetups.map((meet) => (
                <MeetupItem 
                    key ={meet.id}
                    id = {meet.id}
                    image = {meet.image}
                    title = {meet.title}
                    address = {meet.address}
                />
            ))}
        </ul>
    );
};

export default MeetUps;