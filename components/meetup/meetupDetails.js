import classes from './meetupDetails.module.css'

const MeetupDetails = (props) => {
    return (
        <div className = {classes.details}>
            <div>
                <img 
                    src = {props.image}
                    height ={400}
                    width ={500}
                    />
                <h2>{props.title}</h2>
                <p>{props.address}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default MeetupDetails;