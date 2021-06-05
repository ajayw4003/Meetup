import classes from './meetupitem.module.css'
import { useRouter } from 'next/router'

const MeetupItem = (props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push('./'+ props.id)
    }
    return (
        <li className = {classes.container}>
           <img
            src ={props.image} 
            alt = {props.title}
            height = {300}
            width ={300}
            />
           <h2>{props.title}</h2>
           <p>{props.address}</p>
           <div>
               <button className ={classes.btn} onClick ={handleClick}>Details</button>
           </div>
        </li>
    );
};

export default MeetupItem;